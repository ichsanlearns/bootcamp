let score1 = 10;
let score2 = score1;

console.log(score1);
console.log(score2);

/* -------------------------------------------------------------------------- */
/*                                Pass By Value                               */
/* -------------------------------------------------------------------------- */
// Yang dikirim adalah SALINAN-nya
// Perubahan yang dilakukan di variable salinan, tidak akan mempengaruhi variable asli
// Primitive Data Type

let points1 = 100;
let points2 = points1;

console.log(points1);
console.log(points2);

points2 = 50;
console.log(points1);
console.log(points2);

/* -------------------------------------------------------------------------- */
/*                              Pass By Reference                             */
/* -------------------------------------------------------------------------- */
let people1 = { name: "John", age: 70 };
let people2 = people1;

console.log(people1);
console.log(people2);

people2.name = "Angel";

console.log(people1);
console.log(people2);
