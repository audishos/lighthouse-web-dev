function rollDice() {
  var rolls = []

  for (var i = 0; i < process.argv[2]; i++){
    rolls.push(Math.round(Math.random() * (6 - 1) + 1));
  }

  return rolls;
}

var rolls = rollDice().toString();
if (rolls != "") {
  console.log("You rolled: ", rolls.split(",").join(", "));
}
else {
  console.log("No dice were rolled.")
}