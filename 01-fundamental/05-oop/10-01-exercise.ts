function converExcelAlphabet(cell: string) {
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let tempA: string = "";
  let count: number = 0;
  let ketemu: boolean = false;
  let output: number = 0;
  let hurufKedua = "";

  if (cell.length === 1) {
    while (!ketemu) {
      if (tempA === cell) {
        ketemu = true;
        output = count;
      } else {
        tempA = alphabet[count];
        count++;
      }
    }
  } else if (cell.length === 2) {
    output = 26;
    hurufKedua = cell[1];
    while (!ketemu) {
      if (tempA === hurufKedua) {
        ketemu = true;
      } else {
        tempA = alphabet[count];
        count++;
        output++;
      }
    }
  }
  return output;
}

console.log(converExcelAlphabet("AZ"));

/* ------------------------------ improvisation ----------------------------- */
interface Key {
  [letter: string]: number;
}
function convertTitle(title: string) {
  const key: Key = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let result = 0;
  for (let i = 0; i < title.length; i++) {
    result = result * 26 + key[title[i]];
  }
  // result 1 = 1
  //   result 2 = 28
  //
  return result;
}
console.log(convertTitle("Z"));

/* ------------------------------------ 2 ----------------------------------- */
function singleDigit(arr: number[]) {
  const arr2: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(arr);
        console.log(arr[i]);
        console.log(arr[j]);
        console.log(arr);

        arr.splice(j, 1) && arr.splice(i, 1);
        console.log(arr);
      }
    }
  }

  return arr;
}

const arr = [1, 7, 2, 8, 3, 6, 4, 5, 6, 7, 10, 8, 10, 11];
console.log(singleDigit(arr));

/* ------------------------------------ 3 ----------------------------------- */
function anagram(s: string, t: string) {
  const s2 = s.split("").sort().join();
  const t2 = t.split("").sort().join();

  console.log(s2);
  console.log(t2);

  if (s2 === t2) {
    return true;
  } else {
    return false;
  }
}

const a = "anagram";
const b = "nagaram";

console.log(anagram(a, b));

/* ------------------------------------ 4 ----------------------------------- */
function climbStaircase(n: number) {
  let arr: number = 0;
  let curr: number = 1;
  let next: number = 0;

  for (let i = 0; i < n; i++) {
    next = arr + curr;
    arr = curr;
    curr = next;
  }
  return curr;
}

console.log(climbStaircase(7));
