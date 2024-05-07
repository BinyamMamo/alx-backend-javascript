/**
 * Provides a simple Express.js server with two routes:
 * - The root route ('/') responds with 'Hello Holberton School!'
 * - The '/students' route reads a CSV file and responds with
 *   a count of students by field of study.
 *
 * @module 7-http_express.js
 * @exports app - The HTTP server instance.
 */
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

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
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err || !data) reject(new Error('Cannot load the database'));

      if (data) {
        const lines = data
          .split('\n')
          .filter((line) => line.trim() !== '')
          .slice(1);
        const students = lines.map((line) => line.split(','));
        const csStudents = students.filter((student) => student[3] === 'CS');
        const sweStudents = students.filter((student) => student[3] === 'SWE');

        const result = `Number of students: ${students.length}\n`
          + `Number of students in CS: ${csStudents.length}. List: ${csStudents
            .map((s) => s[0])
            .join(', ')}\n`
          + `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
            .map((s) => s[0])
            .join(', ')}\n`;

        resolve(result);
      }
    });
  });
}

app.get('/', (req, res) => res.status(200).send('Hello Holberton School!'));

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((result) => res.status(200).send(`This is the list of our students\n${result}`))
    .catch((err) => res.status(200).send(`This is the list of our students\n${err.message}`));
});

app.listen(PORT);
module.exports = app;
