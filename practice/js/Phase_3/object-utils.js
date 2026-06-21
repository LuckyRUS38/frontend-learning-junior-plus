const product = {
  name: "Milk",
  price: 200,
  inStock: true,
};

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

for (const [k, v] of Object.entries(product)) {
  console.log(`${k}: ${v}`);
}

const { name, price, discount = 0 } = product;
console.log(`Name: ${name}, Price: ${price}, Discount: ${discount}`);

const cheaper = { ...product, price: 180 };
console.log(
  `Cheaper: ${cheaper.name}, Price: ${cheaper.price}, Original Price: ${product.price}`,
);
