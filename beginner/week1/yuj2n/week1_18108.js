// 불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
let year = parseInt(input);
console.log(year - 543);