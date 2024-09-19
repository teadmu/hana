import assert from "assert";

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => {
    const rtime = Math.random() * 1000;
    console.log("start>>", val, Math.trunc(rtime));
    setTimeout(() => {
      console.log("run>>", val);
      resolve(val);
    }, rtime);
  });

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    const results = [];
    let cntToRun = promises.length;
    for (let i = 0; i < promises.length; i += 1) {
      6;
      promises[i]
        .then((succ) => {
          results[i] = succ;
          console.log("succ", succ);
          // results.push(succ); // BAD
          if ((cntToRun -= 1) === 0) resolve(results);
        })
        .catch(reject);
    }
  });

async function promiseAll2(promises) {
  const results = [];
  let cntToRun = promises.length;
  for (let i = 0; i < promises.length; i += 1) {
    let p = await promises[i];
  }
}

console.time("PALL");
promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    console.timeEnd("PALL");
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    console.log(JSON.stringify(array, null, "  "));
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
