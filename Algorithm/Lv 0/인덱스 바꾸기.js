// function solution(my_string, num1, num2) {
//     var answer = '';

//     for(let i = 0; i < my_string.length; i++){
//         if(my_string[i] === num1){
//             answer = answer + my_string.substring(0, num1) + my_string.substring(num2)
//         }
//     }
//     return answer;
// }

// function solution(my_string, num1, num2) {
//     var answer = '';
//     let str = my_string.split("")
//     console.log(str)
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === num1){
//             answer = answer + str[i].replace("num1", "num2")
//         } else {
//             answer = answer + str[i].replace("num1", "num2")
//         }
//     }
//     return answer;
// }

// console.log(solution("hello", 1, 2))
function solution(my_string, num1, num2) {
  const result = [...my_string];

  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join('');
}
