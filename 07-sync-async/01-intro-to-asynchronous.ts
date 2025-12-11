let intervalCounter = 0;
const intervalId = setInterval(() => {
  intervalCounter++;
  console.log(0);
  if (intervalCounter === 5) {
    clearInterval(intervalId);
  }
}, 2000);

console.log(1);
console.log(2);
setTimeout(() => console.log(3), 5000);

setTimeout(() => console.log(4), 0);

console.log(5);
console.log(6);
