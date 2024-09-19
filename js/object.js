const assert = require("assert");

const arr = [100, 200, 300, 400, 500, 600, 700];
function ex1() {
  const results = [];
  for (const key in arr) {
    results.push(key); // key
    // results.push(arr[key]); // value
  }

  return results;
}
// console.log('ex1>>', ex1());

function ex2() {
  const obj = {
    name: "Kim",
    addr: "Yongsan",
    level: 1,
    role: 9,
    receive: false,
  };

  for (const key in obj) {
    console.log(key, obj[key]);
  }

  console.log(" - - -  - -");
  for (const val of Object.values(obj)) {
    console.log(val);
  }

  Object.defineProperty(obj, "level", { enumerable: false });
  console.log("🚀  obj:", obj);

  Object.freeze(obj, "role");
  console.log(Object.getOwnPropertyDescriptors(obj));
}
// ex2();

const data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];
function makeObjectFromArray(array) {
  const retObj = {};
  for (const [key, ...vals] of array) {
    retObj[key] = vals;
    // retObj[a[0]] = [a[1], a[2]];
  }
  return retObj;
}

const dataObj = makeObjectFromArray(data);
console.log("makeObjectFromArray>>", dataObj);

function makeArrayFromObject(obj) {
  const results = [];
  for (const key in obj) {
    results.push([key, ...obj[key]]);
    // results.push([key, obj[key]].flat());
  }
  return results;
}
console.log("🚀  makeArrayFromObject:", makeArrayFromObject(dataObj));

assert.deepStrictEqual(makeArrayFromObject(dataObj), data, "data vs makeArray");

console.log("-------------------------------");
function sallowCopy(obj) {
  const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
  const newKim = {};
  for (const k in kim) {
    newKim[k] = kim[k];
  }
  assert.deepStrictEqual(kim, newKim);
  newKim.addr = "Daegu";
  assert.notDeepStrictEqual(kim, newKim);
  console.log("shallow>>", kim.addr !== newKim.addr); // true면 통과!
  console.log("🚀  kim newKim:", kim, newKim);
}
// sallowCopy();

function isObject(obj) {
  return obj && typeof obj === "object";
}

const KIM = { nid: 3, nm: "Kim", addr: { city: "Pusan" }, [Symbol()]: "sym" };
export function deppcopy(obj) {
  if (!isObject(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = deppcopy(obj[k]);
  }

  return newer;
}

const newKim = deppcopy(KIM);
assert.deepStrictEqual(KIM, newKim);
newKim.addr.city = "Daegu";
assert.notDeepStrictEqual(KIM, newKim);
console.log("shallow>>", KIM.addr.city !== newKim.addr.city); // true면 통과!
console.log("🚀  kim newKim:", KIM, newKim);
