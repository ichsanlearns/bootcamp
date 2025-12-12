let age = 20;

// age = age + 5;
age += 5;
console.log(age);

// age = age - 10;
age -= 10;
console.log(age);

// age = age * 10;
age *= 10;
console.log(age);

// age = age ** 3;
age **= 3;
console.log(age);

// age = age / 8;
age /= 8;
console.log(age);

/* -------------------------- Increment & Decrement ------------------------- */
let score = 10;

// score = score + 1;
// score += 1;
score++;
console.log(score);

// score = score - 1;
// score -= 1;
score--;
console.log(score);

/* ---------------------------- Postfix & Prefix ---------------------------- */
let point = 50;
point++; // Postfix
console.log(point);

let value = 50;
++value; // Prefix
console.log(value);

let height = 100;
let width = 100;

// Postfix
console.log(height++);
// Dijalankan setelahnya
console.log(height);

// Prefix
console.log(++width);
// Dijalankan dari awal
console.log(width);

// let height1 = height++;
// let width1 = ++width;

// console.log(height1);
// console.log(width1);
