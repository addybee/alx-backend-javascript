import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    readDatabase(process.argv[2])
      .then((data) => {
        response.write('This is the list of our students\n');
        Object.keys(data).forEach((field) => {
          response.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field]}\n`);
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
    const major = request.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((data) => {
        response.send(`List: ${data[major]}`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }
}

export default StudentsController;
