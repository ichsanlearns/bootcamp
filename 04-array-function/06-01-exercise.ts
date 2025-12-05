/* ------------------------------------ 1 ----------------------------------- */

const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

let hasil: { lowest: number; highest: number; average: number } = {
  lowest: 0,
  highest: 0,
  average: 0,
};

function lowestHighestAverage(arr: number[]) {
  let sort = arr.sort((a, b) => a - b);
  console.log(sort);

  hasil.lowest = sort[0];
  hasil.highest = sort[sort.length - 1];

  let acc: number = 0;
  let total: number = 0;

  for (let i = 0; i < sort.length; i++) {
    acc = sort[i];
    total = total + acc;
  }
  hasil.average = total / sort.length;

  return hasil;
}

console.log(lowestHighestAverage(arr));

/* ------------------------------------ 2 ----------------------------------- */
function concatWords(arr: string[]) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];

  const allExceptLast = arr.slice(0, -1).join(",");
  const lastWord = arr[arr.length - 1];

  return `${allExceptLast}, and ${lastWord}`;
}

console.log(concatWords(["apple", "banana", "cherry", "date"]));

/* ------------------------------------ 3 ----------------------------------- */
const number: number[] = [5, 3, 1, 7, 2, 6];
let kedua: number = 0;

function secondSmallest(arr: number[]) {
  kedua = arr.sort()[1];
  return kedua;
}

console.log(secondSmallest(number));

/* ------------------------------------ 4 ----------------------------------- */
function sumArrays(arr1: number[], arr2: number[]) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}

console.log(sumArrays([4, 4, 4], [3, 3, 2]));

/* ------------------------------------ 5 ----------------------------------- */
function addElements(arr: number[], tambah: number) {
  arr.push(tambah);

  return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(addElements([1, 2, 3, 4], 4));

/* ------------------------------------ 1 ----------------------------------- */
{
  const arr: number[] = [12, 5, 23, 18, 4, 45, 32];
  let acc: number = 0;
  let curr: number = 0;

  let hasil: { lowest: number; highest: number; average: number } = {
    lowest: 0,
    highest: 0,
    average: 0,
  };

  function lowestHighestAverage(arr: number[]) {
    // manual
    for (let i = 0; i < arr.length; i++) {
      acc = arr[i];
      curr = arr[i + 1];

      if (arr < curr) {
        acc = curr;
      } else {
        acc = acc;
      }
    }

    let sort = arr.sort((a, b) => a - b);

    console.log(sort);

    hasil.lowest = sort[0];
    hasil.highest = sort[sort.length - 1];

    let total: number = 0;

    for (let i = 0; i < sort.length; i++) {
      total = total + sort[i];
    }
    hasil.average = total / sort.length;

    return hasil;
  }

  console.log(lowestHighestAverage(arr));
}
