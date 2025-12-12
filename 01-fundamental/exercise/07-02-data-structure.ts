/* ------------------------------------ 2 ----------------------------------- */
function romanNumeral(roman: string) {
  let total: number = 0;
  const romanValue = { I: 1, V: 5, X: 10, L: 50, C: 100 };

  for (let i = 0; i < roman.length - 1; i++) {
    let curr = romanValue[roman[i]];
    let next = romanValue[roman[i + 1]];

    if (curr > next) {
      total += curr;
    } else if (curr < next) {
      total += next - curr;
    } else {
      total += curr;
    }
  }
  total += romanValue[roman[roman.length - 1]];
  return total;
}

const roman = "CLX";
console.log(roman[0]);

console.log(romanNumeral(roman));

/* ------------------------------------ 3 ----------------------------------- */
function pascalTriangle(numRows: number) {
  // n/i = baris
  // k/j = posisi angka
  //   let number = 0;
  //   for (let i = 0; i < numRows; i++) {
  //     for (let j = 0; j < i; j++) {
  //         number = i*
  //     }
  //   }
  let temp: number[] = [];
  const output = [[1]];
  let curr = 1;
  let next = 1;
  let test = 0;

  if (numRows < 2) {
    return output;
  } else {
    for (let i = 1; i < numRows; i++) {
      temp.push(1);
      for (let j = 1; j < i; j++) {
        let test =
          output[output.length - 1][j - 1] + output[output.length - 1][j];
        //   console.log(output[output.length - 1][j - 1]);
        //   console.log(output[output.length - 1][j]);
        temp.push(test);
      }
      temp.push(1);
      output.push(temp);
      temp = [];
    }
    return output;
  }
}

console.log(pascalTriangle(2));

/* ------------------------------------ 4 ----------------------------------- */
function maximumProfit(prices: number[]) {
  let curr = 0;
  let hariBeli = 0;
  let hariJual = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let different = prices[j] - prices[i];

      if (different > curr) {
        curr = different;

        hariBeli = i + 1;
        hariJual = j + 1;
      }
    }
  }

  if (curr <= 0) {
    return `0, Tidak ada transaksi yang menguntungkan`;
  } else {
    return `Keuntungan ${curr}, Beli hari ke-${hariBeli} dan Jual pada hari ke-${hariJual}`;
  }
}

const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maximumProfit(prices));

console.log(maximumProfit(prices2));

/* ----------------------------------- 4.5 ---------------------------------- */
function maxProfit(prices: number[]) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([7, 6, 4, 3, 1]));

/* ------------------------------------ x ----------------------------------- */
function timesTwo(numb: number): void {
  console.log(2 * 2);
}
timesTwo(2);
