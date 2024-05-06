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

function countStudents(filePath, response) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      if (data) {
        const lines = data
          .split('\n')
          .filter((line) => line.trim() !== '')
          .slice(1);
        const students = lines.map((line) => line.split(','));
        const csStudents = students.filter((student) => student[3] === 'CS');
        const sweStudents = students.filter((student) => student[3] === 'SWE');

        response.write(`Number of students: ${students.length}\n`);
        response.write(
          `Number of students in CS: ${csStudents.length}. List: ${csStudents
            .map((s) => s[0])
            .join(', ')}\n`
        );
        response.write(
          `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
            .map((s) => s[0])
            .join(', ')}\n`
        );
        resolve(response);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url == '/') {
    res.write('Hello Holberton School!');
  } else if (req.url == '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2], res)
      .then((r) => r.end())
      .catch((err) => res.end(err.message));
  }
});

app.listen(PORT);
