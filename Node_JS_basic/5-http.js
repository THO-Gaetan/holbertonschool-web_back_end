const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
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
        let result = '';

        // Add student count to result string
        result += `Number of students: ${studentCount}\n`;

        for (const student of students) {
          const field = student[3];
          if (!fieldCounts[field]) {
            fieldCounts[field] = [];
          }
          fieldCounts[field].push(student[0]);
        }

        for (const [field, names] of Object.entries(fieldCounts)) {
          result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        
        // Now resolve with the result string instead of just logging to console
        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const reqpath = req.url;

    if (reqpath === '/') {
        res.end('Hello Holberton School!');
    } else if (reqpath === '/students') {
        const databaseFilePath = process.argv[2] || 'database.csv';
        res.end('This is the list of our students\n');
        countStudents(databaseFilePath)
            .then((data) => {
            res.end(data)
            })
            .catch((error) => {
                res.statusCode = 404;
                res.end(error.message);
            });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
