// 시간 계산 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
 
let H = input[0];
let M = input[1];

// M이 45분보다 적은 경우에서 H가 0인 경우를 나눠주어야 함.
if (M < 45) {
    if (H == 0) {
        H = (24 + (H - 1));
    } else {
        H--;
    }
    M = (60 + (M - 45));
} else {
    M = M - 45;
}

console.log(H + " " + M);