function Product(title, price) {
  this.title = title;
  this.price = price;
}

Product.prototype.describe = function() {
  return `${this.title} — ${this.price}₽`;
};

const testProduct = new Product('Название', 100);
const newTestProduct = new Product('New test', 100);

console.log(testProduct.describe());

console.log(testProduct.hasOwnProperty('title'));
console.log(testProduct.hasOwnProperty('price'));
console.log(newTestProduct.hasOwnProperty('title'));
console.log(newTestProduct.hasOwnProperty('price'));


// Second Task

const animal = {
  sound() {
    return "...";
  }
}

const bird = Object.create(animal);
bird.fly = function() {
  return "Flying...";
};


console.log(bird.fly());
console.log(bird.sound());

console.log(bird.hasOwnProperty('fly'));
console.log(bird.hasOwnProperty('sound'));
console.log(bird.toString());

bird.toString = function() {
  return "Bird\n-=-=-=-=-=-=-\nTREATS:\n Fly\n Sound";
};

console.log(bird.toString());
console.log(Object.getPrototypeOf(bird));
