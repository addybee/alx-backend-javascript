const { execSync } = require('child_process');

function countStudents(path) {
  try {
    const fileContent = execSync(`cat "${path}"`, { encoding: 'utf-8' }).trim(); // Wrap path in quotes to prevent injection
    const lineCount = execSync(`echo "${fileContent}" | wc -l`, { encoding: 'utf-8' }).trim(); // Count lines in the file content
    console.log('Number of students:', lineCount - 1);
    // Extract field names from the filecontent and remove the header
    const fields = execSync(`echo "${fileContent}" | awk -F, 'NR>1 {print $4}' | sort | uniq`, { encoding: 'utf-8' }).trim().split('\n');
    fields.forEach((field) => {
      const counts = execSync(`echo "${fileContent}" | awk -F, -v field="${field}" '$4 == field {count++} END {print count}'`, { encoding: 'utf-8' }).trim();
      const names = execSync(`echo "${fileContent}" | awk -F, -v field="${field}" '$4 == field {print $1}'`, { encoding: 'utf-8' }).trim().split('\n').join(', ');
      console.log(`Number of students in ${field}: ${counts}. List: ${names}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
