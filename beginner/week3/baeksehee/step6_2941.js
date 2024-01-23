/*
예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

č	c=
ć	c-
dž	dz=
đ	d-
lj	lj
nj	nj
š	s=
ž	z=

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 
단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다.
lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.
*/

const fs = require("fs");
let input = fs.readFileSync("./txt/step6_2941.txt").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let croatiaCount = 0;

for (let i = 0; i < croatia.length; i++) {
  while (input.includes(`${croatia[i]}`)) {
    input = input.replace(`${croatia[i]}`, ".");
    croatiaCount += 1;
  }
}

// 입력 예제 c=c= 같은 것이 있을 때!
//  c= 한 번 발견시 끝나 버림
//  남은 c= 은 두 개의 문자로 취급되어 최종 3을 반환함
//  while 문을 사용하면 c=가 여전히 남아있는지 확인하기 쉽고 반복하기 쉽다
// for (let i = 0; i < croatia.length; i++) {
//   if (input.includes(`${croatia[i]}`) == true) {
//     input = input.replace(`${croatia[i]}`, ".");
//     croatiaCount += 1;
//   }
// }

for (let i = 0; i < input.length; i++) {
  if (input[i] != ".") {
    croatiaCount++;
  }
}

console.log(croatiaCount);
