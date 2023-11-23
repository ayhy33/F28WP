/* Create a text file named input.txt */
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!

/* Update main.js */
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});  

console.log("Program Ended");

/* Verify the output */
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
