/*
문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
*/

// 규칙은 뭐 ~ 주어진 숫자가 N이라고 할 때

//  N*2-1이 N줄에 별의 수임 (단, N 번째 줄까지)
//  N*2-1이 N 숫자 입력값이라면 총 줄의 수이기도 함

//  한 줄에 별의 배치
//  1 ~ N줄: N이 1부터 시작해서 각 줄의 별의 수는 N*2-1
//  N ~ N*2-1: N부터 시작해서 1로 각 줄의 별의 수는 N*2-1
//  공백은 N-(줄의 번호 ex)1,2,3,) (단, N 번째 줄까지)
const fs = require("fs");
const input = fs.readFileSync("./txt/step6_2444.txt").toString();
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let stars = "";

  for (let j = 0; j < N - i; j++) {
    stars += " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    stars += "*";
  }

  console.log(stars);
}

for (let i = N - 1; i > 0; i--) {
  let stars = "";

  for (let j = N - i; j > 0; j--) {
    stars += " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    stars += "*";
  }

  console.log(stars);
}
