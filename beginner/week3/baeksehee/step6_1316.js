//  그룹 단어 체커
//  틀린 코드

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step6_1316.txt")
  .toString()
  .trim()
  .split("\r\n");

let count = 0;

for (let i = 1; i < input.length; i++) {
  let arr = [];
  input[i]
    .trim()
    .split("")
    .map((e, j) => {
      if (!arr.includes(e) || e == input[i][j - 1]) arr.push(e);
    });
  if (input[i].length === arr.length) {
    count++;
  }
}

console.log(count);
