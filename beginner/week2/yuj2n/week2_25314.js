// 코딩 공부를 잘 하여 이렇게 long long long long...을 칠판에 적는 일이 없도록 합시다.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

// +를 통한 Number형 변환 가능
const N = Number(input)/4;
let result = "";

for (let i = 1; i <= N; i++) {
    result += "long ";
}

console.log(result + "int");
// 4 -> 1
// 20 -> 5
