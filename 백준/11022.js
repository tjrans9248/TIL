let input = require('fs').readFileSync('예제.txt').toString().split('\n');
// console.log(input);
let count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  let number = input[i].split(' ');

  let num1 = Number(number[0]);
  let num2 = Number(number[1]);

  console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
