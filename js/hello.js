console.log("Hello world");

function f() {
  return 1;
}

let a = 1;
let b = 2;
let c = (a++, b++);
let d = (a--, b + a);
console.log("🚀 a, b, c, d:", a, b, c, d);

d = void (c = a + b);
console.log("🚀 ~ d:", d);

function f() {}

x = f();
console.log("🚀 ~ x:", x);

const s = `${++a}::${b}`;
console.log("🚀 ~ s:", s);

console.log("-------------");

const R = 1;
const W = 2;
const E = 4;

let auth = parseInt("011", 2);
console.log("🚀 ~ auth:", auth);
console.log("auth-bin>>>", auth.toString(2));
const hasWriteAuth = !!(auth & W);
console.log("🚀 ~ hasWriteAuth:", hasWriteAuth);
const hasExeAuth = !!(auth & E);
console.log("🚀 ~ hasExeAuth:", hasExeAuth);
const hasREadAndExeAuth = !!(auth & (R | E));
console.log("🚀 ~ hasREadAndExeAuth:", hasREadAndExeAuth);
auth = auth ^ E;
