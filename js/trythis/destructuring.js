// let a = 1;
// let b = 2;
// let t = 1;
// a = b;
// console.log("🚀 ~ a:", a);
// b = t;
// console.log("🚀 ~ b:", b);

// const arr = [1, 2];
// console.log("🚀 ~ old-arr:", arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log("🚀 ~ new-arr:", arr);

// const hong = { id: 1, name: "Hong" };

// function f1(user) {
//   console.log();
// }

// function f2() {}

// let q, s, r;
// ({ r = q * 10, q, s } = { q: 10, s: 20 }); // q = ?, s = ?, r = ?
// console.log("🚀 ~ s:", s);
// console.log("🚀 ~ q:", q);
// console.log("🚀 ~ r:", r);

//user = { id: 1, name: "P", age: 33 };

// function fn({ age }) {
//   return age;
// }
// const { age2: age3 = fn(user) } = { age22: 20 }; //
// console.log("🚀 ~ age3:", age3);
//console.log("🚀 ~ age2:", age2);

// function f1(user) {
//   console.log(user.id, user.name);
// }
// function f2({ id, name }) {
//   console.log(id, name);
// }
// const f3 = ({ id, name }) => {
//   console.log(id, name);
// };

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
let { id, name, addr } = user;
let userInfo = { id, name, addr };
console.log("🚀 ~ userInfo:", userInfo);
console.log("----------------");

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

console.log(id1, id2, id3);
console.log("----------------");

const user1 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
const n = "name";
const { n: v } = user1;
console.log("🚀 ~ n:", v);

function getValueExceptInitial(k) {
  const { [k]: val } = user1;
  console.log("🚀 ~ getValueExceptInitial ~ k:", k);

  const [, ...args] = val;
  return args.join("");
}
console.log(getValueExceptInitial("name")); // 'ong'
console.log(getValueExceptInitial("passwd")); // 'yz'
console.log(getValueExceptInitial("addr")); // 'eoul'

function getDiffMillis(dt1, dt2) {
  const d1 = new Date(dt1);
  const d2 = new Date(dt2);
  const { getTime: getTime1 } = d1;
  const { getTime: getTime2 } = d2;
  return getTime1.bind(d1)() - getTime2.bind(d2)();
}
getDiffMillis("2021-01-01", "2021-01-02");
