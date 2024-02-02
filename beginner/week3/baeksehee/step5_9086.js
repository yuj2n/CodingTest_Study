/*
문제
문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.
*/
//  여기서 node를 실행해 보면 출력값이 정답이 아님 이유는 모름

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step5_9086.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  // 문자열 속 숫자가 아니면 true
  if (isNaN(input[i]) == true) {
    const first = input[i].charAt(0);
    const last = input[i].charAt(input[i].length - 1);
    console.log(`${first}${last}`);
  }
}
