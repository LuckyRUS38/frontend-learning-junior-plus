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

class DigitalProduct extends Product {
  constructor(name, price, fileSizeMb) {
    super(name, price);
    this.fileSizeMb = fileSizeMb;
  }

  describe() {
    return `${super.describe()} (${this.fileSizeMb}MB)`;
  }
}

const regularProduct = new Product('Yoghurt', 100);
const digitalProduct = new DigitalProduct('Midnight Drive - Lucky', 149, 10);
console.log(digitalProduct.describe())
console.log('Instance of DigitalProduct:', digitalProduct instanceof DigitalProduct, regularProduct instanceof DigitalProduct);
console.log('Instance of Product:', digitalProduct instanceof Product, regularProduct instanceof Product);
