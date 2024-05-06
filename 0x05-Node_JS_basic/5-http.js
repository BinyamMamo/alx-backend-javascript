/**
 * Counts the number of students in a CSV file and categorizes them by field
 * of study.
 *
 * @param {string} filePath - The path to the CSV file containing student data.
 * @param {http.ServerResponse} response - The HTTP response object to write
 *                                         the student counts to.
 * @returns {Promise<http.ServerResponse>} - A Promise that resolves with the
 *                                           modified response object.
 */
function countStudents(filePath, response) {
  // Function implementation
}

const http = require('http');
const fs = require('fs');
const PORT = 1245;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err || data == '') reject(new Error('Cannot load the database'));

      if (data) {
        const lines = data
          .split('\n')
          .filter((line) => line.trim() !== '')
          .slice(1);
        const students = lines.map((line) => line.split(','));
        const csStudents = students.filter((student) => student[3] === 'CS');
        const sweStudents = students.filter((student) => student[3] === 'SWE');

        const result = `Number of students: ${students.length}\n` +
          `Number of students in CS: ${csStudents.length}. List: ${csStudents
            .map((s) => s[0])
            .join(', ')}\n` +
          `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
            .map((s) => s[0])
            .join(', ')}\n`;

        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.write('This is the list of our students\n');
        res.write(result);
        res.end();
      })
      .catch((err) => {
        res.write(err.message);
        res.end();
      });
  }
});

app.listen(PORT);

module.exports = app;
