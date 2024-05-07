import readDatabase from '../utils.js';
const DB = process.argv[2];

class StudentsController {
  getAllStudents(req, res) {
    readDatabase(DB)
      .then((result) => {
        const csStudents = result['cs'];
        const sweStudents = result['swe'];
        const numStudents = csStudents.length + sweStudents.length;
        const output =
          'This is the list of our students\n' +
          `Number of students in CS: ${csStudents.length}. ` +
          `List: ${csStudents.join(', ')}\n` +
          `Number of students in SWE: ${sweStudents.length}. ` +
          `List: ${sweStudents.join(', ')}\n`;
        res.status(200).send(output);
      })
      .catch((err) => res.status(200).send(err.message));
  }

  getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (['CS', 'SWE'].includes(major)) {  //  TODO: Add case sensitivity
      readDatabase(DB)
        .then((result) => {
          const students = result[major];
          res.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch((err) => res.status(500).send('Cannot load the database'));
    } else res.status(500).send('Major parameter must be CS or SWE');
  }
}

export default StudentsController;
