// n 이 주어졌을 때, 1 부터 n까지 합을 구하라

// 예제 입력
// 3

// 예체 출력
// 6

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

let result = 0;

for (let i = 1; i <= num; i++) {
  result += i;
}
console.log(result);
