// function getDiffMillis(dt1, dt2) {
//   const d1 = new Date(dt1);
//   const d2 = new Date(dt2);
//   const { getTime: getTime1 } = d1;
//   const { getTime: getTime2 } = d2;
//   return Math.abs(getTime1.call(d1) - getTime2.apply(d2));
// }
// console.log(getDiffMillis("2021-01-01", "2021-01-02"));

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }

//   fn() {
//     return "FN";
//   }

//   static sfn() {
//     return "SFN";
//   }
// }
// const lucy = new Dog("Lucy");
// const { sfn } = Dog;
// const { name: aa, fn: fnnn, getName } = lucy;

// console.log(aa, sfn(), fnnn(), getName); // ?
// getName.call(lucy); // ?

const a3 = Array(3);
console.log("🚀 ~ a3:", a3);
console.log(a3.length);
const a4 = Array(1, 2, 3, 4);
console.log("🚀 ~ a4:", a4);

s1 = "str";
s2 = String("str");
s3 = new String("str");
console.log(s1 === s2);
console.log(s1 === s3);

const arr = Array.from({ length: 100 }, (_, i) => i + 1);
console.log("🚀 ~ arr:", arr);
