var chalkReplacer = function (chalk, k) {
    let sum = 0;
    for (let i = 0; i < chalk.length; i++) {
      sum += chalk[i];
    }
  
    k = k % sum;
  
    for (let i = 0; i < chalk.length; i++) {
      if (k < chalk[i]) {
        return i;
      }
      k -= chalk[i];
    }
  };
  
  console.log(chalkReplacer([3, 4, 1, 2], 25));
  