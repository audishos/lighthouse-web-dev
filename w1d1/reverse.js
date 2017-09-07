function reverseStrings(stringArray){
  var reversedArray = [];

  for (var i = 2; i < stringArray.length; i++){
    var reversedString = "";
    for (var j = stringArray[i].length - 1; j >= 0; j--){
      reversedString += stringArray[i][j];
    }
    reversedArray.push(reversedString);
  }

  return reversedArray;
}

var reversed = reverseStrings(process.argv).toString();
console.log(reversed.split(',').join("\n"));