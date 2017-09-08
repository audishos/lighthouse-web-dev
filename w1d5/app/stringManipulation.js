let camelCase = function(string, iteration) {
  let indexMultiple = iteration || 2;
  let camelString = "";
  for (i = 0; i < string.length; i++) {
    if ((i + 1) % indexMultiple === 0) {
      camelString += upperCase(string[i]);
    }
    else {
      camelString += string[i];
    }
  }
  return camelString;
};

let upperCase = function(string) {
  return string.toUpperCase();
};

module.exports = {
  camelCase: camelCase
};