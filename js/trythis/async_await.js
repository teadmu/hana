const afterTime = (sec) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 100, sec));

// const r1 = await afterTime(1);
// console.log("🚀  r1:", r1);
// // afterTime(1).then(r1 => console.log('🚀  r1:', r1));

// function f1() {
//   afterTime(0.5).then(console.log);
// }

// async function f2() {
//   const r2 = await afterTime(1);
//   console.log("🚀  r2:", r2);
//   return r2;
// }

// const rf1 = f1();
// const rf2 = await f2();
// console.log("🚀  rf1/2:", rf1, rf2);

// function layout() {
//   (async () => {
//     const r3 = await afterTime(1);
//     console.log("🚀  r3:", r3);
//   })(); // IIFE
// }
// layout();

// console.log("----------------");
// const mapResult = [1, 2, 3].map(async (val) => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r;
// });
// console.log("mapResult=", mapResult);

const odds = [1, 2, 3].filter((val) => {
  const r = afterTime(val).then((res) => res % 2);
  console.log("filter.r=", r);
  //return r % 2 === 1;
});
console.log("odds=", odds);

const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter((n) => n % 2);
console.log("odds=", rrr);

async function sleep(n) {
  await new Promise((resolve) => setTimeout(resolve, n * 1000));
}
console.log("11", new Date());
await sleep(2);
console.log("22", new Date());

//ex1
const myFetch = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then(resolve)
    .catch(reject);
