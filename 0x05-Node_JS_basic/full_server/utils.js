const { readFile } = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').slice(1); // Skip the header line.
        const fieldObject = {};

        lines.forEach((line) => {
          const trimmedLine = line.trim();
          if (trimmedLine) { // Check if line is not empty.
            const [firstname, , , field] = trimmedLine.split(',');
            if (firstname && field) { // Ensure both 'firstname' and 'field' are not undefined.
              if (!fieldObject[field]) {
                fieldObject[field] = [];
              }
              fieldObject[field].push(firstname);
            }
          }
        });

        resolve(fieldObject);
      }
    });
  });
}

export default readDatabase;
