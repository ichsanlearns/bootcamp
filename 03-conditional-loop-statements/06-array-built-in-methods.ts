/* --------------------------------- filter --------------------------------- */
const points = [50, 500, 100];
const pointsMoreThan100 = points.filter(function (element) {
  return element > 75;
});

console.log(pointsMoreThan100);

/* ---------------------------------- slice --------------------------------- */
const favFruits = ["Apple", "Banana", "Grape", "Watermelon", "Cherry"];
const sliceresult = favFruits.slice(1, 4);
console.log(sliceresult);

/* --------------------------------- splice --------------------------------- */
const favFoods = ["Satay", "Seblak", "Nasi Gonjleng", "Gudeg", "Chicken"];
const spliceResult = favFoods.splice(1, 3);
console.log(favFoods);
console.log(spliceResult);
