function solution(my_string) {
  let stringArr = my_string.split('');
  let arr = Array.from(new Set(stringArr));

  return arr.join('');
}
