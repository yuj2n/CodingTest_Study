// A+B를 여러 번 출력하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];

// 2번째 줄부터 계산해야하므로 let i = 1;
for (let i = 1; i <= n; i++) {
    // arr에 공백 기준 나눈 값 저장 
    let arr = input[i].split(" ");

    // 이후 arr[n]을 통해 배열에 접근
    console.log(Number(arr[0]) + Number(arr[1]));
}