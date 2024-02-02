/*
문제
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
*/

/*
입력값 분석
첫째 줄
N = 숫자의 개수

둘째 줄 
N개의 값이 있음 

출력값 둘째 줄에 있는 N개의 수를 모두 더해야 함
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step5_11720.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const eachNums = input[1].split("").map(Number);
let result = 0;

//  eachNums를 사용해서 조건식을 만들 수 있지만 입력값을 사용하기 위해 num
for (let i = 0; i < num; i++) {
  result += eachNums[i];
}

console.log(result);
