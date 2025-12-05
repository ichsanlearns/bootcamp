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
