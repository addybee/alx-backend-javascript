import readDatabase from '../utils';

const dbFilename = process.argv[2] || 'database.csv';


class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    readDatabase(dbFilename)
      .then((data) => {
        response.write('This is the list of our students');
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        fields.forEach((field) => {
          response.write(`\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
        });
        response.send()
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }

    readDatabase(dbFilename)
      .then((data) => {
        response.send(`List: ${data[major].join(', ')}`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }
}

export default StudentsController;
