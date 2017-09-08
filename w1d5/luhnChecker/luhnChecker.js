const luhnCheck = function(number) {
  let evens = 0;
  let odds = 0;
  //convert the number into an array of ints
  let digits = number.toString().split("").map(function(d) {
    return parseInt(d)
  });

  // reverse the digits
  digits = digits.reverse();

  // sum the odd digits
  for (let i = 0; i < digits.length; i += 2) {
    odds += digits[i];
  }

  // multiply each even digit by 2
  for (let i = 1; i < digits.length; i += 2) {
    let curResult = 0;
    curResult = digits[i] * 2;
    //if the result is > 9, then subtract 9 from the result
    if (curResult > 9) {
      curResult = curResult - 9;
    }
    evens += curResult;
  }

  // sum the odd and even results
  return (evens + odds) % 10 === 0

  // if mod 10 === 0 return true (otherwise false)
};

console.log(luhnCheck(1234567812345670));

module.exports = luhnCheck;