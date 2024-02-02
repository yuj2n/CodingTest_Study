//  너의 평점은

//  틀린 코드
// const fs = require("fs");
// const input = fs
//   .readFileSync("./txt/step6_25206.txt")
//   .toString()
//   .trim()
//   .split("\r\n");

// let graph = ["F", "세희", "D0", "D+", "C0", "C+", "B0", "B+", "A0", "A+"];
// let totalH = 0;
// input.map((e) => {
//   if (e.split(" ")[2] != "P") {
//     totalH += Number(e.split(" ")[1]);
//   }
// });
// let score = 0;
// input.map((e) => {
//   if (e.split(" ")[2] != "P") {
//     score += Number(e.split(" ")[1] * (graph.indexOf(e.split(" ")[2]) / 2));
//   }
// });

// console.log((score / totalH).toFixed(4));

//  정답 코드 참고
//  velog-백준/node.js 참고
const fs = require("fs");
const input = fs
  .readFileSync("./txt/step6_25206.txt")
  .toString()
  .trim()
  .split("\r\n") // 백준에서는 \n만 해줘야 함
  .map((e) => e.split(" "));

let graph = {
  F: 0,
  D0: 1,
  "D+": 1.5,
  C0: 2,
  "C+": 2.5,
  B0: 3,
  "B+": 3.5,
  A0: 4.0,
  "A+": 4.5,
};
let totalH = 0;
let score = 0;

for (let [a, b, c] of input) {
  if (c === "P") continue;
  totalH += b * 1;
  score += graph[c] * b;
}

console.log((score / totalH).toFixed(4));
