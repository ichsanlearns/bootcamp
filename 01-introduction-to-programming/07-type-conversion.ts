/* ---------------------------- String Conversion --------------------------- */
console.log(String(10));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));

/* ---------------------------- Number Conversion --------------------------- */
console.log(Number("10"));
console.log(Number("10ABC"));
console.log(Number(false));
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

console.log(parseInt("10ABC"));
console.log(parseInt("10ABC1000"));

/* --------------------------- Boolean Conversion --------------------------- */
console.log(Boolean("a"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-0));
console.log(Boolean(-10));

// falsy => Value yang ketika diubah menjadi boolean, nilainya false
// bernilai false
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// truthy
// bernilai true
// semua kecuali yang diatas
