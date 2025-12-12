class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  total: number = 0;
  products: { product: Product; qty: number }[] = [];

  addToCart(product: Product, qty: number) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
    return this.products;
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    const tempArray = this.products;
    this.products = [];
    return {
      "transaction data": tempArray.map((item) => ({
        name: item.product.name,
        price: item.product.price,
        qty: item.qty,
        subtotal: item.product.price * item.qty,
      })),
      total: this.total,
    };
  }
}

const test = new Product("Test", 100);
const test2 = new Product("Test2", 1000);
const test3 = new Product("Test3", 1500);
console.log(test);

const testTransaction = new Transaction();

console.log(testTransaction.addToCart(test, 10));
console.log(testTransaction.addToCart(test2, 3));
console.log(testTransaction.addToCart(test3, 5));

console.log(testTransaction.showTotal());

console.log(testTransaction.checkout());
