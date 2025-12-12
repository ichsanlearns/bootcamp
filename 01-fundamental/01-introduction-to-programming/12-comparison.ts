/* ----------------------------------- == ----------------------------------- */
// loose equals | double equal
// Memeriksa kesetaraan value kanan dengan value kiri
// JS mencoba menyamakan tipe data kedua value-nya
console.log(10 == 100);
console.log(10 == 10);
console.log(null == 100);
console.log("1" == 1);

// URUTAN PERUBAHAN TYPE DATA DI DOKUMENTASI JS
/* ----------------------------------- === ---------------------------------- */
// strict equal | triple equal== 1
// Memeriksa kesetaraan value kanan dengan value kiri
// JS tidak akan mencoba menyamakan tipe data kedua value-nya
console.log("1" === 1);
console.log(+"1" === 1);

/* ----------------------------------- != ----------------------------------- */
console.log(10 != 10);
console.log(1 != 10);

/* ----------------------------------- !== ---------------------------------- */
console.log(10 !== 10);
console.log(10 !== "10");

/* ------------------------------------ > ----------------------------------- */
// greater than
console.log(10 > 5);
console.log(10 > 10);

/* ----------------------------------- >= ----------------------------------- */
// greater than or equal
console.log(10 >= 5);
console.log(10 >= 10);

/* ------------------------------------ < ----------------------------------- */
// less than
console.log(10 < 50);
console.log(10 < 10);

/* ----------------------------------- <= ----------------------------------- */
// less than or equal
console.log(10 <= 50);
console.log(10 <= 10);
