// 두 수의 나눗셈

// 문제 설명
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
  var answer = 0;
  return parseInt((num1 / num2) * 1000);
}

// 숫자 비교하기

// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;

  return answer;
}

// 분수의 덧셈

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(denum1, num1, denum2, num2) {
  var arr = [];
  var top = denum1 * num2 + denum2 * num1;
  // console.log(top)
  var bottom = num1 * num2;
  let minNumber;
  if (top < bottom) {
    minNumber = top;
  } else {
    minNumber = bottom;
  }
  while (minNumber > 0) {
    if (top % minNumber === 0) {
      if (bottom % minNumber === 0) {
        return [top / minNumber, bottom / minNumber];
      }
    }
    minNumber = minNumber - 1;
  }
}

// 아직 제대로 이해하지 못했습니다. 하지만 이 문제를 풀기위해서는 최대공약수를 구해야되는데, 유클리드 알고리즘을 공부하고 풀어야됩니다.

// 배열 두배 만들기

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = [];
  var number = numbers.map(x => x * 2);
  // console.log(number)
  return number;
}
