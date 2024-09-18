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
    console.log('Number of students:', lineCount.trim() - 1); // Subtract 1 for the header row
    
    // Extract unique fields (assumed in the 4th column)
    const { stdout: fieldsOutput } = await execPromise(`echo "${trimmedFileContent}" | awk -F, 'NR>1 {print $4}' | sort | uniq`);
    const fields = fieldsOutput.trim().split('\n');
    
    // Loop through each field and count students + names
    for (const field of fields) {
      const { stdout: counts } = await execPromise(`echo "${trimmedFileContent}" | awk -F, -v field="${field}" '$4 == field {count++} END {print count}'`);
      const { stdout: namesOutput } = await execPromise(`echo "${trimmedFileContent}" | awk -F, -v field="${field}" '$4 == field {print $1}'`);
      
      const names = namesOutput.trim().split('\n').join(', ');
      console.log(`Number of students in ${field}: ${counts.trim()}. List: ${names}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
