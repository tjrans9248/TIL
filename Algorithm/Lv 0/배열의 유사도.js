function solution(s1, s2) {
  var answer = 0;

  let arr = [...s1, ...s2];
  // 중복된값을 한꺼번에 걸러내기위해, 하나로 합쳐줬다.
  let findSameVal = (arr = arr.filter((x, idx) => arr.indexOf(x) !== idx));
  // filter(), indexOf() 함수를 사용해 중복되는 값을 걸러내준다.
  // let copy = findSameVal(arr);
  answer = findSameVal.length;
  // 몇 개의 중복된 갯수가 있는지 반환해야하기 때문에. length를 반환해준다.

  return answer;
}

// 방법 찾기
// 중복된 값 찾기 filter()
// for, for of 문 돌려서 set,
