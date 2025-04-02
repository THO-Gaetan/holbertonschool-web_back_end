# ES6 Data Manipulation

This project covers various aspects of data manipulation in ES6 JavaScript, focusing on arrays, typed arrays, Sets, and Maps.

## Learning Objectives

- How to use map, filter and reduce on arrays
- Typed arrays in JavaScript
- The Set, Map, and Weak link data structures

## Tasks

0. `getListStudents` - Returns an array of objects with student information
1. `getListStudentIds` - Extracts IDs from a list of student objects
2. `getStudentsByLocation` - Filters students by location
3. `getStudentIdsSum` - Calculates sum of student IDs using reduce
4. `updateStudentGradeByCity` - Updates student grades by city
5. `createInt8TypedArray` - Creates an Int8 typed array with specific parameters
6. `setFromArray` - Creates a Set from an array
7. `hasValuesFromArray` - Checks if values from array exist in Set
8. `cleanSet` - Returns formatted string of Set values starting with given string
9. `groceriesList` - Creates a Map of groceries with quantities
10. `updateUniqueItems` - Updates quantities in a Map based on conditions

## Setup

```bash
# Install Jest
npm install --save-dev jest

# Install Babel
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli

# Install ESLint
npm install --save-dev eslint
```

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running ```npm run full-test```
- All of your functions must be exported