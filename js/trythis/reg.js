// import assert from 'assert';
import assert from "assert";

const fmt = ([label, unit], price) =>
  `${label}${price.toLocaleString().padStart(9)}${unit}`;

const total = { price: 45000, vat: 4500 };
// console.log(fmt`주문합계: ${total.price}원`);
// console.log(fmt`세액합계: ${total.vat}냥`);

// function fmt([label, unit], price) {
//   return `${label}${price.toLocaleString().padStart(9)}${unit}`;
// }

// -----------------------
function upperToLowerX(str) {
  // return str.replace(/([A-Z])/g, '*$1*-');
  return str.replace(/[A-Z]/g, (matchedStr) => {
    return `*${matchedStr.toLowerCase()}*-`;
  });
}

const upperToLower = (str) =>
  str.replace(/[A-Z]/g, (matchedStr) => `*${matchedStr.toLowerCase()}*-`);

assert.strictEqual(
  upperToLower("Senior Coding Learning JS"),
  "*s*-enior *c*-oding *l*-earning *j*-*s*-"
);

// --------------------
const swapCase = (str) =>
  str.replace(/([A-Z]*)([a-z]*)/g, (_matchedStr, upper, lower) => {
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });
// console.log('🚀  swapCase:', swapCase('Senior Coding LEArning JS'));

assert.equal(
  swapCase("Senior Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 4 Class"), "hANARO 4 cLASS");
assert.equal(swapCase("HeLLo WoRLd"), "hEllO wOrlD");

// ----------------------------
// for (let i = '가'.charCodeAt(); i <= '힣'.charCodeAt(); i++) {
//   if ((i - 44032) % 28 === 0)
//     console.log(i - 44032, (i - 44032) % 28, String.fromCharCode(i));
// }
// let i = 44032;
// while (i++ < 44032 + 100000) {
//   console.log(i - 44032, (i - 44032) % 28, String.fromCharCode(i));
// }
// return;

const ㄱ = "ㄱ".charCodeAt();
const ㅎ = "ㅎ".charCodeAt();
const 가 = "가".charCodeAt();
const 힣 = "힣".charCodeAt();
const 자음알파벳숫자 = [..."LMNRlmnr136780"].map((a) => a.charCodeAt());

function isEndJaum(str) {
  const s = str.charCodeAt(str.length - 1);
  // console.log('🚀  s:', s, str.charCodeAt(str.length - 1));
  // console.log(str, s - 가, (s - 가) % 28, 자음알파벳숫자.includes(s));
  // if (s >= ㄱ && s <= ㅎ) return true;
  // if (자음알파벳숫자.includes(s)) return true;

  return (
    (s >= ㄱ && s <= ㅎ) ||
    자음알파벳숫자.includes(s) ||
    (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0)
  );

  // return (
  //   (s - 가) % 28 !== 0 &&
  //   ((s >= ㄱ && s <= ㅎ) || 자음알파벳숫자.includes(s))
  // );
}

// console.log(isEndJaum('북한강'));
// console.log(isEndJaum('아점수 A'));
// return;
assert.equal(isEndJaum("아지오"), false);
assert.equal(isEndJaum("북한강"), true);
assert.equal(isEndJaum("뷁"), true);
assert.equal(isEndJaum("강원도"), false);
assert.equal(isEndJaum("바라당"), true);
// assert.equal(isEndJaum('ㅜㅜ'), false);
assert.equal(isEndJaum("케잌"), true);
assert.equal(isEndJaum("점수 A"), false);
assert.equal(isEndJaum("알파벳L"), true);
assert.equal(isEndJaum("24"), false);
assert.equal(isEndJaum("23"), true);

// -------------------
const telfmt = (str) => {
  const len = str.length;
  if (len < 7) return str;
  if (len <= 8) return str.replace(/(\d{3,4})(\d{4})$/g, "$1-$2");

  // const g3 = 4;
  const g1 = str.startsWith("02") ? 2 : len === 12 ? 4 : 3;
  const g2 = len - g1 - 4;
  // console.log(str, '->', g1, g2, g3);

  const regexp = new RegExp(`(\\d{${g1}})(\\d{${g2}})(\\d{4})$`, "g");
  return str.replace(regexp, "$1-$2-$3");
};
assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");
