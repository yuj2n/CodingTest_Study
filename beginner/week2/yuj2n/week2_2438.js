// 별을 찍는 문제 1
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 입력값 한개인 경우 input[0]로 적지 않기!
const N = +input;
let result = "";

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

// 풀이 2
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim();

// const N = +input;
// let result = "";

// for (let i = 1; i <= N; i++) {
//     result = "*".repeat(i);
//     console.log(result);
// }