const assert = require("assert");

const hong = { id: 1, name: "Hongi" };
const kim = { id: 7, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Parki" };

const users = [hong, kim, lee, park];
const idxKim = users.indexOf(kim);
console.log("🚀  idxKim:", idxKim);

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);
console.log("🚀  idxId2:", idxId2);

const idxId3 = users.findLastIndex((a) => a.id === 3);
const idxId1 = users.findLastIndex(find3);
console.log("🚀  idxId1:", idxId1);

const findId = (id) => (a) => a.id === id;
const idxId11 = users.findLastIndex(findId(1));
console.log("🚀  idxId11:", idxId11);

console.log("---------------");
users.forEach((a) => console.log(a.id, a.name));

const arr = [1, 2, 3, 4, 5];
const isOdd = (n) => n % 2 !== 0;
// for (const val of arr) {
//   console.log(isOdd(val));
// }
arr.forEach((a) => console.log(a, isOdd(a)));

const kim2 = users.find((user) => user.name === "Kim");
console.log("🚀  kim2:", kim2);
const hong2 = users.findLast((user) => user.name === "Hong");
console.log("🚀  hong2:", hong2);

console.log("--------------");
const hasIUsers = users.filter((user) => user.name.includes("i"));
console.log("🚀  hasIUsers:", hasIUsers);

const names = users.map((user) => user.name);
console.log("🚀  names:", names);

console.log("=====================");
const makeArray = (cnt, startNum = 1) =>
  Array.from({ length: cnt }, (_, i) => i + startNum);

function isPrimeNormal(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

const isPrime = (n) => {
  if (n === 1) return false;
  // return Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2).every(
  return makeArray(Math.sqrt(n) - 1, 2).every((a) => n % a !== 0);
};

// console.log(arr.map(a => [a, isPrime(a)]));

const hasPrime = (arr) => arr.some(isPrime);

assert.strictEqual(hasPrime([1, 2, 3]), true);

const primeNumbers = (arr) => arr.filter(isPrime);

assert.deepStrictEqual(primeNumbers(arr), [2, 3, 5]);

const arr100 = makeArray(100);
console.log("🚀  arr100:", arr100);
assert.deepStrictEqual(
  primeNumbers(arr100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]
);

users.sort((a, b) => (a.id < b.id ? 1 : -1));
console.log("🚀 ~ users:", users);
