/*
문제
알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.
*/

const fs = require("fs");
//  trim() 안 해서 틀렸습니다 떴었음!
const input = fs.readFileSync("./txt/step5_2743.txt").toString().trim();
const wordsLength = input.length;

console.log(`${wordsLength}`);
