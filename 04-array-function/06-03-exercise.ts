/* ------------------------------------ 2 ----------------------------------- */
let arr: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumDuplicate(arr: number[]) {
  let total: number = 0;
  let duplicate: number = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let y = 1; y < arr.length - 1; y++) {
      if (arr[i] === arr[y]) {
        duplicate = arr[i];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === duplicate) {
      total += arr[i];
    }
  }
  console.log(total);

  return total;
}

console.log(sumDuplicate(arr));
