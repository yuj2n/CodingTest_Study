//  문제
//  정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

//  step4_10871.txt 파일 분석
//  N = 정수의 수, (수열 A를 이루는 정수 N개)배열의 길이
//  X = (수열 A)배열에서 걸러야 하는 조건의 수

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_10871.txt")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = "";

for (let i = 0; i < N; i++) {
  if (arr[i] < X) {
    result += `${arr[i]} `;
  }
}

console.log(result);
