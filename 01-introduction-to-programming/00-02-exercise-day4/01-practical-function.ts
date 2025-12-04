/* ------------------------------------ 1 ----------------------------------- */

function getFullName(firstName: string, lastName: string) {
  let fullName = "";
  fullName = firstName + " " + lastName;
  return fullName;
}

console.log(getFullName("Muhammad", "Ichsanudin"));

/* ------------------------------------ 2 ----------------------------------- */
const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email: string) {
  return regex.test(email);
}

console.log(isValidEmail("michsanudin@gmail.com"));

/* ------------------------------------ 3 ----------------------------------- */
function applyDiscount(price: number, discount: number) {
  let total: number = 0;
  const potonganDiscount = price * discount;
  total = price - potonganDiscount;

  return total;
}

console.log(applyDiscount(100, 0.2));
console.log(applyDiscount(250, 0.1));

/* ------------------------------------ 4 ----------------------------------- */
function convertToStringArray(arr: number[]) {
  let arrString: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    arrString.push(arr[i].toString());
  }
  return arrString;
}

console.log(convertToStringArray([1, 2, 3]));

/* ------------------------------------ 5 ----------------------------------- */
function countWords(words: string) {
  //   let length = words.length;
  //   return length;

  let length = 0;
  for (let i = 0; i < words.length; i++) {
    length += 1;
  }
  return length;
}

console.log(countWords("Muhammad Ichsanudin"));

/* ------------------------------------ 6 ----------------------------------- */
function capitalize(kata: string) {
  let kataUpperCase = kata[0].toUpperCase();

  for (let i = 1; i < kata.length; i++) {
    kataUpperCase += kata[i];
  }
  return kataUpperCase;
}

console.log(capitalize("hello"));

/* ------------------------------------ 7 ----------------------------------- */
function isAdult(umur: number) {
  const hasil = umur >= 18 ? true : false;
  return hasil;
}

console.log(isAdult(20));

/* ------------------------------------ 8 ----------------------------------- */
function sumArray(arr: number[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([10, 5, 20]));

/* ------------------------------------ 9 ----------------------------------- */
function getInitials(fullName: string) {
  let initials = "";
  let index = 0;

  for (let i = 0; i < fullName.length; i++) {
    if (index === 0) {
      initials += fullName[i];
      index += 1;
    } else if (fullName[i] === " ") {
      index = 0;
    } else {
      index += 1;
    }
  }
  return initials;
}

console.log(getInitials("Muhammad Ichsanudin"));

/* ----------------------------------- 10 ----------------------------------- */
const arr = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
];

function filterActiveUsers(arr: { name: string; isActive: boolean }[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isActive) {
      return arr[i];
    }
  }
}

console.log(filterActiveUsers(arr));
