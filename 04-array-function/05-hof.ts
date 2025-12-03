/* -------------------------- Higher Order Function ------------------------- */
/*
HOF adalah sebuah fungsi yang:
1. Menerima sebuah fungsi lain sebagai argument-nya
2. Me-return fungsi lain
3. Both
*/

function sayHello() {
  console.log("Helloooo");
}

function doTwice(action: () => void) {
  action();
  action();
}

doTwice(sayHello);

/*
doTwice(sayHello);

function doTwice(sayHello){
    sayHello();
    sayHello();
}

function sayHello(){
    console.log("Helloooo");
}

*/

/* --------------------------------- Example -------------------------------- */
function add1(num: number) {
  return num + 1;
}
console.log(add1(10));

function add2(num: number) {
  return num + 2;
}
console.log(add2(10));

function add3(num: number) {
  return num + 3;
}
console.log(add3(10));

// -

function makeAdder(x: number) {
  return function (y: number) {
    return x + y;
  };
}

const add4 = makeAdder(4);
/*
const add4 = function (y: number) {
    return 4 + y;
}
add4(10) = function (10){
    return 4 + 10;
}
*/
const add5 = makeAdder(5);
const add6 = makeAdder(6);

console.log(add4(10));
console.log(add5(10));
console.log(add6(10));
