// 별을 찍는 문제 2
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;
let result = "";
let blank = "";

for (let i = 1; i <= N; i++) {
    result += "*";
    for (let j = 1; j <= N - i; j++) {
        blank += " ";
    }
    console.log(blank + result);
    blank = "";
}

// 숏코딩
// for(i=1;i<=n;i++) console.log(' '.repeat(n-i)+'*'.repeat(i))