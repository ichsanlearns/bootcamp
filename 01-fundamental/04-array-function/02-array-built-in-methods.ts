/* ---------------------------------- slice --------------------------------- */
const favFruits = ["Apple", "Banana", "Grape", "Watermelon", "Cherry"];
const sliceresult = favFruits.slice(1, 4);
console.log(sliceresult);

/* --------------------------------- splice --------------------------------- */
const favFoods = ["Satay", "Seblak", "Nasi Gonjleng", "Gudeg", "Chicken"];
const spliceResult = favFoods.splice(1, 3);
console.log(favFoods);
console.log(spliceResult);

/* --------------------------------- filter 1 --------------------------------- */
const points = [50, 500, 100];
const pointsMoreThan100 = points.filter(function (element) {
  return element > 75;
});

console.log(pointsMoreThan100);

/* -------------------------------- filter 2 -------------------------------- */
// 1. me-loop array yang difilter
// 2. di setiap loop-nya dia akan menjalankan argumen-nya/callback-nya
// 3. kalau hasil callback === true. element akan disimpan lagi
// 4. kalau hasil callback === false. element akan dibuang
// 5. setelah loop selesai. filter akan membuat array baru dengan element yang disimpan lagi

const scores = [75, 45, 35];
const scoresMoreThan40 = scores.filter((value, index) => value > 40);
console.log(scoresMoreThan40);

/*
Loop 1
1. value = 75
2. index = 0
3. () => {} = true
4. [75]

Loop 2
1. value = 45
2. index = 1
3. () => {} = true
4. [75, 45]

Loop 3
1. value = 35
2. index = 2
3. () => {} = false
4. [75, 45]
*/

const studentsName = [
  "Andhika",
  "Putri",
  "Khansa",
  "Angel",
  "Ryan",
  "Bagas",
  "anjasmara",
];
console.log("October".startsWith("O"));
const nameStartWithAOrK = studentsName.filter(
  (name) =>
    name.toUpperCase().startsWith("A") || name.toUpperCase().startsWith("K")
);
console.log(nameStartWithAOrK);

/* ----------------------------------- map ---------------------------------- */
const rapors = [85, 90, 100];
const raportsWithBonus = rapors.map((value) => {
  const result = value + 10;

  if (result >= 100) {
    return 100;
  } else {
    return result;
  }
});
console.log(raportsWithBonus);

/*
Loop 1
1. value = 85
2. () => {} = 85 + 10 = 95
3. [95]

Loop 2
1. value = 90
2. () => {} = 90 + 10 = 100
3. [95, 100]

Loop 3
1. value = 100
2. () => {} = 100 + 10 = 110
3. [95, 100, 110]
*/

/* --------------------------------- reduce --------------------------------- */
const values = [5, 10, 25];
const valuesTotal = values.reduce((prev, curr) => prev + curr, 0);
console.log(valuesTotal);

/*
Loop 1
1. prev = 0
2. curr = 5
3. prev + curr = 5

Loop 2
1. prev = 2
2. curr = 10
3. prev + curr = 15

Loop 3
1. prev = 15
2. curr = 25
3. prev + curr = 40
*/

/* ---------------------------------- sort ---------------------------------- */
const ages = [25, 2, 10];
const sortedAges = ages.sort((a, b) => a - b);

console.log(sortedAges);

/*
Loop 1
1. a = 25
2. b = 2
3. a - b = 25 - 2 = 23 (positive)
4. before: [25, 2, 10]. after: [2, 25, 10]

Loop 2
1. a = 25
2. b = 10
3. a - b = 25 - 10 = 15 (positive)
4. before: [2, 25, 10]. after: [2, 10, 25]
*/
