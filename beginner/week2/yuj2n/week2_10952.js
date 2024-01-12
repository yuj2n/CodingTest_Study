// 0 0이 들어올 때까지 A+B를 출력하는 문제
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력개수가 주어지지 않은 상태에서 조건 전까지 입력받을 시 input.length -1을 끝값으로 둠
for (let i = 0; i < input.length - 1; i++) {
    let arr = input[i].split(" ");
    if (Number(arr[0]) == 0 && Number(arr[1]) == 0) {
        break;
    } else {
        console.log(Number(arr[0]) + Number(arr[1]));
    }
}
