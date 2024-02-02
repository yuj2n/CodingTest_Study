/*
문제
상근이의 할머니는 아래 그림과 같이 오래된 다이얼 전화기를 사용한다.
전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 
숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.
숫자 1을 걸려면 총 2초가 필요하다. 1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다
할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오.
*/

// 배열에 특정 문자가 있을 때
// 그 인덱스 (= 필요한 초)를 result에 더하는 해결법
//  indexOf, search를 이용해 인덱스 번호를 추출하는 것으로 하려다가 실패  -> chatGpt에 물어보니
//  includes를 사용했을 때 그 해당 인덱스를 저장한 변수를 활용하는 식을 알려줌

// 알파벳 객체로 해도 될 듯

const fs = require("fs");
const input = fs.readFileSync("./txt/step5_5622.txt").toString().trim();

const number = [
  "empty",
  "empty",
  "1",
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
  "0",
];
let result = 0;

for (let i = 0; i < input.length; i++) {
  let index = -1;
  for (let j = 0; j < number.length; j++) {
    if (number[j].includes(input[i])) {
      index = j;
      break;
    }
  }

  if (index !== -1) {
    result += index;
  }
}

console.log(result);
