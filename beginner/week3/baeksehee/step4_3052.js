/*
문제
두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 
예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 

수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 
그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_3052.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = [];
const thePriceofDividng = 42;

for (let i = 0; i < input.length; i++) {
  const remainingValues = input[i] % thePriceofDividng;
  result.push(remainingValues);
}

//  Set 사용 중복 제거
//  다른 방법도 있음
//  !!주의!! 중복 제거 코드의 위치에 따라 빈배열일 수 있음
//  예를 들어 result에 push 하기 전 위치에 있다면 빈배열을 반환할 거임
let unduplicatedResult = [...new Set(result)];
let count = 0;

//  중복을 제거한 나머지 수를 위한 코드
for (let i = 0; i < unduplicatedResult.length; i++) {
  count++;
}

// 예제 입력 2
// 모든 나머지가 0인 경우
// 출력값 1을 위한 코드
if ((unduplicatedResult.length = 0)) {
  count = 1;
}

console.log(count);
