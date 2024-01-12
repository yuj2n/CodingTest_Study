// 💸
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 한 줄에 받은 값을 공백기준 분리하기 때문에 map(Number)보다는 각 Number형변환이 나음

const pay = Number(input[0]);
// Number형 변환 필수(반복문)
const N = Number(input[1]);
let cal = 0;

for (let i = 2; i < N+2; i++) {
    let arr = input[i].split(" ");

    // Number형으로 변환하지 않아도 답은 나오지만 꼭 처리!!
    cal += Number(arr[0])*Number(arr[1]);
}

if (pay == cal) {
    console.log("Yes");
} else {
    console.log("No");
}
