/* Synchronous vs Asynchrnous */
// Create a text file named input.txt
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

// Create a js file named main.js
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

// Run the main.js
$ node main.js

// Verify the output
Synchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

Program Ended
Asynchronous read: Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

/* Open a File */
// Create main.js to open file input.txt for reading and writing
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});

// Run main.js
$ node main.js

// Verify the output
Going to open file!
File opened successfully!
