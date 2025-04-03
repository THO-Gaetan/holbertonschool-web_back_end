# ES6 Promises

This directory contains JavaScript files that demonstrate the use of **ES6 Promises** for handling asynchronous operations. Each file focuses on a specific concept or use case of Promises, including error handling, chaining, and combining multiple Promises.


## Learning Objectives

- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Tasks

0. `getResponseFromAPI` - Returns a Promise to represent an API call, demonstrating the basic structure of a Promise.

1. `getFullResponseFromAPI` - Returns a Promise that resolves with a response object or rejects with an error message based on a success parameter.

2. `handleResponseFromAPI` - Handles Promise resolution and rejection with appropriate data structures and console logs.

3. `handleProfileSignup` - Uses Promise.all to handle multiple asynchronous operations for user profile creation and outputs a success message.

4. `signUpUser` - Creates a Promise that resolves with user information including firstName and lastName.

5. `uploadPhoto` - Creates a Promise that rejects with an error containing information about a failed photo upload.

6. `handleProfileSignup` - Combines signUpUser and uploadPhoto functions using Promise.allSettled to track all promise results.

7. `loadBalancer` - Uses Promise.race to return the value of the Promise that resolves first between two download sources.

8. `divideFunction` - Implements division in a function that handles divide-by-zero errors using try/catch.

9. `guardrail` - Creates a function that processes another function safely, returning both the function's result and a processing confirmation.


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
- All of your functions must be exported