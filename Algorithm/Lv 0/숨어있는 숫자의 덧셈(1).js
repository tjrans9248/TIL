function solution(my_string) {
  var answer = 0;

  let result = my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .map(x => Number(x))
    .reduce((a, b) => a + b);
  console.log(result);

  return result;
}

// 2
// 3
// 4
// function solution(my_string) {
//     return my_string.replace(/[^0-9]/g, '').split('').sort((a, b) => a - b).map(Number);
// }
