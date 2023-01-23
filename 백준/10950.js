// 예제 입력
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

// // 예제 출력
// 2
// 5
// 7
// 17
// 7

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(' ');
  console.log(Number(score[0]) + Number(score[1]));
}
