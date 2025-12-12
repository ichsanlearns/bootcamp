/* ------------------------------ Array Spread ------------------------------ */
// 1. Copy Reference
const arrayOfNums1 = [10, 20, 30];
const arrayOfNums2 = arrayOfNums1;

console.log(arrayOfNums1);
console.log(arrayOfNums2);

arrayOfNums2[1] = 5;

console.log(arrayOfNums1);
console.log(arrayOfNums2);

// 2. Cara Copy Manual
const arrayOfStrings1 = ["A", "B", "C"];
const arrayOfStrings2 = [
  arrayOfStrings1[0],
  arrayOfStrings1[1],
  arrayOfStrings1[2],
];

console.log(arrayOfStrings1);
console.log(arrayOfStrings2);

arrayOfStrings2[2] = "D";

console.log(arrayOfStrings1);
console.log(arrayOfStrings2);

// 3. Cara copy with spread
const scores1 = [100, 200, 300];
const scores2 = [...scores1];

console.log(scores1);
console.log(scores2);

scores2[1] = 0;

console.log(scores1);
console.log(scores2);

/* ------------------------------ Object Spread ----------------------------- */
// 1.
const peopleData = { name: "John", age: 10 };
const newPeopleData = peopleData;

console.log(peopleData);
console.log(newPeopleData);

newPeopleData.name = "Joseph";

console.log(peopleData);
console.log(newPeopleData);

// 2.

const personData = { name: "John", age: 10 };
console.log(personData);

const newPersonData = { name: personData.name, age: personData.age };
console.log(newPersonData);

// 3.
const humanData = { name: "John, age: 10" };
console.log(humanData);

const newHumanData = { ...humanData };
console.log(newHumanData);
