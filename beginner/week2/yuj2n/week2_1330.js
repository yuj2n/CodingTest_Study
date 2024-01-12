// 두 수를 비교한 결과를 출력하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let A = input[0];
let B = input[1];

if (A > B) {
    console.log(">");
} else if (A < B) {
    console.log("<");
} else if (A == B) {
    console.log("==");
}
// 순간적으로 같은 경우 "=="이 아닌 "="이라고 생각했음..