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
