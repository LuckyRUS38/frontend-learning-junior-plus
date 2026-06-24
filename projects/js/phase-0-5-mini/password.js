const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*";

const randomChar = (str) => str[Math.floor(Math.random() * str.length)];

const generatePassword = (
  length,
  options = { upper: false, digits: false, symbols: false },
) => {
  let alphabet = "";
  alphabet += LOWER;
  if (options.digits) alphabet += DIGITS;
  if (options.upper) alphabet += UPPER;
  if (options.symbols) alphabet += SYMBOLS;
  let password = "";
  for (let i = 0; i < length; i++) {
    password += randomChar(alphabet);
  }
  return password;
};

const improvedGeneratePassword = (
  length,
  options = { upper: false, digits: false, symbols: false },
) => {
  let alphabet = "";
  let password = "";
  alphabet += LOWER;
  if (options.digits === true) {
    alphabet += DIGITS;
    password += randomChar(DIGITS);
  }
  if (options.upper === true) {
    alphabet += UPPER;
    password += randomChar(UPPER);
  }
  if (options.symbols === true) {
    alphabet += SYMBOLS;
    password += randomChar(SYMBOLS);
  }
  const remaining = length - password.length;
  for (let i = 0; i < remaining; i++) {
    password += randomChar(alphabet);
  }
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

console.log(
  generatePassword(8, { upper: false, digits: false, symbols: false }),
);
console.log(generatePassword(12, { upper: true, digits: true, symbols: true }));
console.log(
  generatePassword(16, { upper: false, digits: true, symbols: true }),
);

console.log(
  improvedGeneratePassword(8, { upper: false, digits: false, symbols: false }),
);
console.log(
  improvedGeneratePassword(12, { upper: true, digits: true, symbols: true }),
);
console.log(
  improvedGeneratePassword(16, { upper: false, digits: true, symbols: true }),
);
