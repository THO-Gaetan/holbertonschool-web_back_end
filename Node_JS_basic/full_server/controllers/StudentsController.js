import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const databasePath = process.argv[2] || './database.csv';
    
    readDatabase(databasePath)
      .then((studentsByField) => {
        const responseLines = ['This is the list of our students'];
        
        const sortedFields = Object.keys(studentsByField).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );
        
        sortedFields.forEach((field) => {
          const students = studentsByField[field];
          responseLines.push(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
          );
        });
        
        response.status(200).send(responseLines.join('\n'));
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2] || './database.csv';
    
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    
    readDatabase(databasePath)
      .then((studentsByField) => {
        if (!studentsByField[major]) {
          return response.status(200).send(`List: `);
        }
        
        const students = studentsByField[major];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;