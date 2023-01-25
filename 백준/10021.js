let input = require('fs').readFileSync('예제.txt').toString().split('\n');
console.log(input);
let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let number = input[i].split(' ');
  console.log(number);
  // console.log(`Case #${i}: ${Number(number[0]) + Number(number[1])}`);
}
