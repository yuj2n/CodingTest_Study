/*
문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
도현이는 앞으로 M번 공을 바꾸려고 한다. 
도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.
*/

/*
입력값 분석
첫째 줄 
N = 바구니 갯수, 각각 번호 1~N
M = 공 바꾸려는 횟수

둘째 줄
i, j = 공 교환 바구니
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step4_10813.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [];

for (let a = 0; a < N; a++) {
  arr[a] = a + 1;
}

for (let b = 1; b <= M; b++) {
  const [i, j] = input[b].split(" ").map(Number);
  //  i, j 바꾸기 전 값 저장
  //  그렇게 하지 않으면 변경된 값이 반영됨
  const one = arr[i - 1];
  const two = arr[j - 1];

  arr[i - 1] = two;
  arr[j - 1] = one;
}

console.log(arr.join(" "));
