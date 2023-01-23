// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();
const N = +input;

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
