var sum = 0;
for (let i = 1; i <= 100; i += 1) {
  sum = sum + i;
}
console.log("🚀 for ~ sum:", sum);

sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i += 1;
}
console.log("🚀 while ~ sum:", sum);

sum = 0;
i = 0;
do {
  i += 1;
  sum += i;
} while (i < 100);
console.log("🚀 do-while ~ sum:", sum);

let x = 3;
const alpha = ["one", "two", "three"];
console.log(alpha[x] || "else");

for (let i = 0; i < 5; console.log(i++)) console.log("block");
