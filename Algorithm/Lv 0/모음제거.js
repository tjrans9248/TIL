function solution(my_string) {
  var answer = my_string.replace(/['a','e','i','o','u']/g, '');

  // for(let i = 0; i < my_string.length; i++) {
  //     if(my_string[i] === 'u')
  //         return answer = answer + answer.replace('u','');
  //     console.log(answer)
  // }
  return answer;
}
