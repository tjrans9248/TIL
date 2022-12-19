function solution(array) {
  const max = [Math.max(...array), array.indexOf(Math.max(...array))];

  return max;
}
