const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
console.log("🚀 ~ ex1:", ex1);
// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);
console.log("🚀 ~ ex2:", ex2);
// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
console.log("🚀 ~ ex3:", ex3);
// ex4) 복원하기
console.log(arr2);
arr2.splice(1, 0, ...ex3);
console.log(arr2);
// ex5) [3] 부터 끝까지 제거하기
const ex5 = arr2.splice(2, 3);
console.log(arr2);
// ex6) 복원하기
arr2.splice(2, 0, ...ex5);
console.log(arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
const ex7 = arr2.splice(2, 1, "X", "Y", "Z");
console.log(arr2);

const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
const obj = objs.reduce((s, obj) => Object.assign(s, obj));
console.log("🚀 ~ objs:", obj);
