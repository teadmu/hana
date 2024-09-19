import assert from "assert";
const arr = [1, 2, 3, 4];
const n = arr.map((v, i) => v);
console.log(n);
const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const deptMap = new Map(depts.map((dept) => [dept.id, dept])); // deptMap.set(team.id, team)
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];
const empMap = new Map(emps.map((emp) => [emp.id, emp]));
console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

console.log("------------------");
const empDept = new Map(
  // [...empMap.values()].map(emp => [emp, deptMap.get(emp.dept)])
  // [...empMap.values()].map(({ id, name, dept }) => [
  //   { id, name },
  //   deptMap.get(dept),
  // ]);
  [...empMap.values()].map((emp) => {
    const { dept } = emp;
    delete emp.dept;
    return [emp, deptMap.get(dept)];
  })
);

console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
assert.deepStrictEqual(
  [...empDept.keys()],
  emps.map(({ id, name }) => ({ id, name }))
);

// console.log(empDept.get(kim)); // '개발팀'
assert.strictEqual(empDept.get(hong)?.dname, hrTeam.dname);
assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

console.log("---------------------");
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
const r = [...empDept]
  .filter(([emp, dept]) => dept.id === devTeam.id)
  .map(([emp]) => emp.name);
// console.log('🚀  r:', r);
assert.deepStrictEqual(r, ["Kim", "Park", "Choi"]);

// http.../api/emps/:empId
function getEmp(empId) {
  // {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
  // const emp = [...empDept.keys()].find(emp => emp.id === empId)
  const emp = empMap.get(empId);
  return { ...emp, dept: empDept.get(emp) };
}

assert.deepStrictEqual(getEmp(1), {
  id: 1,
  name: "Hong",
  dept: { id: 1, dname: "인사팀" },
});
