import assert from "assert";

// function Stack() {
//   const arr = [];
//   return {
//     push(x) { arr.push() },
//     pop
//   }
// }

// Stack, Queue, ArrayList
class Collection {
  #arr = [];

  constructor(...args) {
    this.#arr.push(...args);
  }

  get _arr() {
    return this.#arr;
  }

  push(...args) {
    this.#arr.push(...args);
    return this.#arr;
  }

  get peek() {
    return this.#isQueue() ? this.#arr[0] : this.#arr.at(-1);
  }

  get poll() {
    return this.#isQueue() ? this.#arr.shift() : this.#arr.pop();
  }

  remove() {
    return this.poll;
  }

  get length() {
    return this.#arr.length;
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  clear() {
    this.#arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  // [1, 2, 3]
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
    // let idx = 0;
    // const arr = this.toArray();
    // return {
    //   next: () => ({
    //     value: arr[idx++],
    //     done: this.length < idx,
    //   }),
    // };

    // let len = this.length;
    // return {
    //   next() {
    //     return {
    //       value: arr[idx++],
    //       done: len < idx,
    //     };
    //   },
    // };
  }

  toArray() {
    return this.#isQueue() ? this.#arr.toReversed() : this.#arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  #isQueue() {
    // console.log('>>', this.constructor.name); // exact-matching
    return this instanceof Queue;
  }
}

class Stack extends Collection {
  pop() {
    // return this.#arr.pop();
    return this._arr.pop();
  }
}

class Queue extends Collection {
  enqueue(...args) {
    this.push(...args);
    return this._arr;
  }

  dequeue() {
    return this._arr.shift();
  }
}

const stack = new Stack();
assert.deepStrictEqual(stack.toArray(), []);
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(), [3]);
stack.pop();
assert.deepStrictEqual(stack.toArray(), []);

stack.push(1, 2, 3);
const itStack = stack[Symbol.iterator]();

for (const s of stack) {
  console.log("s=", s);
}
// console.log('🚀  itStack:', itStack.next());
// console.log('🚀  itStack:', itStack.next());
// console.log('🚀  itStack:', itStack.next());
// console.log('🚀  itStack:', itStack.next());
// console.log('...stack>>', [...stack]);
assert.deepStrictEqual([...stack], stack.toArray().toReversed());

const len = stack.length;
for (let i = 0; i < len; i++) {
  assert.deepStrictEqual(itStack.next(), {
    value: stack.poll,
    done: false,
  });
}
assert.deepStrictEqual(itStack.next(), {
  value: undefined,
  done: true,
});

const stackT = new Stack(...[[1], [2]]);
assert.deepStrictEqual(stackT.toArray(), [[1], [2]]);

// const stack2 = new Stack(1, 2);
const stack2 = new Stack(...[1, 2]);
assert.deepStrictEqual(stack2.toArray(), [1, 2]);
stack2.push(2).push(3); // 추가하기
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 3]);
assert.strictEqual(stack2.pop(), 3);
// assert.deepStrictEqual(stack2.toArray(), [1, 2]);
stack2.push(4, 5); // 추가하기
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 4, 5]);
assert.deepStrictEqual([...stack2], stack2.toArray().toReversed());

assert.strictEqual(stack2.peek, 5);
assert.strictEqual(stack2.poll, 5);
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2, 4]);
assert.strictEqual(stack2.remove(), 4);
assert.deepStrictEqual(stack2.toArray(), [1, 2, 2]);

stack2.arr = [5, 6, 7]; //error
assert.notDeepStrictEqual(stack2.toArray(), [5, 6, 7]);
stack2.print();

stack2.clear();
assert.deepStrictEqual(stack2.toArray(), []);
assert.strictEqual(stack2.isEmpty, true);

//--------------------------------

const queue = new Queue();
assert.deepStrictEqual(queue.toArray(), []);
queue.enqueue(3); // 추가하기
assert.deepStrictEqual(queue.toArray(), [3]);
queue.enqueue(2); // 추가하기
assert.deepStrictEqual(queue.toArray(), [2, 3]);
assert.strictEqual(queue.dequeue(), 3);
assert.deepStrictEqual(queue.toArray(), [2]);
queue.enqueue(5, 6); // 추가하기
assert.deepStrictEqual(queue.toArray(), [6, 5, 2]);
assert.deepStrictEqual([...queue], queue.toArray().toReversed());
queue.print();

assert.strictEqual(queue.peek, 2); // [6, 5, 2] ==>
assert.strictEqual(queue.poll, 2); // [6, 5]
assert.strictEqual(queue.remove(), 5); // [6]
assert.deepStrictEqual(queue.toArray(), [6]);

queue.clear();
assert.deepStrictEqual(queue.toArray(), []);
assert.strictEqual(queue.isEmpty, true);

const queue2 = new Queue(1, 2, 3);
assert.deepStrictEqual(queue2.toArray(), [3, 2, 1]);

const itQueue2 = queue2.iterator();
console.log("🚀  itQueue2:", itQueue2, queue2.peek);
const qlen = queue2.length;
for (let i = 0; i < qlen; i++) {
  assert.deepStrictEqual(itQueue2.next(), {
    value: queue2.poll,
    done: false,
  });
}
assert.deepStrictEqual(itQueue2.next(), {
  value: queue2.poll,
  done: true,
});

const queue3 = new Queue(1, 2, 3, 4);
for (const q of queue3) {
  console.log("q=", q);
}
console.log("-------------", [...queue3]);
let itq = queue3.iterator();
let value, done;
while (({ value, done } = itq.next())) {
  if (done) break;
  console.log("****", value);
}
