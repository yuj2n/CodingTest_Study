//  문제
//  N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_10818.txt")
  .toString()
  .trim()
  .split("\n");

const num = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

let min = parseInt(arr[0]);
let max = parseInt(arr[0]);

for (let i = 0; i < num; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(`${min} ${max}`);
