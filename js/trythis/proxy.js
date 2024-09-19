const assert = require("assert");
class Emp {
  firstName;
  lastName;
  constructor() {
    return new Proxy(this, {
      set(_target, prop, value) {
        if (prop === "fullName") {
          const tmp = value?.split(" ") || [];
          this["lastName"] = (tmp[1] || tmp[0])?.toUpperCase();
          this["firstName"] = tmp[1] ? tmp[0] : this.firstName;
        } else {
          this[prop] = value;
        }
      },

      get(_target, prop) {
        if (prop === "fullName") {
          return `${this.firstName}${this.firstName ? " " : ""}${
            this.lastName
          }`;
        }

        return this[prop];
      },
    });
  }
}
const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
assert.strictEqual(hong.fullName, "Kildong HONG");
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
assert.strictEqual(hong.fullName, "Kildong LEE");
assert.deepStrictEqual(
  [hong.firstName, hong.lastName],
  "Kildong LEE".split(" ")
);

hong.fullName = undefined;
console.log("🚀  hong:", hong);
