var words = ["ground", "control", "to", "major", "tom"];

// map function
const map = function(arr, callback) {
  const arrResults = [];
  arr.forEach(function(element) {
    // for each element in the array
    // run the callback function with the current element as the parameter
    // and push the result to arrResults
    arrResults.push(callback(element));
  });
  return arrResults;
};

const map1 = map(words, function(word) {
  return word.length;
});

const map2 = map(words, function(word) {
  return word.toUpperCase();
});

const map3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(map1);
console.log(map2);
console.log(map3);