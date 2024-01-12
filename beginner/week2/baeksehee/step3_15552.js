// 나의 코드가 아닌 두 가지 해결 코드

/*
marco2520332 
Node.js의 경우 매 번 console.log로 출력하면 시간초과를 받고, 하나의 문자열에 결과값과 개행문자를 저장해서 마지막에 출력했을 때 1496ms 받아서 통과했습니다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = '';
rl.on('line', line => {
  const input = line.split(' ');
    
  if(input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A+B + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
})
*/

const fs = require("fs");
const input = fs.readFileSync("./txt/step3_15552.txt").toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  tmp = input[i].split(" ");
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
}

console.log(answer);
