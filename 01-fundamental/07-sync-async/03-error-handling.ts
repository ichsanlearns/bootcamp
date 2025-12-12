function addTwoNumbers(num1: number, num2: number) {
  try {
    // 1. Kalau argument bukan number, berikan error
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Please only insert number");
    }
    // 2. Kalau argument adalah number maka jumlahkan secara normal
    return num1 + num2;
  } catch (error) {
    return error.message;
  }
}

console.log(addTwoNumbers(10, 20));
console.log(addTwoNumbers(10, "20"));
