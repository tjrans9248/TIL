function solution(my_string) {
  var answer = [];

  let result = my_string
    .match(/[0-9]/g)
    .map(str => parseInt(str))
    .sort((a, b) => a - b);
  console.log(result);

  function solution(my_string) {
    return my_string
      .replace(/[^0-9]/g, '')
      .split('')
      .sort((a, b) => a - b)
      .map(Number);
  }

  return result;
}
