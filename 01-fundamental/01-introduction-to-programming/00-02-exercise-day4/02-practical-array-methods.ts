/* ------------------------------------ 1 ----------------------------------- */
const products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Book", price: 50 },
];

function getProductNames(arr: { name: string; price: number }[]) {
  return arr.map((product) => product.name);
}

console.log(getProductNames(products));

/* ------------------------------------ 2 ----------------------------------- */

function filterExpensive(arr: { name: string; price: number }[]) {
  return arr.filter((product) => product.price > 1000);
}

console.log(filterExpensive(products));

/* ------------------------------------ 3 ----------------------------------- */
const user = [
  { name: "A", email: "a@mail.com" },
  { name: "B", email: "b@email.com" },
];
function findUserByEmail(
  arr: { name: string; email: string }[],
  search: string
) {
  return arr.find((userData) => userData.email === search);
}

console.log(findUserByEmail(user, "b@email.com"));

/* ------------------------------------ 4 ----------------------------------- */
const taskData = [
  { task: "A", completed: false },
  { task: "B", completed: true },
];

function hasCompletedTask(arr: { task: string; completed: boolean }[]) {
  return arr.some((data) => data.completed === true);
}

console.log(hasCompletedTask(taskData));

/* ------------------------------------ 5 ----------------------------------- */
function allPassed(arr: number[]) {
  return arr.every((nilai) => nilai >= 70);
}

console.log(allPassed([80, 90, 70]));

/* ------------------------------------ 6 ----------------------------------- */
function getTotalPrice(arr: { name: string; price: number }[]) {
  return arr.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(
  getTotalPrice([
    { name: "Shoes", price: 50 },
    { name: "Bag", price: 70 },
  ])
);

/* ------------------------------------ 7 ----------------------------------- */
function sortByAge(arr: { name: string; age: number }[]) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(
  sortByAge([
    { name: "A", age: 30 },
    { name: "B", age: 20 },
  ])
);

/* ------------------------------------ 8 ----------------------------------- */
function removeFalsey(arr: any[]) {
  return arr.filter((benar) => Boolean(benar));
}

console.log(removeFalsey([0, 1, "", "TS", null, 5]));

/* ------------------------------------ 9 ----------------------------------- */
function toUpperNames(arr: string[]) {
  return arr.map((string) => string.toUpperCase());
}

console.log(toUpperNames(["nadhif", "fuadi"]));

/* ----------------------------------- 10 ----------------------------------- */
function uniqueValues(arr: number[]) {
  return arr.filter((nilai, index) => arr.indexOf(nilai) === index);
}

console.log(uniqueValues([1, 1, 2, 3, 3]));

/* ----------------------------------- 11 ----------------------------------- */
function containsValue(arrBuah: string[], buah: string) {
  return arrBuah.includes(buah);
}
console.log(containsValue(["apple", "banana"], "banana"));

/* ----------------------------------- 12 ----------------------------------- */
function countCompleted(arr: { title: string; done: boolean }[]) {
  return arr.filter((arr) => arr.done === true).length;
}

console.log(
  countCompleted([
    { title: "A", done: true },
    { title: "B", done: false },
    { title: "C", done: true },
  ])
);

/* ----------------------------------- 13 ----------------------------------- */
function getEmails(arr: { name: string; email: string }[]) {
  return arr.map((data) => data.email);
}

console.log(
  getEmails([
    { name: "A", email: "a@mail.com" },
    { name: "B", email: "b@mail.com" },
  ])
);

/* ----------------------------------- 14 ----------------------------------- */
function flattenArray(arr: (number | number[])[]) {
  return arr.flat(1);
}
console.log(flattenArray([1, [2, 3], 4]));

/* ----------------------------------- 15 ----------------------------------- */
function groupEvenOdd(arr: number[]) {
  let evenOdd: { even: number[]; odd: number[] } = { even: [], odd: [] };

  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      evenOdd.even.push(curr);
    } else {
      evenOdd.odd.push(curr);
    }
    return evenOdd;
  });
}

console.log(groupEvenOdd([0, 1, 2, 3, 4, 5]));
