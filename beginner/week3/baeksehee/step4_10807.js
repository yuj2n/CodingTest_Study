// 문제
// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_10807.txt")
  .toString()
  .trim()
  .split("\n");

const number = parseInt(input[0]);
const numbers = input[1].split(" ");
const searchNumber = parseInt(input[2]);
let count = 0;

//  numbers 배열 안에 원소 하나 값을 searchNumber와 각각 비교
for (let i = 0; i < number; i++) {
  if (numbers[i] == searchNumber) {
    count++;
  }
}

console.log(count);
