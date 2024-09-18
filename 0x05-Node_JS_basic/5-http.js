const { createServer } = require('http');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

async function countStudents(path) {
  try {
    // Read the file content
    const { stdout: fileContent } = await execPromise(`cat "${path}"`);
    const trimmedFileContent = fileContent.trim();

    // Count the lines excluding the header
    const { stdout: lineCount } = await execPromise(`echo "${trimmedFileContent}" | wc -l`);
    let resp = `Number of students: ${lineCount.trim() - 1}\n`; // Subtract 1 for the header row

    // Extract unique fields (assumed in the 4th column)
    const { stdout: fieldsOutput } = await execPromise(`echo "${trimmedFileContent}" | awk -F, 'NR>1 {print $4}' | sort | uniq`);
    const fields = fieldsOutput.trim().split('\n');

    /// Collect promises for each field
    const promises = fields.map(async (field) => {
      const { stdout: counts } = await execPromise(`echo "${trimmedFileContent}" | awk -F, -v field="${field}" '$4 == field {count++} END {print count}'`);
      const { stdout: namesOutput } = await execPromise(`echo "${trimmedFileContent}" | awk -F, -v field="${field}" '$4 == field {print $1}'`);

      const names = namesOutput.trim().split('\n').join(', ');
      resp = `${resp}Number of students in ${field}: ${counts.trim()}. List: ${names}\n`;
    });

    // Await all promises
    await Promise.all(promises);
    return resp;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const port = 1245;
const app = createServer((req, res) => {
  const { url } = req;
  // set content type
  res.setHeader('Content-Type', 'text/plain');
  // Define routing logic
  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    const db = process.argv[2];
    countStudents(db)
      .then((response) => {
        res.end(response); // End the response after the student data is logged
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
});

module.exports = app;

app.listen(port, () => {
  console.log('...');
});
