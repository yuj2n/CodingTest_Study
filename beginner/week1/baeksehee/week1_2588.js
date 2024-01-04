// 세 자리 * 세 자리
// 출력 1. 세 자리 * 1의 자리 수
// 출력 2. 세 자리 * 10의 자리의 수
// 출력 3. 세 자리 * 100의 자리의 수
var fs = require("fs");
var input = fs.readFileSync("week1_2588.txt").toString().split("\n");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

var place = b.toString().split("");

var one = parseInt(place[2]);
var two = parseInt(place[1]);
var three = parseInt(place[0]);

console.log(a * one);
console.log(a * two);
console.log(a * three);
console.log(a * b);
