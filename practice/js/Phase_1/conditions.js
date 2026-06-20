let score = 91;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("F");
}

const day = "sat";

switch (day) {
  case "sat":
  case "sun":
    console.log("It's weekend");
    break;
  default:
    console.log("It's weekday");
}
