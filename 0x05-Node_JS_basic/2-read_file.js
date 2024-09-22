const { readFileSync } = require('fs');

function countStudents(path) {
  try {
    const data = readFileSync(path, { encoding: 'utf-8' });

    const lines = data.split('\n').slice(1);
    const fieldObject = {};

    lines.forEach((val) => {
      const [firstname, , , field] = val.trim().split(',');
      if (!fieldObject[field]) {
        fieldObject[field] = [];
      }
      fieldObject[field].push(firstname);
    });
    console.log(`Number of students: ${lines.length}`);
    Object.keys(fieldObject).forEach((key) => {
      console.log(`Number of students in ${key}: ${fieldObject[key].length}. List: ${fieldObject[key].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
