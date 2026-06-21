const multiply = (a, b = 2) => {
  return a * b;
};
console.log(multiply(5));
console.log(multiply(5, 3));

const max = (...nums) => {
  let maxNum = nums[0];
  for (let n of nums) {
    if (n > maxNum) {
      maxNum = n;
    }
  }
  return maxNum;
};
console.log(max(1, 2, 3, 4, 5, 6, 8));

const card = ({ title, likes = 0 }) => `${title} - ${likes} likes`;
console.log(card({ title: "Угабуга" }));
console.log(card({ title: "Tralalelo", likes: 30 }));

const data = [4, 1, 8];
console.log(max(...data));
