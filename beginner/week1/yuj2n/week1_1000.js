// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
// map(Number)로 인해 Number(input[0]) 변환보다 간단!
console.log(input[0] + input[1]);
