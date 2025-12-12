/* ------------------------------------ 1 ----------------------------------- */
const mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2];

function sumAllNumber(arr: any[]) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i]);

    if (typeof arr[i] === "number") {
      total += arr[i];
    }
  }
  return total;
}

console.log(sumAllNumber(mixedArray));

/* ------------------------------------ 2 ----------------------------------- */
function insertWithMaxSize(maxSize: number, ...numbers: number[]) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (result.length === maxSize) {
      break;
    }

    result.push(numbers[i]);
  }

  return result;
}

console.log(insertWithMaxSize(5, 5, 10, 24, 3, 6, 7, 8));

/* ------------------------------------ 3 ----------------------------------- */
{
  const arr1: number[] = [1, 2, 3];
  const arr2: number[] = [4, 5, 6];

  function combine(arr: number[], arr2: number[]) {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  }

  console.log(combine(arr1, arr2));

  /* ------------------------------------ 4 ----------------------------------- */
  function findDuplicates(arr: number[]) {
    const duplicates: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      let count = 0;

      //hitung berapa kali arr[i] muncul
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }

      if (count > 1 && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }

    return duplicates;
  }

  console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5]));
}
/* ------------------------------------ 5 ----------------------------------- */
{
  const arr1: number[] = [1, 2, 3, 4, 5];
  const arr2: number[] = [3, 4, 5, 6, 7];
  const arrHasil: number[] = [];

  function difference(arr: number[], arr2: number[]) {
    for (let i = 0; i < arr1.length; i++) {
      for (let y = 0; i < arr1.length; i++) {
        if (arr[i] === arr2[y]) {
          break;
        } else {
          arrHasil.push(arr[i]);
        }
      }

      for (let z = 0; i < arr2.length; i++) {
        if (arr2[i] === arr[z]) {
          break;
        } else {
          arrHasil.push(arr2[i]);
        }
      }
    }
    return arrHasil;
  }

  console.log(difference(arr1, arr2));
}
