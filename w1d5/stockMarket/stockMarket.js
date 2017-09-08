const maxProfit = function(values) {
  const calculateMaxProfit = function(values, counter) {
    if (values[counter + 1]) {
      console.log(values[counter], values[counter +  1]);
      var curResult = values[counter] - values[counter + 1];
      var nextResult = calculateMaxProfit(values, counter + 1);

      counter++;

      return curResult > nextResult ? curResult : nextResult;
    }

  }
  return calculateMaxProfit(values, 0);
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));

module.exports = maxProfit;