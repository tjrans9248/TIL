export {}; // export 를 추가하면 현재파일이 로컬모듈이 됨

let a = 10;
// 필요에의해 글로벌 변수가 필요할시, declare global{} 안에 작성하면된다.
declare global {
  //
  type Dog = string;
}

let ndnd: string = 'kim';
