const assert = require("assert");

export const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

function ex1() {
  const d1 = new Date("1970-01-01T00:00:00.000Z");
  const d2 = new Date("1970-01-02T00:00:00.000Z");

  // console.log('🚀  d1:', d1.getTime());
  return (d2.getTime() - d1.getTime()) / 1000;
}
// console.log(ex1());
assert.strictEqual(ex1(), 86400);

function ex2() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  // 중복발생!
  // const randDates = Array(5)
  //   .fill(0)
  //   .map(() => rand(1, lastDate));
  const lastDate = d.getDate();
  const randDates = [];
  do {
    const rdate = rand(1, lastDate);
    if (!randDates.includes(rdate)) randDates.push(rdate);
    // randDates = [...new Set(randDates)];
  } while (randDates.length < 5);

  console.log("🚀  d:", d, lastDate, randDates);

  return randDates.sort((a, b) => (a > b ? 1 : -1));
}
console.log(ex2());

const nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);
const nextYearWeek = "일월화수목금토"[nextYear.getDay()];
console.log("🚀 ~ nextYearWeek:", nextYearWeek);

const after100 = new Date();
after100.setDate(after100.getDate() + 100);
console.log("🚀 ~ after100:", after100.toDateString());

const str = "Senior Coding Learning JS";
const a = /[A-z\d]/.test(str); // ?
console.log("🚀 ~ a:", a);
const b = /(A-z\d)/.test(str); // ?
console.log("🚀 ~ b:", b);
const c = /(A-z\d)/.test("XA-z2"); // ?
console.log("🚀 ~ c:", c);
const d = /(A-z\d)/.test("XAz2"); // ?
console.log("🚀 ~ d:", d);

const regexp1 = /[A-Z]/g;
regexp1.exec(str);

const regexp = /senior|coding/i;
if (regexp.test("Junior Developer")) console.log("Junior Developer OK");
if (regexp.test("Senior Developer")) console.log("Senior Developer OK");
if (regexp.test("JS Coding")) console.log("JS Coding OK");
if (regexp.test("JavaScript Coding")) console.log("JavaScript Coding OK");
