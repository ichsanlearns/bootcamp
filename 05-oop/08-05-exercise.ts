class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  addToCart() {}
}

class Transaction extends Product {
  total: number;

  constructor(total: number, name: string, price: number) {
    super(name, price);
    this.total = total;
  }
  showTotal() {
    return this.total;
  }

  checkout() {}
}

const test = new Product("Test", 100);
console.log(test);
