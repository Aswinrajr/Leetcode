// You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

// You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.

// Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

// The average value of a set of k numbers is the sum of the numbers divided by k.

// Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.

var missingRolls = function (rolls, mean, n) {
  const totalRolls = rolls.length + n;
  const totalSum = totalRolls * mean;
  const currentSum = rolls.reduce((sum, roll) => sum + roll, 0);
  let missingSum = totalSum - currentSum;

  if (missingSum < n || missingSum > 6 * n) return [];

  const result = Array(n).fill(1);
  missingSum -= n;

  for (let i = 0; i < n; i++) {
    const add = Math.min(6 - result[i], missingSum);
    result[i] += add;
    missingSum -= add;
  }

  return result;
};

console.log("missong Rolls",missingRolls([3,2,4,3],4,3))
