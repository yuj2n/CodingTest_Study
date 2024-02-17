// 조건에 맞는 문자열을 찾는 문제
const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const caseCount = Number(input[0]);
let countWord = 0;

for (let i = 1; i <= caseCount; i++) {
    const word = input[i];
    const letter = [];
    let isGroupWord = true;
    
    for (let j = 0; j < word.length; j++) {
        // indexOf(String): String의 index리턴(원하는 값 X -> -1)
        // 첫 등장시 배열에 넣기 
        if (letter.indexOf(word[j]) === -1) {
            letter.push(word[j]);
        } else { // 배열에 존재시
            // 해당 인덱스 마지막 요소 아닌 경우 제외
            if (letter.indexOf(word[j]) !== letter.length-1) {
                isGroupWord = false;
                break;
            }
        }
    }
    
    if (isGroupWord) {
        countWord += 1;
    }
}

console.log(countWord);