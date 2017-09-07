function convertToPigLatin(stringArray){
  var pigLatinArray = [];

  for (var i = 2; i < stringArray.length; i++){
    var pigLatinString = "";
    //convert to pig latin
    pigLatinString = stringArray[i].slice(1) + stringArray[i][0] + "ay";
    pigLatinArray.push(pigLatinString);
  }

  return pigLatinArray;
}

var pigLatin = convertToPigLatin(process.argv).toString();
console.log(pigLatin.split(',').join(" "));