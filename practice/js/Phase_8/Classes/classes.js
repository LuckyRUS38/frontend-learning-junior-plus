class Product {
  #stock = 0;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `${this.name} — ${this.price}₽`;
  }

  get stock() {
    return this.#stock;
  }

  set stock(value) {
    this.#stock = value;
  }

  static createEmpty() {
    return new Product('Unknown', 0);
  }
}

const p = new Product("Yoghurt", 100);
const emptyProduct = Product.createEmpty();

console.log(p.describe());
console.log(emptyProduct.describe());

console.log(p.stock);
p.stock = 5;
console.log(p.stock);
