var fs = require("fs");
var input = fs.readFileSync("week1_11382.txt").toString().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

var result = a + b + c;

console.log(result);
