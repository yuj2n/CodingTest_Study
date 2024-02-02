/*
문제
알파벳 소문자로만 이루어진 단어가 주어진다. 
이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.

팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다. 

level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.
*/

const fs = require("fs");
const input = fs.readFileSync("./txt/step6_10988.txt").toString().trim();
let result = 0;

//  문자열 대칭 가운데 기준점이 없을 때
if (input.length % 2 == 0) {
  const front = input.slice(0, input.length / 2);
  const back = input
    .slice(input.length / 2, input.length)
    .split("")
    .reverse()
    .join("");

  if (front == back) {
    result = 1;
  } else {
    result = 0;
  }
}

//  문자열 대칭 가운데 기준점이 있을 때
if (input.length % 2 == 1) {
  const front = input.slice(0, parseInt(input.length / 2));
  const back = input
    .slice(parseInt(input.length / 2) + 1, input.length)
    .split("")
    .reverse()
    .join("");

  if (front == back) {
    result = 1;
  } else {
    result = 0;
  }
}

console.log(result);
