const currentTime = new Date();
console.log(currentTime);

console.log(new Date("2025-05-13"));
// dalam milisecond
console.log(new Date(1000));

/* ----------------------------------- get ---------------------------------- */
const today = new Date();
console.log(today.getTime());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

/* ----------------------------------- set ---------------------------------- */
const currentDay = new Date();
console.log(currentDay);

currentDay.setDate(1);

console.log(currentDay);
