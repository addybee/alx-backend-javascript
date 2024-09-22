const { readFile } = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        reject(err);
      }
      let lines = data.split('\n').slice(1);
      const fieldObject = {};

      lines.forEach((val) => {
        const [firstname, , , field] = val.trim().split(',');
        if (!fieldObject[field]) {
          fieldObject[field] = [];
        }
        fieldObject[field].push(firstname);
      });
      resolve(fieldObject);
    });
  });
}

export default readDatabase;
