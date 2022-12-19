function solution(message) {
  var answer = 0;

  for (let i = 1; i <= message.length; i++) {
    answer = message.length * 2;
  }
  return answer;
}
