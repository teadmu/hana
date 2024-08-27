function loopFiboncci(n) {
  const fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo[n];
}
console.log("🚀 loopFiboncci:", loopFiboncci(15));

function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log("🚀 recursiveFibonacci:", recursiveFibonacci(15));

function memoizedFibonacci1(n) {
  if (n === 0) return 0;
  const memo = [0, 1];
  return (
    memo[n] || (memo[n] = memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1))
  );
}

function memoizedFibonacci(fn) {
  const memo = {};
  return function (k) {
    return memo[k] ?? (memo[k] = fn(k));
  };
}

const fibo = memoizedFibonacci(function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 2) + fibo(n - 1);
});

console.log("🚀 fibo:", fibo(5));
//console.log("🚀  memoizedFibonacci:", memoizedFibonacci1(15));

function memoized(fn) {
  // 범용 memoized function
  const memoizedTable = {}; // {3: 3 * 2, 2: 2 * 1, 1: 1}
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFactorial = memoized(function A(n) {
  memoizedFactorialRunCnt += 1;
  if (n === 1) return 1;
  return n + memoizedFactorial(n - 1);
});

console.log(memoizedFactorial(10000));
