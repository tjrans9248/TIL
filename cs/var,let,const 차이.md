# var, let, const 의 차이점

## 1️⃣ 변수 선언 방식

우선, var 는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.

```js
var name = 'seokmoon';
console.log(name); // seokmoon

var name = 'yang';
console.log(name); // yang
```

변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.

유연한 변수 선언으로 간단한 테스트에는 편리하나, 코드량이 많아진다면 어디서 어떻게 사용될지도 파악하기 힘들고, 값이 바뀔 우려가 있다.

그래서, ES6 이후로, 이를 보안하기 위해 변수 선언 방식이 let, const 이다

```js
let name = 'seokmoon';
console.log(name); // seokmoon

let name = 'yang';
console.log(name); // Uncaught SyntaxError: Identifier 'name' has already been declared
```

`name` 이 이미 선언되었다는 에러 메세지를 볼 수 있다. (const도 마찬가지)

- 변수 재선언이 되지 않는다.

그렇다면, let 과 const 의 차이점은 무엇일까?

이 둘의 차이점은 `immutable` (불변-변경불가능한)여부이다.

`let` 은 변수에 재할당이 가능하다. 그렇지만,

```js
let name = 'seokmoon';
console.log(name); // seokmoon

let name = 'yang';
console.log(name);
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'lee';
console.log(name); // lee
```

`const` 는 변수 재선언, 변수 재할당 모두 불가능 하다.

```js
const name = 'seokmoon';
console.log(name); // seokmoon

const name = 'yang';
console.log(name);
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'lee';
console.log(name);
//Uncaught TypeError: Assignment to constant variable.
```

## 2️⃣ 호이스팅

호이스팅(hoisting) 이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.

자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function\*, class)을 호이스팅한다.

하지만, var 로 선언된 변수와 달리 let 으로 선언된 변수는 선언문 이전에 참조하면 참조에러가 발생한다.

```js
console.log(foo); // undefined
var foo;

console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
let bar;
```

이는 `let` 으로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(TDZ)에 빠지기 때문이다.

변수는 `선언 단계` > `초기화 단계` > `할당 단계` 에 걸쳐 생성되는데
`var` 로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어 진다.

```js
// 스코프의 선두에서 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.

console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
```

`let` 으로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

```js
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.

console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1
```
