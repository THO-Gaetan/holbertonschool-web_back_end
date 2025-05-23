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
        let result = [];  // Use an array to collect lines

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

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const reqpath = req.url;

    if (reqpath === '/') {
        res.end('Hello Holberton School!');
    } else if (reqpath === '/students') {
        const databaseFilePath = process.argv[2] || 'database.csv';
        res.write('This is the list of our students\n');
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
