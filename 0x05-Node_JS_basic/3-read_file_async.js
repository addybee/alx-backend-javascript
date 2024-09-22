const { readFile } = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf-8' })
      .then((data) => {
        const lines = data.trim().split('\n').slice(1);
        const fieldObject = {};
        // group first names base on field and save as an object of arrays
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
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
