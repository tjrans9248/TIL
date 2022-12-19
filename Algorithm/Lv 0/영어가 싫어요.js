function solution(numbers) {
  //     var answer = numbers.split(',', 4)
  //     console.log(answer)
  //     let obj = {0:"zero", 1:"one", 2: "two", 3:"three", 4:"four", 5: "five", 6:"six", 7:"seven", 8:"eight", 9:"nine"}

  //     for(let i in obj){
  //         console.log(i)
  //         if(i === numbers){
  //             answer += i
  //         }
  //     }
  // return answer;
  let arr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < arr.length; i++) {
    numbers = numbers.split(arr[i]).join(i);
    console.log(numbers);
  }
  return Number(numbers);
}
