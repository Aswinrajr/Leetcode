function shiftingLetters(s, shifts) {
  let n = s.length;
  let shiftArray = new Array(n + 1).fill(0);

  for (const [start, end, direction] of shifts) {
    let value = direction === 1 ? 1 : -1;
    shiftArray[start] += value;
    shiftArray[end + 1] -= value;
  }

  let arr = s.split("");
  let shift = 0;

  for (let i = 0; i < n; i++) {
    shift += shiftArray[i];
    let newChar = ((((arr[i].charCodeAt(0) - 97 + shift) % 26) + 26) % 26) + 97;
    arr[i] = String.fromCharCode(newChar);
  }

  return arr.join("");
}

const s = "abc";
const shifts = [
  [0, 1, 0],
  [1, 2, 1],
  [0, 2, 1],
];
console.log(shiftingLetters(s, shifts)); // Output: "ace"
