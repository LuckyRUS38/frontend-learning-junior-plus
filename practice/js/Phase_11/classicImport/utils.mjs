export function Add (a, b) {
    return a + b;
}

export function Search(array, query) {
    return array.filter(item => item.includes(query));
}

export default function (a, b) {
  return a * b;
}
