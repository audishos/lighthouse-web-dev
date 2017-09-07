const countLetters = function (word) {
  const wordLower = word.toLowerCase();
  const result = {};

  // for each letter in the word
  for (let i = 0; i < wordLower.length; i++) {
    // ignore spaces
    if (wordLower[i] !== " ") {
      // check if the letter does not exist:
      if (result[wordLower[i]] === undefined) {
        // create the key and give it a count of 1
        result[wordLower[i]] = [i];
      }
      else {
        //add 1 to the count
        result[wordLower[i]].push(i);
      }
    }
  }

  return result;
}

console.log(countLetters("lighthouse in the house"));