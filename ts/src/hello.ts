const myname: string = "mu";
console.log("🚀 ~ Hello:", myname);
const n: number = 36;
console.log("🚀 ~ n:", n);

let x: number | string;
x = 1;
x;
x = "abc";
x;

type Person = {
  name: string;
  age: Number;
  phone: Number;
  addr?: string;
};

const hong: Person = {
  name: "홍길동",
  age: 26,
  phone: 1234125,
};

hong.name = "김길동";
console.log("🚀 ~ hong:", hong.name);

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;
let customer: Customer;
let m: Member;
let g: Guest;
customer = {
  name: "sd",
  addr: "as",
  discountRate: 12,
  age: 12,
};

function f(cb: (input: string | number) => number) {
  return cb(1);
}
function f2(input: string | number | boolean) {
  return 1;
}
function f3(input: string) {
  return 1;
}

let a: string | number = 1;
let b: string = "s";
//console.log(b);

let singer: (song: string) => string;

singer = function (song) {
  return `Singing:${song.toUpperCase()}!`;
};

console.log(singer("sd"));

const songs = ["One More Time", "I", "Cry"];

songs.forEach((song, idx) => {
  console.log(`${song} is at index${idx}`);
});

type NumberToString = (input: number) => string;

function useNumberToString(numberToString: NumberToString) {
  console.log(`the String is: ${numberToString(1234)}`);
}

useNumberToString((input) => `${input}! Hooray`);
// useNumberToString((input) => input * 2);

function logSong(song: string): void {
  if (!song) {
    return;
  }
  console.log(`${song}`);
  // return true;
}

type VoidReturn = () => void;
const test2: VoidReturn = () => 11;
console.log(test2.toString());

let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${song}`);
  return true;
};

songLogger("HeartBeat");

// if(songLogger("aa")){}

function returnVoid(): undefined {
  return;
}

let lazyValue: string | undefined;
lazyValue = returnVoid();

function fail(message: string): never {
  throw new Error(`Invariant Failure : ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }

  param.toUpperCase();
}

function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
// cb에는 this를 사용하지 않은 함수만 받겠다!!
function ff(cb: (this: void) => number) {
  return cb();
}

function fff(cb: (this: void) => number) {}

const obj = { id: 1 };

function xx(this: typeof obj) {
  return this.id;
}

function y() {
  return 1;
}

// ff(xx);
ff(y);

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(oneToTen[400].toFixed(2));

interface SomeInterface {
  [key: string]: number;
}

let is: SomeInterface = {
  one: 1,
  two: 2,
  three: 0,
};

is["one"]?.toFixed(2); // OK
is["four"]?.toFixed(2); // false: OK, but Runtime Error in JS!
is["four"]?.toFixed(2); // true: Error in TS Compiling!
