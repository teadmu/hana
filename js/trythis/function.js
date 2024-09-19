const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

function once(fn) {
  var result;
  return function () {
    if (fn) {
      result = fn.apply(this, arguments);
      fn = null;
      return result;
    } else result = undefined;
    return result;
  };
}

const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template = () => () => this.name; // 코드를 완성하세요.

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

temp("sico", "hello");
temp2(1, "sico", "sico@gmail.com", 5);
console.log("square of 7 =", template((n) => n ** 2)(7));

export const weeks = ["일", "월", "화", "수", "목", "금", "토"];

// const getNextWeek = () => {
//   let widx = 0;
//   widx += 1; // side-effect!
//   if (widx >= weeks.length) widx = 0;
//   return `${weeks[widx]}요일`;
// };

const getNextWeek = (function () {
  let widx = 0;
  return function () {
    widx += 1;
    if (widx > weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
