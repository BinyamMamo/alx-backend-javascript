import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err || !data) reject(new Error('Cannot load the database'));

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '')
        .slice(1);
      const students = lines.map((line) => line.split(','));
      const csStudents = students
        .filter((student) => student[3] === 'CS')
        .map((student) => student[0]);
      const sweStudents = students
        .filter((student) => student[3] === 'SWE')
        .map((student) => student[0]);

      const result = {
        CS: csStudents,
        SWE: sweStudents,
      };

      resolve(result);
    });
  });
}

// readDatabase('database.csv')
//   .then((r) => console.log(r))
//   .catch((err) => console.error(err));

export default readDatabase;
