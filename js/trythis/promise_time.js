function depthTimer1(depth, d) {
  return new Promise((resolve) => setTimeout(resolve, d)).then(() => {
    console.log(`depth${depth}`, new Date());
    if (depth === 3) {
      throw new Error("Already 3-depth!!");
    }
    return depth + 1;
  });
}

const depthTimer = (depth) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("depth1", new Date());
      if (depth >= 3) reject(new Error("Already 3-depth!!"));
      resolve(depth + 1);
    }, depth * 1000);
  });

function promiseVersion() {
  depthTimer(1).then(depthTimer).then(depthTimer).catch(console.error);
}

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
  })
  .catch((err) => console.log("Error!!>>", err));
