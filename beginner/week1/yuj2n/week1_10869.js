// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
var a = input[0] + input[1];
var b = input[0] - input[1];
var c = input[0] * input[1];
// javascript에는 몫을 구하는 연산자 X -> 소수점 처리 위해 parseInt() 사용
var d = parseInt(input[0] / input[1]);
var e = input[0] % input[1];
console.log(a + "\n" + b + "\n" + c + "\n" + d + "\n" + e);