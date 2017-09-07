var input1 = process.argv[2];
var input2 = process.argv[3];

var number1 = parseInt(input1);
var number2 = parseInt(input2);

if (isNaN(number1) || isNaN(number2)){
  console.log("Please enter valid numbers.")
}
else{
  var sum = number1 + number2;
  console.log(sum);
}
