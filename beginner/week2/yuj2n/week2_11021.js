// A+B를 조금 더 아름답게 출력하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];

// 항상 초기값과 끝값 생각!
for (let i = 1; i <= T; i++) {
    let arr = input[i].split(" ");

    console.log("Case #" + i + ": " + (Number(arr[0]) + Number(arr[1])));
}
