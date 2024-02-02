/*
문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 
바구니는 일렬로 놓여져 있고, 
가장 왼쪽 바구니를 1번째 바구니, 
그 다음 바구니를 2번째 바구니, ..., 
가장 오른쪽 바구니를 N번째 바구니라고 부른다. 

도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 
도현이는 한 번 순서를 역순으로 바꿀 때, 
순서를 역순으로 만들 범위를 정하고, 
그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, 
M번 바구니의 순서를 역순으로 만든 다음, 
바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.
*/

/*
문제 분석
기본: 바구니는 순서대로 배치되어있음 1~N번까지

입렵값 분석
첫째 줄
N = 바구니 수, 바구니 최대 번호
M = 역순으로 바꾸는 횟수

둘째 줄부터 M개의 줄
i 
j 
i 번째에서 j 번째 수를 역순으로 만듦
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_10811.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let arr = [];

//  초기 바구니 배열 생성
for (let a = 0; a < N; a++) {
  arr.push(a + 1);
}

for (let b = 1; b <= M; b++) {
  const [i, j] = input[b].split(" ").map(Number);

  const range = arr.slice(i - 1, j);
  const afterRange = range.reverse();

  //  arr = arr.splice(i - 1, j - i + 1, ...afterRange);
  //  위의 주석 코드랑 헷갈림
  arr.splice(i - 1, j - i + 1, ...afterRange);
}

console.log(arr.join(" "));
