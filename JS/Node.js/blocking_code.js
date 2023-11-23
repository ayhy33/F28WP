/* Create a text file named input.txt */
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

/* Create a js file named main.js */
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

/* Run the main.js to see the result */
$ node main.js
