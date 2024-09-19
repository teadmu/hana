type PropKey = string | number | symbol;

interface Array<T> {
  firstObject: T;
  lastObject: T;
  mapBy: (prop: PropKey) => any;
  filterBy: (prop: PropKey, value: any, isIncludes?: boolean) => T[];
  rejectBy: (prop: PropKey, value: any, isIncludes?: boolean) => T[];
  findBy: (prop: PropKey, value: any) => T | undefined;
  sortBy: (prop: string) => T[];
  groupBy: (cb: (a: T) => string) => { [k: PropKey]: T[] };
}

Array.prototype.mapBy = function (prop: PropKey) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a: any) => a[prop]?.includes(value)
    : (a: any) => a[prop] === value;

  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a: any) => !a[prop]?.includes(value)
    : (a: any) => a[prop] !== value;

  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop: string) {
  // name | name:desc | name:asc
  const [key = "", direction = "asc"] = prop.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  return this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
};

Array.prototype.groupBy = function (gfn) {
  const ret: { [k: string]: any[] } = {};
  for (const a of this) {
    const k = gfn(a);
    ret[k] ||= [];
    ret[k].push(a);
  }

  return ret;
};

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

const hong1 = { id: 1, name: "Hong", dept: "Server" };
const kim1 = { id: 2, name: "Kim", dept: "Server" };
const lee1 = { id: 3, name: "Lee", dept: "Client" };
const users1 = [hong1, kim1, lee1];

console.log(users1.mapBy("id")); // [1, 3, 2];
console.log(users1.mapBy("name")); // ['Hong', 'Lee', 'Kim']);
console.log(users1.filterBy("id", 2)); // [kim]);
console.log(users1.filterBy("name", "i", true)); // [kim]
console.log(users1.rejectBy("id", 2)); // [hong, lee]
console.log(users1.rejectBy("name", "i", true)); // [hong, lee]
console.log(users1.findBy("name", "Kim")); //  kim;
console.log(users1.sortBy("name:desc")); //  [lee, kim, hong];
console.log(users1.sortBy("name")); // [hong, kim, lee]
console.log(users1.groupBy(({ dept }) => dept));
/*
Server: [
  { id: 1, name: 'Hong', dept: 'Server' },
  { id: 2, name: 'Kim', dept: 'Server' },
],
Client: [
  { id: 3, name: 'Lee', dept: 'Client' }
],
*/

console.log("first/last=", users1.firstObject.name, users1.lastObject.name); // hong/lee
users1.firstObject = kim1;
users1.lastObject = hong1;
console.log("first/last=", users1.firstObject.name, users1.lastObject.name); // kim/hong
