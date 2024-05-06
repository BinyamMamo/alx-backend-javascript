// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const students = lines.map((line) => line.split(','));
    const csStudents = students.filter((student) => student[3] === 'CS');
    const sweStudents = students.filter((student) => student[3] === 'SWE');

    console.log(`Number of students: ${students.length - 1}`);
    console.log(
      `Number of students in CS: ${csStudents.length}. List: ${csStudents
        .map((s) => s[0])
        .join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents
        .map((s) => s[0])
        .join(', ')}`,
    );
  } catch (error) {
    throw Error('Error: Cannot load the database');
  }
}

module.exports = countStudents;
