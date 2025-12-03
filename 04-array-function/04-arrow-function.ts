// 1.
const functionName1 = function () {
  return "Hi";
};
console.log(functionName1());

// 2.
const functionName2 = () => {
  return "Hi";
};
console.log(functionName2());

// 3.
const functionName3 = () => "Hi";
console.log(functionName3());

/* --------------------------------- Example -------------------------------- */
const calculateSquareArea1 = (side: number) => {
  const result = side * side;
  return result;
};
console.log(calculateSquareArea1(10));

const calculateSquareArea2 = (side: number) => side * side;
console.log(calculateSquareArea2(10));

const calculateCircleArea = (radius: number) => Math.PI * radius ** 2;
console.log(calculateCircleArea(5));
