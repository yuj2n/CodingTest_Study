/*
문제
문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.
QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.
*/

/*
입력값 분석
첫째 줄 
T = test case 개수

둘째 부터 밑에 줄
R = 해당 단어에 문자 하나하나 반복 횟수
S = 문자열 
*/

const fs = require("fs");
const input = fs
  .readFileSync("./txt/step5_2675.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);

//  원래 이렇게 코드가 복잡한가?
//  1.for문 테스트 케이스 수
for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");
  //    result를 어디서 초기화하냐가 중요했음
  let result = "";
  // 2.for문 S 문자열에 문자 수
  for (let j = 0; j < S.length; j++) {
    //3.for문 문자열에 한 문자가 반복해야 하는 수
    for (let k = 0; k < R; k++) {
      result += S[j];
    }
  }
  console.log(result);
}
