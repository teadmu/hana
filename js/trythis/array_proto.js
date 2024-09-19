const assert = require("assert");

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
      // this.with(0, value); // pure fn
    },
  },
  lastObject: {
    get() {
      return this.at([-1]);
    },
    set(value) {
      this[this.length - 1] = value;
      // this.with(-1, value);
    },
  },
});
const arr = [1, 2, 3, 4, 5];
assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
arr.firstObject = 100;
arr.lastObject = 500;
assert.deepStrictEqual([arr.firstObject, arr.lastObject], [100, 500]);

const arr2 = [];
assert.deepStrictEqual(
  [arr2.firstObject, arr2.lastObject],
  [undefined, undefined]
);
const arr3 = [1];
assert.deepStrictEqual([arr3.firstObject, arr3.lastObject], [1, 1]);

// ---------------------
Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};
Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => a[prop]?.includes(value)
    : (a) => a[prop] === value;

  return this.filter(cb);
};
Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => !a[prop]?.includes(value)
    : (a) => a[prop] !== value;

  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  // name | name:desc | name:asc
  const [key, direction = "asc"] = prop?.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  // console.log('🚀  dir:', dir, prop);
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]);
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy("name", "i", true), [lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, lee);
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);

function uniq() {
  Array.prototype.uniqBy = function (prop) {
    if (!prop && prop !== 0) return [...new Set(this)];

    return [...new Set(this.map((a) => a[prop]))];
  };

  const arr = [1, 2, 2, 3, 4, 5, 6, 5, 6, 8];
  assert.deepStrictEqual(arr.uniqBy(), [...new Set(arr)]);

  const hong = { id: 1, name: "Hong", dept: "HR" };
  const kim = { id: 2, name: "Kim", dept: "Server" };
  const lee = { id: 3, name: "Lee", dept: "Front" };
  const park = { id: 4, name: "Park", dept: "HR" };
  const ko = { id: 7, name: "Ko", dept: "Server" };
  const loon = { id: 6, name: "Loon", dept: "Sales" };
  const choi = { id: 5, name: "Choi", dept: "Front" };
  const users = [hong, kim, lee, park, ko, loon, choi];
  users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]

  // console.log(users.uniqBy('dept'));

  assert.deepStrictEqual(users.uniqBy("dept"), [
    "HR",
    "Server",
    "Front",
    "Sales",
  ]);
}

uniq();
