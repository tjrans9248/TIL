// 나머지 구하기

// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}

// 중앙값 구하기

// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  var midAnswer = Math.floor(array.length / 2);
  var answer = array.sort((a, b) => a - b);
  console.log(answer);
  return answer[midAnswer];
}

// 일단 먼저 랜던으로 들어오는 인자 값들을 오름 차순으로 정렬하기 위해 sort 메소드를 사용해 정렬을 해준다.
// 여기서 문제는 중앙에 위치한 값을 찾아주는 문제였는데, 나는 여기서 구글링을 해봣다 "배열의 중앙값 구하기",
// 찾아본 결과, 인덱스로 찾을수가 있었고, 전체 길이 array.length / 2 를 해주면 가운데 숫자가 나온다. 5 / 2 = 2.5
// 하지만 2.5는 소수의 값이므로 에러가 발생하니 여기서 소수점을 없애주자. Math.floor를 이용해서.

// 최빈값 구하기

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  let map = new Map();

  // Map 객체 초기화
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }

  // Map 객체의 value만 모아서 배열로 만든다
  let arr = Array.from(map.values());

  // 최대값 산출
  let max = Math.max(...arr);

  // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
  if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
    return -1;
  } else {
    return arr.indexOf(max);
  }
}

// 이건 못푼문제다.. 너무 어렵다 공부가 더 필요해 보인다.
// 나는 이중 포문을 돌려서 비교연산자로 답을 추출하여 했지만, 의미가 없었고,
// 구글링 해보니 reduce를 사용한 결과가 많이 있었다.
// reduce를 공부하자

// 짝수는 싫어요

// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}

// 순서대로 나열된 순자를 먼저 for 문을 이용해 순환을 시켜주어, 홀수 값을 추출하자
// i % 2 === 1 을 하면 홀수 값이 추출된다.
// 그 뒤 나올 결과들을 push 함수를 이용해 배열에 저장하자.
