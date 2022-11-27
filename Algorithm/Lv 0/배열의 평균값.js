// 배열의 평균값

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 입출력 예 #1

// numbers의 원소들의 평균 값은 5.5입니다.
// 입출력 예 #2

// numbers의 원소들의 평균 값은 94.0입니다.

function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b);
  console.log(answer);

  return answer / numbers.length;
}

function solution(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count = count + numbers[i] / numbers.length;
  }
}
return count;
// 배열을 반복한다
// 배열의 인덱스를 다 더한다.
// 그 더한 값을 배열의 길이와 나눈다.
// 더한 값들을 다시 배열에 넣어준다.
