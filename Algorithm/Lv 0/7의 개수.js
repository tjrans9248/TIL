// 문제 설명
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// 입출력 예

// array	result
// [7, 77, 17]	4
// [10, 29]	0

function solution(array) {
  let result = 0;
  let split = array.join('').split('');
  // 기존의 array 에는 하나하나 따로 나뉘에 있는 문자열이 아니었기에,
  // 문자열로 나누기 위해, join() 과 split('')을 활용하여 구현
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '7') {
      result++;
    }
  }
  return result;
}
