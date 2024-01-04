// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let A = parseInt(input[0]);
let B = input[1];
// parseInt() 처리 안해도 자동 형변환!! 그렇지만 차후를 대비해 정확하게.
let a = A*parseInt(B[2]);
let b = A*parseInt(B[1]);
let c = A*parseInt(B[0]);
console.log(a);
console.log(b);
console.log(c);
console.log(a + b*10 + c*100);