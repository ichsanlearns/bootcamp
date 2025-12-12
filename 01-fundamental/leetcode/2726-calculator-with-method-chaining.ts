class Calculator {
  value: number = 0;

  constructor(value: number) {
    this.value = value;
  }

  add(value: number): Calculator {
    this.value += value;
    return new Calculator(this.value);
  }

  subtract(value: number): Calculator {
    this.value -= value;
    return new Calculator(this.value);
  }

  multiply(value: number): Calculator {
    this.value *= value;
    return new Calculator(this.value);
  }

  divide(value: number): Calculator {
    if (value !== 0) {
      this.value /= value;
      return new Calculator(this.value);
    } else {
      throw new Error("Division by zero is not allowed");
      return new Calculator(this.value);
    }
  }

  power(value: number): Calculator {
    this.value = this.value ** value;
    return new Calculator(this.value);
  }

  getResult(): number {
    return this.value;
  }
}

const test = new Calculator(2).multiply(5).divide(0).getResult();
console.log(test);
