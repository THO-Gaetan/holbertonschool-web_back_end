const fs = require('fs');
/**
 * countStudents - Reads a CSV file and counts the number of students in each field.
 * @param {string} path - The path to the CSV file.
 * @returns {void}
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1);
    const students = {};
    let totalStudents = 0;

    for (const line of lines) {
      const [firstName, field] = line.trim().split(',');
      if (field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents++;
      }
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
