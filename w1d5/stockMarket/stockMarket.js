const maxProfitBruteForce = function(values) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (left < values.length - 1) {
    let currProfit = values[right] - values[left];
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
    }
    if (values[right + 1]) {
      right++;
    }
    else {
      left++;
      right = left + 1;
    }
  }
  return maxProfit;
}

// const maxProfitAlgorithm = function(values) {
//   // console.log ("indexes", values.indexOf(Math.max.apply(null, values)), values.indexOf(Math.min.apply(null, values)))
//   // console.log ("values:", Math.max.apply(null, values), Math.min.apply(null, values))
//   if (values.indexOf(Math.max.apply(null, values)) < values.indexOf(Math.min.apply(null, values))){
//     return maxProfitAlgorithm(values.slice(values.indexOf(Math.max.apply(null, values)) + 1));
//   }
//   else {
//     // console.log(values);
//     // console.log(Math.max.apply(null, values), Math.min.apply(null, values));
//     return Math.max.apply(null, values) - Math.min.apply(null, values);
//   }

// }

console.log(maxProfitBruteForce([45, 24, 35, 31, 40, 38, 11]));
// console.log(maxProfitAlgorithm([45, 24, 35, 31, 40, 38, 11]));

// 45, 29, 94, 83, 58, 13, 90, 12, 56

module.exports = maxProfitBruteForce;