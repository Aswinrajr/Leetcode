var canArrange = function (arr, k) {
  const remainderCount = new Array(k).fill(0);

  for (const num of arr) {
    const remainder = ((num % k) + k) % k;
    remainderCount[remainder]++;
  }

  if (remainderCount[0] % 2 !== 0) return false;

  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i === k - i) {
      if (remainderCount[i] % 2 !== 0) return false;
    } else if (remainderCount[i] !== remainderCount[k - i]) {
      return false;
    }
  }

  return true;
};
