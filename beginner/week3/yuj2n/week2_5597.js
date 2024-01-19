// 과제 제출 기한이 지났습니다.
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

let arr = new Array(30).fill(0);

for (let i = 0; i < 28; i++) {
    arr[input[i]] = 1;
}

for (let i = 0; i < 28; i++) {
    if (arr[i] == 0) {
        console.log((i+1) + "\n");
    }
}

