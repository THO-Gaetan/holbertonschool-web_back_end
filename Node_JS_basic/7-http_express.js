const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).map((line) => line.split(','));
        const studentCount = students.length;
        const fieldCounts = {};
        const result = []; // Use an array to collect lines

        // Add student count as first line
        result.push(`Number of students: ${studentCount}`);

        for (const student of students) {
          const field = student[3];
          if (!fieldCounts[field]) {
            fieldCounts[field] = [];
          }
          fieldCounts[field].push(student[0]);
        }

        for (const [field, names] of Object.entries(fieldCounts)) {
          result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        // Join with newlines but don't add an extra one at the end
        resolve(result.join('\n'));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const databaseFilePath = process.argv[2] || 'database.csv';
  try {
    const data = await countStudents(databaseFilePath);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
