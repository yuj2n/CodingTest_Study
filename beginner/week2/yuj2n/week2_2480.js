// 조건에 따라 상금을 계산하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [A, B, C] = input;

let prize = 0;

if (A == B && B == C && C == A) {
    prize = 10000 + A * 1000;
} else if (A == B && B!= C) {
    prize = 1000 + A * 100;
} else if (B == C && A != C) {
    prize = 1000 + B * 100;
} else if (C == A && B != A) {
    prize = 1000 + C * 100;
} else if (A != B && B != C && C != A) {
    // max 변수로 계산 시 틀림 why? 
    let counter = Math.max(A, B, C);
    prize = counter * 100;
}

console.log(prize);