const fs = require('fs');
/**
 * countStudents - Reads a CSV file and counts the number of students in each field.
 * @param {string} path - The path to the CSV file.
 * @returns {void}
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
