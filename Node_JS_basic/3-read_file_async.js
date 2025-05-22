const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).map((line) => line.split(','));
        const studentCount = students.length;
        const fieldCounts = {};

        for (const student of students) {
          const field = student[3];
          if (!fieldCounts[field]) {
            fieldCounts[field] = [];
          }
          fieldCounts[field].push(student[0]);
        }

        console.log(`Number of students: ${studentCount}`);
        for (const [field, names] of Object.entries(fieldCounts)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
