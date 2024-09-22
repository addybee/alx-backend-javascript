import readDatabase from '../utils';

const dbFilename = process.argv[2] || 'database.csv';


class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    readDatabase(dbFilename)
      .then((data) => {
        let message = 'This is the list of our students';
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        fields.forEach((field) => {
          message += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        });
        response.send(message)
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {

      readDatabase(dbFilename)
        .then((data) => {
          response.send(`List: ${data[major].join(', ')}`);
        })
        .catch((err) => {
          response.status(500).send(err.message);
        });
    }
  }
}

export default StudentsController;
