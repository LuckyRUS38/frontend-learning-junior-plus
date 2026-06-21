const s = Symbol("secret");
const circle = {
  get area() {
    return Math.PI * this.radius ** 2;
  },
  set radius(value) {
    if (value < 0) throw new Error("Radius cannot be negative");
    this._radius = value;
  },
  get radius() {
    return this._radius;
  },
  [s]: "secret-secret",
};

circle.radius = 5;

console.log(circle.area);
console.log(circle.radius);

try {
  circle.radius = -1;
} catch (e) {
  console.error(e);
}

console.log(circle[s]);
console.log(Object.keys(circle));

const operationSystem = {
  version: null,
};
operationSystem.version ??= 10;

console.log(operationSystem.version);
