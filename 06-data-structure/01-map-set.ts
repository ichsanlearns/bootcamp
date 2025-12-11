/* -------------------------------------------------------------------------- */
/*                                Object vs Map                               */
/* -------------------------------------------------------------------------- */
/* --------------------------------- Object --------------------------------- */
const objStudentsScore = { anis: 50, andi: 80, budi: 75 };
// @ts-ignore
console.log(objStudentsScore.length);
console.log(Object.keys(objStudentsScore));

/* ----------------------------------- Map ---------------------------------- */
const mapStudentsScore = new Map();
mapStudentsScore.set("anis", 50);
mapStudentsScore.set("andi", 80);
mapStudentsScore.set("budi", 75);

mapStudentsScore.delete("andi");

console.log(mapStudentsScore.get("anis"));

console.log(mapStudentsScore);
console.log(mapStudentsScore.size);

/* -------------------------------------------------------------------------- */
/*                                Set vs Array                                */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- Array --------------------------------- */
const fruits = ["apple", "banana", "grape", "apple"];
console.log(fruits);

/* ----------------------------------- Set ---------------------------------- */
const setFruits = new Set(["apple", "banana", "grape", "apple"]);
console.log(setFruits);

setFruits.add("grape");
setFruits.add("grape");
setFruits.add("grape");
setFruits.add("watermelon");

console.log(setFruits);

setFruits.delete("apple");

console.log(setFruits);
console.log(setFruits.size);

setFruits.clear();

console.log(setFruits);
console.log(setFruits.size);
