// // 타입스크립트 기본 타입 정리

// let name1: string = 'kim';
// let age: number = 50;
// let getMarried: boolean = true;

// let members: string[] = ['lim', 'park'];
// let member: { member1: string; member2: string } = {
//   member1: 'kim',
//   member2: 'park',
// };

// let person = 'park';

// let project: { member: string[]; days: number; started: boolean } = {
//   member: ['kim', 'park'],
//   days: 30,
//   started: true,
// };

// // 타입을 미리 정하기 애매할 떄

// let 회원: number | string = 123; //union type
// let members12: (number | string)[] = [1, '2', 3];
// let obj: { a: string | number } = { a: 123 };

// let name2: any;
// let name3: unknown;

// // 계산도 엄격하게 적용한다

// let age2: number = 1;

// let user: string = 'kim';
// let age4: undefined = undefined;
// let married: boolean = false;
// let 철수: (string | number | undefined | boolean)[] = [user, age4, married];

// let school: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: 'phil',
//   friend: 'john',
// };

// school.score[4] = false;
// school.friend = ['lee', school.teacher];

// 함수 타입 지정하는 법 & void 타입

// function cal(x: number | string) {
//   if (typeof x === 'string') {
//     return x * 2;
//   } else {
//   }
// }

// console.log(cal(5));

// const nothing = (x?: number): void => {
//   1 + 1;
// };

// nothing();

// 숙제 1

// function sayHi(name?: string) {
//   if (name === String(name)) {
//     console.log('안녕하세요' + name);
//   } else {
//     console.log('이름이 없습니다.');
//   }
// }

// sayHi('홍길동');

// 숙제 2

// function countNumber(x: string | number): number {
//   return x.toString().length;
// }

// countNumber('234');

// 숙제 3

// function isMarried(
//   money: number,
//   house: boolean,
//   charm: string
// ): string | void {
//   let totalScore: number = 0;
//   totalScore += money;
//   if (money > 10000) {
//     totalScore += 1;
//   }
//   if (house === true) {
//     totalScore += 500;
//   }
//   if (charm === '상') {
//     totalScore += 100;
//   }
//   if (totalScore >= 600) {
//     return '결혼가능';
//   }
// }

// console.log(isMarried(700, false, '중'));
//

// function nothing() {}

// function foo(x: number | string): void {
//   if(x === ){
//     console.log(x + 3);

//   }
// }

// 타입 정하기 narrowing & Assertion

// function a(x: number | string) {
//   let arr: number[] = [];

//   arr[0] = x as number; // 타입이 number or string 으로 애매하니 확실하게 해주자
// }
// assertion 문법의 용도
// 1. narrowing 할 때 습니다 - narrowing 은 타입이 애매할때 애매한 타입을 확실하게 결정짓는 방법
// 2. 무슨 타입이 들어올지 100% 확실할 때
// 하지만 if(typeof x === 'number){} 가 훨씬 좋다 왜냐 버그추적을 못한다.

//
// function nothing() {}
// function foo(x: number | string): void {
//   if(x === ){
//     console.log(x + 3);
//   }
// }
// 타입 정하기 narrowing & Assertion
// function a(x) {
//     var arr = [];
//     arr[0] = x; // 타입이 number or string 으로 애매하니 확실하게 해주자
// }
// assertion 문법의 용도
// 1. narrowing 할 때 습니다 - narrowing 은 타입이 애매할때 애매한 타입을 확실하게 결정짓는 방법
// 2. 무슨 타입이 들어올지 100% 확실할 때
// 하지만 if(typeof x === 'number){} 가 훨씬 좋다 왜냐 버그추적을 못한다.

// 숙제 1

// function changeNumber(x: (string | number)[]) {
//   let arr: number[] = [];

//   x.forEach(item => {
//     if (typeof item === 'string') {
//       arr.push(parseInt(item));
//     } else {
//       arr.push(item);
//     }
//   });
//   return arr;
// }

// console.log(changeNumber([123, '3']));

// 숙제 2

// let 철수쌤 = { subject: 'math' };
// let 영희쌤 = { subject: ['science', 'english'] };
// let 민수쌤 = { subject: ['science', 'art', 'korean'] };

// 함수는 만든다
// array 자료를 넣으면 타입이 과목 이름이 맞는지 검사한다
// 맞으면 그 array의 마지막 요소를 반환해준다
// 과목 이름이 아닌 다른 것이면 에러

// function subject(x: { subject: string }) {
//   if (typeof x.subject === 'string') {
//     return x.subject;
//   }
// }

// subject({ subject: 'math' });

// function subject1(x: { subject: string | string[] }) {
//   if (typeof x.subject === 'string') {
//     return x.subject;
//   } else if (Array.isArray(x.subject)) {
//     return x.subject[x.subject.length - 1];
//   } else {
//     return '에러';
//   }
// }
// subject1({ subject: 'ㄴㅇㄹ' });
// console.log(subject1({ subject: ['science', 'art', 'korean'] }));

// // 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly
// type Animal = string | number | undefined; // type alias
// let animal: Animal = 123;

// type Person = { name: string; age: number };
// let person: Person = { name: 'kim', age: 20 };

// const city = { region: 'busan' };
// city.region = 'seoul';

// type Girl = { readonly name?: string }; // readonly 읽기 전용, 절대 수정이 불가능하다

// const girl: Girl = {
//   name: '지니',
// };

// type Name = string;
// type Age = number;
// type Person2 = Name | Age;

// type PositionX = { x: number };
// type PositionY = { y: number };

// type PositionXY = PositionX & PositionY; // & 연산자로 extend

// let position: PositionXY = { x: 10, y: 20 };

// // 숙제 1

// type X = { name: 'sean' };
// type Y = { name: 'sean' };
// type Z = X & Y;

// let hello: Z = { name: 'sean' };

// // 숙제 2

// type Obj = { color?: string; size: number; readonly position: number[] };

// let people: Obj = { color: 'red', size: 20, position: [2] };

// // 숙제 3

// type Info = { name: string; phone: number; email?: string };

// let information: Info = {
//   name: 'sean',
//   phone: 123,
//   email: 'tjrans@naveer.com',
// };

// // 숙제 4

// type Adult = { isAdult: boolean };

// type New = Info & Adult;

// let info2: New = {
//   name: 'kim',
//   phone: 123,
//   email: 'tjrans9248@naver.com',
//   isAdult: true,
// };

// Literal types로 만드는 const 변수 유사품
// 더 엄격하 타입지정 가능

// let mine: 'man' | 'woman';
// mine = 'man';

// function foo(a: 'hello'): 1 | 0 {
//   return 1;
// }
// foo('hello');

// function game(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
//   return ['바위'];
// }
// game('가위');

// var 자료 = {
//   name: 'kim',
// } as const;

// function goo(a: 'kim') {}
// goo(자료.name);

// type alias 에 함수 type 저장해서 쓰는 법

// type A = (a: string) => number;

// let foo: A = function () {
//   return 10;
// };

// type Member = {
//   name: string;
//   age: number;
//   plusOne: (a: number) => number;
//   changeName: () => void;
// };

// let user: Member = {
//   name: 'kim',
//   age: 20,
//   plusOne(a: number): number {
//     return a + 1;
//   },
//   changeName: () => {
//     return 'sean';
//   },
// };

// user.plusOne(1);

// //숙제 2

// type Cut = (a: string) => string;
// type Dash = (x: string) => number;

// let cutZero: Cut = function (a) {
//   return String(a.replace(/^0+/, ''));
// };
// let removeDash: Dash = function (x) {
//   return parseInt(x.replace(/-/g, ''));
// };

// console.log(cutZero('0sean'));
// console.log(removeDash('010-9792-8922'));

// function wow(one: string, two: Cut, three: Dash) {
//   let result = two(one);
//   let result2 = three(result);
//   console.log(result2);
// }

// console.log(wow('010-1111-2222', cutZero, removeDash));

// narrowing 방법
//1.
// let title = document.querySelector('#title');
// if (title !== null) {
//   title.innerHTML = '이건 1번째 방법';
// }

// 2. instanceof
// let title = document.querySelector('#title');
// if (title instanceof Element) {
//   title.innerHTML = '이건 2번쨰 방법';
// }

// 3. as (비상시에 쓰자)
// let title = document.querySelector('#title') as Element;
// title.innerHTML = '이건 3번쨰방법';

// 4.
// let title = document.querySelector('#title');
// if (title?.innerHTML !== undefined) {
//   title.innerHTML = '4번째 방법';
// }

// let link = document.querySelector('.link');
// if (link instanceof HTMLAnchorElement) {
//   link.href = 'https://kakao.com';
// }

// let button = document.querySelector('#button')
// button?.addEventListener('click', function(){

// })

// 숙제 1
// let image = document.querySelector('#image');
// let button = document.querySelector('#button');
// button?.addEventListener('click', function () {
//   if (image instanceof HTMLImageElement) {
//     image.src = 'new.jpg';
//   }
// });

// 숙제 2
// let link = document.querySelectorAll('.naver');
// // link.forEach(a => {
// //   if (link instanceof HTMLAnchorElement) {
// //     link.href = 'https://kakao.com';
// //   }
// // });

// for (let i = 0; i < 3; i++) {
//   let a = link[i];
//   if (a instanceof HTMLAnchorElement) {
//     a.href = 'https://kakao.com';
//   }
// }

// class

// 옛날 방식
// function machine(q,w){
//   this.q = q
//   this.w = w
// }

// var nunu = new machine()

// es6 class

// class Hero {
//   constructor() {
//     this.q = q;
//   }
// }

// let nunu = new Hero('consume');

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     (this.name = name), (this.age = age);
//   }
//   foo(a: string) {
//     console.log('hello' + a);
//   }
// }

// let person1 = new Person('kim', 30);
// let person2 = new Person('yang', 13);
// person1.foo('sean');

// interface

// interface A {
//   color: string;
//   width: number;
// }
// let obj: A = { color: 'red', width: 100 };

// // interface 장점: extends로 복사가능

// interface Student {
//   name: string; // 중복
// }

// interface Teacher extends Student {
//   // name: string; // 중복
//   age: number;
// }

// // type extends 기능 (&기호 (intersection type))

// type Animal = { name: string };
// // Animal에 있는 속성을 Cat에 복사
// type Cat = { age: number } & Animal;

// let student: Student = { name: 'sean' };
// let teacher: Teacher = { name: 'yang', age: 45 };

// type VS interface

// interface는 중복선언 가능 (합쳐짐)

// interface Student {
//   score: number;
// }

// 숙제 1
// interface Product {
//   brand: string;
//   serialNumber: number;
//   model: string[];
// }

// let product: Product = {
//   brand: 'Samsung',
//   serialNumber: 1360,
//   model: ['TV', 'phone'],
// };

// // 숙제 2

// interface Cart {
//   product: string;
//   price: number;
// }
// [];

// // interface Cart extends Array<Cart> {}
// // interface Cart extends Array<Cart>

// let cart: Cart[] = [
//   { product: '청소기', price: 7000 },
//   { product: '삼다수', price: 800 },
// ];

// // 숙제 3

// interface Card extends Cart {
//   card: boolean;
// }

// 숙제 4

// interface NewObj {
//   plus: (x: number, y: number) => number;
//   minus: (a: number, b: number) => number;
// }

// let newObj: NewObj = {
//   plus: function (x, y) {
//     return x + y;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
// };

// 함수 rest 파라미어, destructing

// function foo1(...a: number[]) {
//   console.log(a);
// }
// foo1(1, 2, 3, 4, 5);

// // spread operator

// let arr = [1, 2, 3];
// let arr2 = [5, 6];
// let arr3 = [...arr, ...arr2];
// console.log(arr3);

// // destructuring

// let [a, b] = [1, 2];
// console.log(a);
// console.log(b);

// let person = { student: true, age: 20 };

// // console.log(student, age);

// function a({ student, age }: { student: boolean; age: number }) {
//   console.log(student, age);
// }

// a({ student: true, age: 20 });

// // 숙제 1

// function bigNumber(...x: number[]) {
//   let minNum = x[0];
//   let length = x.length;

//   for (let i = 0; i < length; i++) {
//     if (x[i] > minNum) {
//       minNum = x[i];
//     }
//   }
//   return minNum;
// }

// console.log(bigNumber(2, 3, 6, 76));

// // 숙제 2
// type UserInfo = { user: 'yang'; comment: [3, 4, 5]; admin: false };

// function obj({ user, comment, admin }: UserInfo) {
//   console.log(user, comment, admin);
// }
// obj({ user: 'yang', comment: [3, 4, 5], admin: false });

// // 숙제3

// type Product = [age: number, type: string, isExpensive: boolean];

// function product([age, type, isExpensive]: Product) {
//   console.log(age, type, isExpensive);
// }
// console.log(product([40, 'wine', false]));

// // never 타입
// // 조건 1. return 값이 없어야함
// // 조건 2. 함수실행이 끝나지 않아야 함 즉, endpoint가 없어야한다.
// function naver(): never {}

// never 타입은 코드를 이상하게 짜면 등장함

//1. narrowing 이 이상한 경우
// 2. 함수표현식은 return 타입이 자동으로 never

// public, private

// public이 붙으면 모든 자식들이 이용가능
// class User {
//   public name = 'kim';
//   constructor(a) {
//     this.name = a;
//   }
// }

// let user1 = new User('park');
// user1.name = 'yang'

// private 이 붙으면 class 안에서만 수정, 이용가능

// class User {
//   name: string;
//   private familyName: string = 'yang';
//   constructor(a) {
//     this.name = this.familyName + a;
//   }

//   changeName() {
//     // 만약 긴급하게 private을 바꿔야되는 상황이라면 class 밖에서
//     // 변경함수를 이용해 변경이 가능하다.
//     this.familyName = 'park';
//   }
// }

// let user2 = new User('sean');
// console.log(user2); // 수정불가..private 때문에

// user2.changeName();
// // console.log(user2);

// class Person {
//   //public 키워드 사용하면 this. 생략가능하다
//   constructor(public name: string) {}
// }

// let chil = new Person('kim');

// console.log(chil);

// class User {
//   // protected를 붙이면 현재 class{} 안에서 + extends된 class{} 안에서 사용가능 하다
//   protected x = 10;
// }

// class NewUser extends User {}

// protected: extends 된 class는 사용가능, 자식들 사용불가능
// private: extends 된 class는 사용 불가능, 자식들 사용불가능

// static
// static 키워드를 붙이면 부모 class에 직접 부여됨
// class User {
//   static x = 10;
//   y = 20;
// }

// let 자식 = new User();
// console.log(User.x);

// class User2 {
//   static skill = 'js';
//   intro = 'hello' + User2.skill;
// }

// let sean = new User2();

// User2.skill = 'ts';

// let a = new User2();
// console.log(a);

// 숙제 1

// private 이 붙으면 class 내 에서만 사용,수정이 가능하다
// public이 붙으면 모든 자식들이 사용이 가능하다
// protected 는 extends 된 class 는 사용 가능하지만, 자식들은 사용이 불가능하다

// 숙제 2

// class User {
//   private static x = 10;
//   public static y = 20;
// }

// User.addOne(3)
// User.addOne(4)
// User.printX()

// import export
//  리액트랑 거의 흡사하다!
// export type
// export interface
// namespace
// namespace a {
//   export type Name = string | number;
// }

// import { Car, Bike } from './s';

// let car: Car = { wheel: 2, model: 'hundai' };

// console.log(car);

// import { Anything } from './s';

// let anyThing: Anything = function (x) {
//   console.log(x);
// };

// console.log(anyThing({ name: 'sean' }));

// generic - 파라미터로 타입을 입력하는 함수

// 장점 : 확장성
// function foo<T>(x: T[]): T {
//   return x[0];
// }
// let a = foo<number>([4, 2]);
// // console.log(a + 1);

// let b = foo<string>(['4', '2']);

// 타입파라미터 제한두기
// T가 우측에 있는 속성으 가지고 있는지 체크한다.

// interface LengthCheck {
//   length: number;
// }
// const minus = <T extends LengthCheck>(x: T) => {
//   return x.length;
// };
// let a = minus<string>('100');

// 숙제 1

// interface LengthSentence {
//   length: number;
// }

// const sentence = <T extends string | string[]>(y: T) => {
//   return y.length;
// };

// console.log(sentence<string[]>(['kim', 'park']));
// console.log(sentence<string>('seanyang'));

// // 숙제 2

// interface Animal {
//   name: string;
//   age: number;
// }

// let data = '{"name": "dog", "age": 1}';

// const animal = <T>(x: string) => {
//   return JSON.parse(x);
// };

// console.log(animal<Animal>(data));

// // 숙제 3

// class Person<T> {
//   name;
//   constructor(a: T) {
//     this.name = a;
//   }
// }
// let a = new Person<string>('sean');
// a.name;

// // tuple
// let bark: [string, boolean?] = ['dog', true];

// function doo(...x:number[]) {
//   console.log(x);
// }
// let arr = [1,2,3,2134,1223]
// let arr2 :[number,number, ...number[]] = [3,4 ...arr]

// // 숙제1

// let info:[string, number, boolean] = ['치킨', 26000, true]

// // 숙제 2
// let a:[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, true]

// // 숙제 3

// function practice(...x: [string, boolean, ...(number | string)[]]) {}
// practice('a', true, 6, 3, '1', 2);

// // 숙제 4

// function sorting(...x: [...(number | string)[]]) {
//   let result: [string[], number[]] = [[], []];

//   x.forEach(x => {
//     if (typeof x === 'string') {
//       result[0].push(x);
//     } else {
//       result[1].push(x);
//     }
//   });
//   return result;
// }
// console.log(sorting('b', 3, 4, 5, 'c'));

// declare & ambient module

// 이렇게 해도 index.html console 에는 잘 나옴 하지만 에러가 걸림..
// declare let a: number; // declare 를 사용하면 재정의가 되어서 에러가 나지 않는다.

// import { a } from './data';
// console.log(a + 1);

// let b: Dog = 'kim';

// d.ts 파일 사용하기

// let he: string = 'kim';
// type Age = number;

// interface CarType {
// model: string;
//   price: number;
// }

// // implements 는 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻이다.
// // class 에다가 타입을 할당하고 변형시키는 키워드는 아니다.
// class Car implements CarType {
//   model: string;
//   price: number = 1000;
//   constructor(a: string) {
//     this.model = a;
//   }
// }

// let car = new Car('morning');

// object index signatures

// interface User {
//   [key: number]: string | number; // 모든 타입 속성을 하나로 똑같이 지정하고 싶을때 사용하면 좋다/
// }

// let user = {
//   0: 'kim',
//   1: '20',
//   2: 'seoul',
// };

// console.log(user[0]);

// let css = {
//   a: {
//     a: {
//       a: 13,
//     },
//   },
// };

// console.log(css['a']['a']['a']);

// // 숙제 1

// interface Obj {
//   [key: string]: string | number;
// }

// let obj: Obj = {
//   model: 'k5',
//   brand: 'kia',
//   price: 6000,
//   year: 2030,
//   date: '6월',
//   percent: '5%',
//   dealer: '양차장',
// };

// object 타입 변환기

// keyof

// let obj = {
//   name: 'yang',
//   age: 20,
// };
// Object.keys(obj);

// interface Person {
//   // age: number,
//   // name: string
//   [key: string]: number;
// }

// type PersonKeys = keyof Person;
// let a: PersonKeys = 'name';

// mapping 타입 변환기
// type Car = {
//   color: boolean;
//   model: boolean;
//   price: boolean | number;
// };

// type TypeChanger<T> = {
//   [key in keyof T]: string;
// };

// type newType = TypeChanger<Car>;

// 숙제 1

// type Bus = {
//   color: string;
//   model: boolean;
//   price: number;
// };

// type BusTypeChange<T> = {
//   [key in keyof T]: string | number;
// };

// type newBusType = BusTypeChange<Bus>;

// 조건문으로 타입 만들기 & infer

type Age<T> = T extends string ? string : unknown;

let a: Age<string>;
let b: Age<number>;

type FirstItem<T> = T extends any[] ? T[0] : any;

let arr: FirstItem<string[]>;
let arr2: FirstItem<number>;

type Person<T> = T extends (infer R)[] ? string : unknown;

type a = Person<string[]>;
