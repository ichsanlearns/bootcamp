/* -------------------------------------------------------------------------- */
/*                                    KELAS                                   */
/* -------------------------------------------------------------------------- */
/* ------------------------------------ 1 ----------------------------------- */
const number = 11;

if (number % 2 !== 0) {
  console.log("Odd");
} else {
  console.log("Even");
}

/* ------------------------------------ 2 ----------------------------------- */
const number2 = 17;
let bPrima = true;

if (number2 <= 1) {
  bPrima = false;
} else {
  for (let i = 2; i < number2; i++) {
    if (number2 % i === 0) {
      bPrima = false;
      break;
    }
  }
}
if (bPrima === true) {
  console.log("Bilangan Prima");
} else {
  console.log("Bukan Bilangan Prima");
}

/* ------------------------------------ 3 ----------------------------------- */
const N = 5;
let total = 0;

for (let i = 0; i < N; i++) {
  let nilai = 0;
  nilai = i + 1;
  total += nilai;
  console.log(nilai);
}
console.log(total);

/* ------------------------------------ 4 ----------------------------------- */
const factorial = 5;
let hitung = 1;

for (let i = factorial; i > 0; i--) {
  hitung *= i;
  console.log(hitung);
}

console.log(hitung);

/* ------------------------------------ 5 ----------------------------------- */
const fibonacci = 15;
let hitung2 = 0;
let hitung3 = 1;
let tFibonacci = 0;

for (let i = 1; i < fibonacci; i++) {
  tFibonacci = hitung2 + hitung3;

  console.log(`${tFibonacci}`);

  hitung2 = hitung3;
  hitung3 = tFibonacci;
}
console.log(tFibonacci);
