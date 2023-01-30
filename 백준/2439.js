let input = require('fs').readFileSync('예제.txt').toString();
let num = Number(input);

for (let i = 0; i < num; i++) {
  console.log(' '.repeat(i) + '*'.repeat(5 - i));
}
