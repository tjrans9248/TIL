const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('OK');
    reject(new Error('err...'));
  }, 1000);
});

console.log('시작');

pr.then(result => {
  console.log(result);
})
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('done');
  });

const f1 = callback => {
  setTimeout(function () {
    console.log('1번 주문');
    callback();
  }, 1000);
};

const f2 = callback => {
  setTimeout(function () {
    console.log('2번 주문');
    callback();
  }, 3000);
};
const f3 = callback => {
  setTimeout(function () {
    console.log('3번 주문');
    callback();
  }, 2000);
};

// promise 없이
// depth 가 깊어지면서 계속 콜백을 요청하는 것을 콜백 지옥

console.log('시작');
f1(function () {
  f2(function () {
    f3(function () {
      console.log('done');
    });
  });
});

// promise 를 사용

const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error('실패'));
    }, 1000);
  });
};

const f2 = message => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2번 주문');
    }, 3000);
  });
};

const f3 = message => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문');
    }, 2000);
  });
};

// 프로미스 체이닝

// console.log('시작');
// f1()
//   .then(res => f2(res))
//   .then(res => f3(res))
//   .then(res => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log('끝');
//   });

// Promise.all 한꺼번에 작업이 이행되고 값을 받을 수 있다. 시간도 절약 가능, 하나의 정보라도 누락(실패) 될경우 에러가 발생 그래서, 하나의 정보라도 누락되면 페이지를 보여주면 안되는 경우사용
// Promise.all([f1(), f2(), f3()]).then(res => {
//   console.log(res);
// });

// Promise.race
// 하나라도 1등으로 완료될 경우 종료
Promise.race([f1(), f2(), f3()]).then(res => {
  console.log(res);
});
