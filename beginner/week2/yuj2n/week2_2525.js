// 범위가 더 넓은 시간 계산 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// map(Number)로 각 줄의 값을 Number로 받게 되면 첫째 줄의 ex)14 30 한 줄이 Number형이 됨
// 따라서 따로 각각 Number형으로 변환해주어야 함.

let H = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);
let time = Number(input[1]);

if (time + M >= 60) {
    real_H = H + parseInt(((time + M)/60))
    if (real_H > 23) {
        H = real_H - 24;
    }
    else {
        H = real_H;
    }
    M = ((time + M) % 60);
} else if (time + M < 60) {
    M = time + M;
}

console.log(H + " " + M);

// 60보다 크면 더하고 빼줘야함
// time + M 값이 60의 배수이면 M = 0 

// 50 -> M=50
// 67 -> H+1 M=7
// 120 -> H+2 M=0
// 188 -> H+3 M=8

// H를 M으로 변환해서 구하는 방법도 존재