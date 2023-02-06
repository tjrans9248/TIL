// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 입출력 예
// array	n	result
// [1, 1, 2, 3, 4, 5]	1	2
// [0, 2, 3, 4]	1	0

// 입출력 예 설명
// 입출력 예 #1

// [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.
// 입출력 예 #2

// [0, 2, 3, 4] 에는 1이 0개 있습니다.

function solution(array, n) {
  let answer = 0;

  let result = array.filter(x => (x === n ? answer++ : ''));
  return answer;
}

// array 안에 n 이 있으면 answer의 숫자를 하나씩 증가해주는 문제이다.
// filter를 활용해 array에 n 이 있는지 확인후 있으면 answer++ 증가 시켜주고 없으면 "" 빈값을 지정
// filter 를 잘 활용하면 쉽게 풀수 있는 문제였다.
