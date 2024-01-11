// 시험 점수를 성적으로 바꾸는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let score = parseInt(input);

// 89 < score <= 100으로 적게 되면 OR 연산자로 묶임
// 하나만 만족해도 가능한 것으로 판단해 오류 발생 -> && 사용
if (89 < score && score <= 100) {
    console.log("A");
} else if (79 < score && score < 90) {
    console.log("B");
} else if (69 < score && score < 80) {
    console.log("C");
} else if (59 < score && score < 70) {
    console.log("D");
} else {
    console.log("F");
}