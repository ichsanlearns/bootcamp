// "use strict";

// 1. this di dalam object
const car = {
  brand: "Toyota",
  color: "blue",
  printCarData: function () {
    return `Mobilku adalah ${this.brand} dan warnanaya ${this.color}`;
  },
  printThis() {
    return this;
  },
};

console.log(car.printCarData());
console.log(car.printThis());

// 2. this alone
this;
console.log(this);

// 3. this inside regular function
function printThisFunc() {
  return this;
}

console.log(printThisFunc());
