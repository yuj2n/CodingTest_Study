// 입력이 끝날 때까지 A+B를 출력하는 문제. EOF에 대해 알아 보세요.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input.length로 테스트 케이스없이 입력 끝까지 받음 
for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");

    console.log(Number(arr[0]) + Number(arr[1]));
}