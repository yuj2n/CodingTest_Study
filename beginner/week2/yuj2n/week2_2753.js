// 윤년을 판별하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let year = parseInt(input);

// 4의 배수이면서 100의 배수가 아닌 경우 또는 400의 배수인 경우
if (year%4 == 0 && year%100 != 0 || year%400 == 0) {
    console.log("1");
} else {
    console.log("0");
}