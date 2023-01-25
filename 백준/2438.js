let input = require('fs').readFileSync('예제.txt').toString();

let star = '';
console.log(input);

for (let i = 0; i < input; i++) {
  star += '*';
  console.log(star);
}
