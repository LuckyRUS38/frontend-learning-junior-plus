const counter = {
  count: 0,
  inc() {
    this.count++;
  },
  value() {
    return this.count;
  },
};

counter.inc();
counter.inc();
counter.inc();

console.log(counter.value());

const person = {
  name: "Wayne",
  intro() {
    return `Hello, my name is ${this.name}.`;
  },
};

console.log(person.intro());
const f = person.intro;
console.log(f());

// Fix with binding object for method
const boundF = f.bind(person);
console.log(boundF());
