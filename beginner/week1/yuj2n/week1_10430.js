// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까? (A×B)%C는 ((A%C) × (B%C))%C 와 같을까? 
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let A = input[0];
let B = input[1];
let C = input[2];
console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);

// map(value => +value); & const [A, B, C] = input;의 방법도 존재