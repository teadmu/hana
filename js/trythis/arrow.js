globalThis.name = 'GlobalName';
this.name = 'ModuleName';
this.module_age = 33;

//
function tf() {
  console.log('11=', self.name);
  console.log('12=', this); // Timeout
}

const obj = {
  name: 'ObjName',
  bark1: function () {
    console.log('1=', this.name);
    const self = this; // OLD version
    setTimeout(tf.bind(this), 1000); // .bind(this)
    console.log('xxxx');
  },
  bark2() {
    // same as bark2: function() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
  bark3() {
    const xxx = 'XXX';
    function innerFn() {
      console.log('33=', this.name, xxx); // ?
    }
    innerFn();
  },
  bark4: () => {
    console.log(this.name); // ?
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

// obj.bark1(); // bark1.bind(obj)()
// obj.bark2();
// obj.bark3();
// obj.bark4();

// const fff = obj.bark1;
// fff();

// ⇔ function declareFn(name) {
const expressFn = function(name) {
  // if, 'use strict' ?
  this.name = name;
  console.log(this, new.target, this.name, name);
}

const arrowFn = (name) => {
    console.log("11>>",this, new.target, this.name, name);
  this.name = name;
  console.log("22",this, new.target, this.name, name);
}

const hong = {id: 1, name: 'Hong'};
const kim = {id: 2, name: 'Kim'};

// arrowFn.bind(kim)("afn");
// arrowFn.call(kim)("afn");
// arrowFn.apply(kim)("afn");


// expressFn('expfn');
// arrowFn('afn');

// const dfn = new expressFn('D');
// console.log('🚀  dfn.name:', dfn.name)
// const afn = new arrowFn('A'); // error!

const Dog = function (name) {
  // if (!new.target) throw new Error('Call constructor!!');
  console.log(this, new.target, 
              this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () => {
    this.name = 'XXX'
    console.log('bark2=', new.target, this.name, name);
  }
}

// const dog = Dog('Doggy');
// const lucy = new Dog('Lucy');
// console.log('---------------------')
// Dog.bark(); // ?
// lucy.bark(); // ?
// lucy.bark2(); // ?
// console.log('typeof dog =', typeof dog); // ?
// console.log('typeof lucy =', typeof lucy); // ?

//console.log('---------------------');
const Cat = (name) => {
  console.log('Cat>>', this, new.target);
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);

  return this;
}

// const cat = Cat('Coco');
// const cat = new Cat(''); // error!!
// console.log('🚀  cat:', cat)
// cat.bark(); // ?
// cat.bark2(); // ?
// Cat.bark(); // ?
// console.log('type=', typeof cat); // ? 


const dog = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000);
   // setTimeout(() => this.showMyName(), 1000);
    // const d= setTimeout.bind(this);
    // console.log(this);
    // d(this.showMyName,1000)
  }
};



dog.whatsYourName();

