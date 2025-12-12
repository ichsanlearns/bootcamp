// Product Class
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Transaction Class
class Transaction {
  products: { product: Product; qty: number }[] = [];
  total: number = 0;

  // menambahkan product ke keranjang
  addToCart(product: Product, qty: number) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  // menampilkan total transaksi
  showTotal() {
    return this.total;
  }

  // checkout
  checkout() {
    return {
      items: this.products.map((item) => ({
        name: item.product.name,
        price: item.product.price,
        qty: item.qty,
        subtotal: item.product.price * item.qty,
      })),
      total: this.total,
    };
  }
}

// ===========================
// contoh
// ===========================

// Product list
const product1 = new Product("Kursi", 12000);
const product2 = new Product("Meja", 150);
const product3 = new Product("Gelas", 300);

const transaksi = new Transaction();

transaksi.addToCart(product1, 1);
transaksi.addToCart(product2, 2);
transaksi.addToCart(product3, 1);

console.log("Total :", transaksi.showTotal());

console.log("Checkout:");
console.log(transaksi.checkout());
