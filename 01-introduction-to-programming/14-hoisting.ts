// Syarat mengakses variable
// CONST & LET
// 1. Variable/value harus sudah dibuat dulu sebelum diakses
// 2. Variable/value hanya bisa diakses didalam scope yang sama atau scope yang lebih dalam

// var
// 1. Variable/value bisa diakses bahkan sebelum variablenya dibuat, hanya saja nilanya masih undefined
// 2. Variable/value bisa diakses dari scope manapun

console.log(length);
console.log(length);
console.log(length);

var length = 1000;
console.log(length);
