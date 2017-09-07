function obfuscate(password){
  var obfuscated = "";
  for (var i = 0; i < password.length; i++){
    switch(password[i]){
    case "a":
      obfuscated += "4";
      break;
    case "e":
      obfuscated += "3";
      break;
    case "o":
      obfuscated += "0";
      break;
    case "l":
      obfuscated += "1";
      break;
    default:
      obfuscated += password[i];
    }
  }
  return obfuscated;
}
console.log(obfuscate(process.argv[2]));