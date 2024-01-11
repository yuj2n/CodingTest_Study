// 점이 어느 사분면에 있는지 알아내는 문제
const fs = require('fs');
// /dev/stdin 인식 문제로 0로 바꿔주어야 함.
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let x = input[0];
let y = input[1];

if (x > 0 && y > 0) {
    console.log("1");
} else if (x < 0 && y > 0) {
    console.log("2");
} else if (x < 0 && y < 0) {
    console.log("3");
} else if (x > 0 && y < 0) {
    console.log("4");
}