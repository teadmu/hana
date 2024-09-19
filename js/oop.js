const obj = { id: 1, name: "Hong" };
// cf. obj = {..., __proto__: { x: 11 }};

// console.log(obj.toString);
// ((Object.getPrototypeOf(obj) === Object.prototype) ===
//   obj.constructor.prototype) ===
//   obj.__proto__;
class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  constructor(name) {
    // {name: …}
    this.name = name || super.constructor.name;
  }
}
const dog = new Animal("Dog");
// console.log("obj.keys=", Object.keys(obj));
// console.log("ak=", Object.keys(dog));
// for (let k in dog) console.log("k=", k);
// console.log("oh=", obj.hasOwnProperty("id"));
// console.log("dh=", dog.hasOwnProperty("id"));
// console.log(dog.constructor === Animal);
class Emp {
  firstName;
  lastName;
  fullName(name) {
    const arr = name.split("");
    if (arr.length === 1) {
      this.firstName = arr[1];
    } else {
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
    return this.firstName + this.lastName.toUpperCase();
  }
}

const hong = new Emp();
hong.fullName = "Kildong Hong"; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.fullName = "Lee";
console.log(hong.firstName, hong.lastName); // 'Kildong LEE' 출력하면 통과!
