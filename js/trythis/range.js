// const assert = require("assert");
import assert from "assert";
import { range } from "../util/array_utils";

const range = (start, end, step = start < end ? 1 : -1) => {
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
};

range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(range(1, 10)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(range(10, 1)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
range(10, 1, -2); // [10, 8, 6, 4, 2]
range(5); // [1, 2, 3, 4, 5]
range(100); // [1, 2, 3, 4, 5, …, 99, 100]
range(-5); // [-5, -4, -3, -2, -1]
range(5, 5); // [5]                  range(1, 5, 0); // [1]
range(5, 5, 0); // [5]                  range(0, 5);   // [0, 1, 2, 3, 4, 5]
range(5, 5, -1); // [5]                  range(0, -1);  // [0, -1]
range(5, 1, 1); // []                   range(0, -3);  // [0, -1, -2, -3]
range(1, 5, -1); // []                   range(-3, 0);  // [-3, -2, -1, 0]
range(1, 5, 6); // [1]                  range(5, 1);   // [5, 4, 3, 2, 1]
range(0); // [0]     range(0, 0);  // [0]      range(0, 0, 5);   // [0]
range(2, 1, -5);

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
const range2 = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];
  //(start-end)*step>0
  //if ((start > end && step > 0) || (start < end && step < 0)) return [];
  if ((start - end) * step > 0) return [];
  if (end === undefined) {
    if (statrt > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      end = 0;
    }
  }
  let tmp = start;
  // end = end ?? (start > 0 ? ((start = 1), tmp) : start<0 ? );
  const results = [];
  for (let i = start; i <= end; i += step) {
    results.push(i);
  }
};
