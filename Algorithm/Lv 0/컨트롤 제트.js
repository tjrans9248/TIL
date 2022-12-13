function solution(s) {
  let seperate = s.split(' ');

  while (seperate.includes('Z')) {
    seperate.splice(seperate.indexOf('Z') - 1, 2);
  }

  return seperate.reduce((a, b) => a + Number(b), 0);
}
