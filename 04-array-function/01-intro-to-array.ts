import { randomUUID } from "crypto";

// Array - Kumpuan data yang memiliki urutan
const arrayOfNumbers: number[] = [1, 2, 3, 40, 50, 60];
const arrayOfStrings: string[] = ["A", "B", "C", "D"];
const randomArray: string | number | null | undefined | boolean = [
  "A",
  1,
  null,
  undefined,
  true,
];
const arrayRandom: any[] = ["a", 2, null, undefined, false, []];
const arrayMultipleDimension: (number | number[])[] = [1, 2, 3, [2, 4, 5]];

const array1: [] = [];
const array2: any[] = new Array();
console.log(array1);
console.log(array2);

/* ------------------- Cara Mengakses Data Di Dalam Array ------------------- */
const students = ["Andhika", "Malika", "Bango", "Budiman"];
console.log(students);
console.log(students[0]);
console.log(students[3]);

const multiDimensionArray = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]];
console.log(multiDimensionArray[1]);
console.log(multiDimensionArray[3][3][2]);

/* ---------------- Cara Update Value Element di Dalam Array ---------------- */
const employees = ["Pimpie", "Devina", "Nadine", "Malik", "Cipuy", "Khrisna"];
console.log(employees);
console.log(employees[4]);

employees[4] = "Zahra";
console.log(employees);
console.log(employees[4]);

/* ---------------------- Cara Memeriksa Panjang Array ---------------------- */
const randomString = ["a", "b", "z", "d", "c", "q", "z"];
console.log(randomString.length);

/* ----------- Cara Menambah dan Mengurangi Element di Dalam Array ---------- */
const randomNumber = [1, 2, 40, 50, 60, 1000, 2000, 3000];
console.log(randomNumber);

// AKHIR
// .push => menambah di paling akhir
randomNumber.push(0.5);
console.log(randomNumber);

// .pop => mengurangi di paling akhir
randomNumber.pop();
console.log(randomNumber);

// AWAL
// .unshift => menambah di paling awal
randomNumber.unshift(95);
console.log(randomNumber);

// .shift => mengurangi di paling awal
randomNumber.shift();
console.log(randomNumber);

/* ----------------------------- Iterating Array ---------------------------- */
const favoriteSongs = ["December", "33x", "Cincin", "Indonesia Raya", "So Asu"];

console.log(favoriteSongs[0]);
console.log(favoriteSongs[1]);
console.log(favoriteSongs[2]);
console.log(favoriteSongs[3]);
console.log(favoriteSongs[4]);

// 1. for loop
for (let i = 0; i < favoriteSongs.length; i++) {
  console.log(favoriteSongs[i]);
}

// 2. for of loop
for (const x of favoriteSongs) {
  console.log(x);
}

// Loop 1
// x = favoriteSongs[0]

// Loop 2
// x = favoriteSongs[1]

// 3. for in loop
for (const x in favoriteSongs) {
  console.log(x);
}
