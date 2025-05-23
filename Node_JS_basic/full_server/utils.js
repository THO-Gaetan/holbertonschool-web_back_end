import fs from 'fs';

/**
 * Reads database file asynchronously and processes student data
 * @param {string} filePath - Path to the database file
 * @returns {Promise<Object>} - Promise resolving to an object of arrays with students by field
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        try {
          const lines = data.trim().split('\n');

          const students = lines.slice(1).map((line) => line.split(','));

          const studentsByField = {};

          students.forEach((student) => {
            const firstName = student[0];
            const field = student[3];

            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }

            studentsByField[field].push(firstName);
          });

          resolve(studentsByField);
        } catch (error) {
          reject(Error('Cannot parse database content'));
        }
      }
    });
  });
}

export default readDatabase;
