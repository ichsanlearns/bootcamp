/* -------------------------------------------------------------------------- */
/*                               Basic Function                               */
/* -------------------------------------------------------------------------- */
/*
function functionName(){return}
functionName => nama fungsi
function => keyword untuk membuat fungsi
() => tempat menaruh parameter
{} => tempat menaruh kode yang akan  dijalankan ketika fungsi dipanggil
return => keyword untuk menentukan hasil sebuah fungsi

functionName() => cara memanggil sebuah fungsi
*/

function sayHello() {
  1 + 1;
  const name = "John";

  return "Heloooo";
}

console.log(sayHello());

/* -------------------------------- Example 1 ------------------------------- */
const itemPrice1 = 1_000_000;
const discountRate1 = 50 / 100;
const discountPrice1 = itemPrice1 * discountRate1;
const finalPrice1 = itemPrice1 - discountPrice1;
console.log(finalPrice1);

const itemPrice2 = 100_000;
const discountRate2 = 25 / 100;
const discountPrice2 = itemPrice2 * discountRate2;
const finalPrice2 = itemPrice2 - discountPrice2;
console.log(finalPrice2);

function calculateFinalPrice(itemPrice: number, discountRate: number) {
  const discountPrice = itemPrice * discountRate;
  const finalPrice = itemPrice - discountPrice;
  return finalPrice;
}

const finalPrice3 = calculateFinalPrice(1000, 10 / 100);
console.log(finalPrice3);

const finalPrice4 = calculateFinalPrice(1_000_000, 0.25);
console.log(finalPrice4);

const finalPrice5 = calculateFinalPrice(500, 0);
console.log(finalPrice5);

/* ------------------------- Parameters & Arguments ------------------------- */
/*
1. Parameter
function functionName(parameterName1, parameterName2, ..., parameterNameN){}

2. Arguments
functionName(argument1, argument2, ..., argumentN)
*/

function greet(name: string) {
  return `Hello, ${name}`;
}

console.log(greet("Fajar"));
console.log(greet("Ichsan"));
console.log(greet("Joko"));
console.log(greet("Budi"));

/* --------------- Function Declaration vs Function Expression -------------- */
// Function Declaration akan dihoist sedangkan Function Expression tidak akan

console.log(addWith10(2));
// console.log(multiplyWith10(3));

// 1. Declaration
function addWith10(num: number) {
  return num + 10;
}
console.log(addWith10(10));

// 2. Expression
const multiplyWith10 = function (num: number) {
  return num * 10;
};
console.log(multiplyWith10(5));

/* ---------------------------- Default Parameter --------------------------- */
function squareRoot(num: number = 81) {
  return Math.sqrt(num);
}
console.log(squareRoot(16));
console.log(squareRoot(25));
console.log(squareRoot(935));
console.log(squareRoot());

/* ----------------------------- Rest Parameter ----------------------------- */
function addAllParams(...num: number[]) {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
}
console.log(addAllParams(10, 20, 30));
console.log(addAllParams(10, 20, 30, 40, 50));
console.log(addAllParams(10, 20));
