let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

function addTo100(n) {
  if (n === 100) return n;
  return n + addTo100(n + 1);
}

console.log(addTo100(1));

function addTo100TCO(a, sum = 0) {
  if (a == 100) return sum + 100;
  return addTo100TCO(a + 1, (sum += a));
}
console.log("🚀 ~ addTo100TCO:", addTo100TCO(1));

function makeArray(n) {
  if (n === 0) return [];
  const [...arr] = makeArray(n - 1);
  return [...arr, n];
}

console.log(makeArray(5));

function makeArrayTCO(n, arr = []) {
  if (n === 0) return [...arr];
  const tmp = [n, ...arr];
  return makeArrayTCO(n - 1, tmp);
}

console.log(makeArrayTCO(5));

function makeReverseArray(n) {
  if (n == 0) return [];
  const [...arr] = makeReverseArray(n - 1);
  return [n, ...arr];
}
console.log(makeReverseArray(5));
