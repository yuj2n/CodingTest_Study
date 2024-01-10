// 1330 - 두 수 비교하기
// 두 수를 비교한 결과를 출력하는 문제

/*
문제
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

출력
첫째 줄에 다음 세 가지 중 하나를 출력한다.

A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step2_1330.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const A = input[0];
const B = input[1];

if (A > B) console.log(">");
if (A < B) console.log("<");
if (A == B) console.log("==");
