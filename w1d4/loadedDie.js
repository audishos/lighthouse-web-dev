function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = 0;

  return function() {
    // if index falls outside of valid array values
    if (index >= list.length) {
      // start back at the beginning
      index = 0;
    }
    // increment each time the function is called
    index ++;
    // -1 because we must increment before our return
    return list[index - 1];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 5