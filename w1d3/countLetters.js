const countLetters = function (word) {
  const noSpaces = word.split(" ").join("").toLowerCase();
  const result = {};

  // for each letter in the word
  for (let i = 0; i < noSpaces.length; i++) {
    // check if the letter does not exist:
    if (result[noSpaces[i]] === undefined) {
      // create the key and give it a count of 1
      result[noSpaces[i]] = 1;
    }
    else {
      //add 1 to the count
      result[noSpaces[i]] ++;
    }
  }

  return result;
}

console.log(countLetters("lighthouse in the house"));