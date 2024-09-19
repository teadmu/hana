function isEndJaum(str) {
  const s = str.charCodeAt(str.length - 1);
  // console.log('🚀  s:', s, str.charCodeAt(str.length - 1));
  console.log(str, s - 가, (s - 가) % 28, 자음알파벳숫자.includes(s));
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

const josa = (str, ja_mo) => {
  const [ja, mo] = ja_mo.split("/");
};
const iga = () => josa(str, "이/가");
const eunun = () => josa(str, "은/는");

function test() {}

export { josa, eunun };
