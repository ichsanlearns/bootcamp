{
  // Math operators: +, -, *, /, **, %
  // Comparison operators: ===, ==, >=, <=
  // DARI KANANNNN

  /* -------------------------------------------------------------------------- */
  /*                              Logical Operator                              */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- AND - && -------------------------------- */
  // true && true => true
  // true && false => false
  // false && true => false
  // false && false => false

  const favoriteParty = "Golkar";
  const favoriteFruit = "Banana";

  if (favoriteParty === "Golkar" && favoriteFruit === "Banana") {
    console.log("Kuning");
  }
}

/* --------------------------------- OR - || -------------------------------- */
// true || true => true
// true || false => true
// false || true => true
// false || false => false

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 > 5 || 5 < 0);
console.log(10 < 5 || 5 < 0);

console.log(10 > 5 || (5 > 10 && "A" === "a"));

/* ------------------------------- NEGASI/NOT - ! ------------------------------- */
console.log(!10 > 5);
console.log(!10 < 5);

console.log(Boolean("abc"));
console.log(!"abc");

/* ------------------------- SHORT CIRCUIT AND - && ------------------------- */
// 1. Ambil nilai falsy
// 2. Kalau dua-duanya truthy, ambil truthy terahir
// 3. Kalau dua-duanya falsy, ambil falsy pertama
console.log("abc" && "def");
console.log("abc" && -0);
console.log("" && "def");
console.log("" && 0);

/* -------------------------- SHORT CIRCUIT OR - || ------------------------- */
// Kebalikan short circuit AND
// 1. Ambil nilai truthy
// 2. Kalau dua-duanya truthy, ambil truthy pertama
// 3. Kalau dua-duanya falsy, ambil falsy terakhir
console.log("abc" || "def");
console.log("abc" || -0);
console.log("" || "def");
console.log("" || 0);
