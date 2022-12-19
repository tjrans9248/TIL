function solution(s) {
  let ans = [];

  let arr = s.split('');

  arr.forEach(item => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      ans.push(item);
      console.log(arr[item]);
    }
  });

  return ans.sort().join('');
}
