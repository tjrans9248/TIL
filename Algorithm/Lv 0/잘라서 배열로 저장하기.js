// 문제
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예

// my_str	n	result
// "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
// "abcdef123"	3	["abc", "def", "123"]

// 입출력 예 설명
// 입출력 예 #1

// "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
// 입출력 예 #2

// "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.

function solution(my_str, n) {
  let answer = [];
  let strArr = my_str.split('');
  // splice를 사용하기 위해서는 각각 하나의 문자열이 필요하다.

  // 맨처음에는 for 문을 사용하여 구현했지만, 속도에서 초과되어, 통과되지 않는 테스트가 꽤있엇따.
  // 그래서 구글링해보니 while 문을 사용하니 문제가 없이 통과가 되었다.

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(''));
    // strArr.length (길이)가 0 이상일때를 조건문으로 걸었는데, 그 이유는, n(6)씩 자르고, 만약
    // 남은 문자열이 있을경우, 그 나머지로 return 하기 위해서이다.
    // 그 후, splice()를 활용해, 문자열의 index(0) 부터 n 까지 자른후, join('') 활용해 다시 분리되어있던 문자들을, 합쳐준다.
  }
}
