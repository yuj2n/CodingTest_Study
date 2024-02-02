/*
문제
알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
단, 대문자와 소문자를 구분하지 않는다.
*/

/*
출력

첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 
단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
*/

// 거의 내 힘으로 풀었지만

// for (let i = 0; i < input.length; i++) {
//     if (alphabet.hasOwnProperty("alphabet") == false) {
//       alphabet.input[i] = 0;
//     } else {
//       alphabet.input[i] += 1;
//     }
//   }

//  이 부분이 막혀서 chatGpt에게 물어봄

//  객체 다루는 것을 잘 몰라서 해결하기 어려움

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step6_1157.txt")
  .toString()
  .trim()
  .toUpperCase();

const alphabet = {};

for (let i = 0; i < input.length; i++) {
  const currentChar = input[i];
  if (!alphabet.hasOwnProperty(currentChar)) {
    alphabet[currentChar] = 0;
  }
  alphabet[currentChar] += 1;
}

//  tistory
//  Po_tta_tt0 님의 글
const frequency = Object.values(alphabet);
const max = Math.max(...frequency);
const selected = Object.keys(alphabet).filter((key) => {
  return alphabet[key] === max;
});
//  여기까지

if (selected.length > 1) {
  console.log("?");
} else console.log(selected.toString());
