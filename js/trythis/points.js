for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(Number(i.toFixed(1)));
}

console.log("---------------------");
for (let i = 1; i <= 10; i += 1) {
  let sqrt = Number(Math.sqrt(i).toFixed(3));
  if (!Number.isInteger(sqrt)) console.log(sqrt);
}

console.log("---------------------");

const WEEK_NAMES = "일월화수목금토";
const today = new Date();
const todayWeek = today.getDay();
//console.log("🚀 ~ todayWeek:", todayWeek);
console.log("오늘은", WEEK_NAMES[todayWeek] + "요일입니다.");

console.log("---------------------");

function addPoint(a, b) {
  let len =
    a.toString().length > b.toString().length
      ? a.toString().length
      : b.toString().length;
  return (a + b).toFixed(len - 2);
}

console.log(addPoint(0.251354, 0.1));

console.log("---------------------");

function printirr(a) {
  ar;
  do {
    console.log(Math.sqrt(a).toFixed(3));
    a += 1;
  } while (Math.sqrt(a) % 1);
}
//!Number.isInteger(Math.sqrt(a))
printirr(9);
