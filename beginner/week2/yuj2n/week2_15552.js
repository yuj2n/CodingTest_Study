// 빠르게 입력받고 출력하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
// 상수가 아닌 재선언할 값을 const로 선언하면 런타임 에러!
let result = "";

for (let i = 1; i <= T; i++) {
    let arr = input[i].split(" ");

    result += Number(arr[0]) + Number(arr[1]) + "\n";
}

console.log(result);