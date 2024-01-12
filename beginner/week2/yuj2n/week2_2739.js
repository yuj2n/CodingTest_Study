// 구구단을 출력하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
// map(Number)로 형변환을 먼저해주니 계속 런타임 에러가 났다. 왜일까?

const N = Number(input);

for (let i = 1; i < 10; i++) {
    console.log(N + " * " + i + " = " + N*i);
}