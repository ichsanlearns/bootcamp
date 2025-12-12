// let isi = 0;
// function triangle(height: number) {
//   for (let j = 0; j <= height; j++) {
//     for (let i = 0; i < j; i++) {
//       isi = j + 1;
//       //   console.log(height);
//       console.log(isi);
//     }
//     // console.log("\n");
//   }
// }

// triangle(3);

/* ------------------------------------ 2 ----------------------------------- */
// function fizzBuzz(loop: number) {
//   let hasil = [];
//   for (let i = 1; i <= loop; i++) {
//     if (i % (3 * 5) === 0) {
//       hasil.push("FizBuzz");
//     } else if (i % 3 === 0) {
//       hasil.push("Fizz");
//     } else if (i % 5 === 0) {
//       hasil.push("Buzz");
//     } else {
//       hasil.push(i);
//     }
//   }
//   return hasil;
// }

// console.log(fizzBuzz(15));

function fizzBuzz(loop: number) {
  let hasil = "";
  for (let i = 1; i <= loop; i++) {
    if (i % (3 * 5) === 0) {
      hasil += ", FizzBuzz";
    } else if (i % 3 === 0) {
      hasil += ", Fizz";
    } else if (i % 5 === 0) {
      hasil += ", Buzz";
    } else if (i === 1) {
      hasil += `${i}`;
    } else {
      hasil += `, ${i}`;
    }
  }
  return hasil;
}
console.log(fizzBuzz(30));

/* ------------------------------------ 3 ----------------------------------- */
function BMI(weight: number, height: number) {
  let hasilBMI = "";
  const bodyMassIndex = weight / (height / 100) ** 2;
  if (bodyMassIndex < 18.5) {
    hasilBMI = "less weight";
  } else if (bodyMassIndex > 18.5 && bodyMassIndex < 24.9) {
    hasilBMI = "ideal";
  } else if (bodyMassIndex > 25.0 && bodyMassIndex < 29.9) {
    hasilBMI = "overweight";
  } else if (bodyMassIndex > 30.0 && bodyMassIndex < 39.9) {
    hasilBMI = "very overweight";
  } else {
    hasilBMI = "obesity";
  }
  return hasilBMI;
}

console.log(BMI(70, 172));

/* ------------------------------------ 4 ----------------------------------- */

function removeOddNumber(arr: number[]) {
  let hasilRON: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      hasilRON.push(arr[i]);
    }
  }

  return hasilRON;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(removeOddNumber(data));

/* ------------------------------------ 5 ----------------------------------- */
function splitString(kalimat: string) {
  const kalimatSplitted = kalimat.split(" ");
  return kalimatSplitted;
}

console.log(splitString("Kamu dan Aku"));

/* ----------------------------------- 5.5 ---------------------------------- */

function splitWord(kata: string) {
  let result: string[] = [];
  let current = "";

  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === " ") {
      result.push(current);
      current = "";
    } else {
      current += kata[i];
    }
  }
  result.push(current);
  return result;
}

console.log(splitWord("Hello World Word"));
