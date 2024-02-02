/*
문제
알파벳 소문자로만 이루어진 단어 S가 주어진다. 
각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
*/

//  배열로 알파벳 넣고 하는 방법만 있낭
const fs = require("fs");
const words = fs.readFileSync("./txt/step5_10809.txt").toString().trim();

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let result = [];

for (let i = 0; i < alphabet.length; i++) {
  //    indexOf: 해당 문자가 없으면 -1을 반환
  const index = words.indexOf(alphabet[i]);
  result.push(index);
}

console.log(result.join(" "));
