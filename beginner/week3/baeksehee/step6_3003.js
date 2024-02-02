/*
문제
동혁이는 오래된 창고를 뒤지다가 낡은 체스판과 피스를 발견했다.

체스판의 먼지를 털어내고 걸레로 닦으니 그럭저럭 쓸만한 체스판이 되었다. 
하지만, 검정색 피스는 모두 있었으나, 흰색 피스는 개수가 올바르지 않았다.

체스는 총 16개의 피스를 사용하며,
킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.

동혁이가 발견한 흰색 피스의 개수가 주어졌을 때,
몇 개를 더하거나 빼야 올바른 세트가 되는지 구하는 프로그램을 작성하시오.
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step6_3003.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [King, Queen, Rock, Bishop, Knight, Pawn] = [...input];
const result = [];

if (King !== 1) {
  const a = 1 - King;
  result.push(a);
} else {
  result.push(0);
}

if (Queen !== 1) {
  const a = 1 - Queen;
  result.push(a);
} else {
  result.push(0);
}

if (Rock !== 2) {
  const a = 2 - Rock;
  result.push(a);
} else {
  result.push(0);
}

if (Bishop !== 2) {
  const a = 2 - Bishop;
  result.push(a);
} else {
  result.push(0);
}

if (Knight !== 2) {
  const a = 2 - Knight;
  result.push(a);
} else {
  result.push(0);
}

if (Pawn !== 8) {
  const a = 8 - Pawn;
  result.push(a);
} else {
  result.push(0);
}

console.log(result.join(" "));
