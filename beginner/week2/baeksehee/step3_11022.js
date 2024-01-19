const fs = require("fs");
const input = fs
  .readFileSync("./txt/step3_11022.txt")
  .toString()
  .trim()
  .split("\n");

const num = parseInt(input[0]);

for (let i = 1; i < num + 1; i++) {
  const testCase = input[i].split(" ").map(Number);
  const A = testCase[0];
  const B = testCase[1];

  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}
