import assert from "assert";
// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

// console.log("START!", new Date());

// function depthTimer(depth, d) {
//   return new Promise((resolve) => setTimeout(resolve, d)).then(() => {
//     console.log(`depth${depth}`, new Date());
//     if (depth === 3) {
//       throw new Error("Already 3-depth!!");
//     }
//     return depth + 1;
//   });
// }

// depthTimer(1, 1000)
//   .then((depth) => depthTimer(depth, 2000))
//   .then((depth) => depthTimer(depth, 3000))
//   .catch((err) => console.log("Error:", err));

const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    else reject(new Error("어디로?" + id));
  });

promiseFn(1)
  .then((res) => {
    console.log("res1>>", res);
    promiseFn(res); // Need Return the Promise Object!!
  })
  .then((res) => {
    console.log("res2>>", res); // res가 undefined 이라면 ⇒ 여기서 throw 하면 될까?
    throw new Error("undefined");
  })
  .catch((err) => console.log("Error!!>>", err));

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed += 1;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

    if (promises.length === 0) {
      resolve(results);
    }
  });
}

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
