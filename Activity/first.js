// name = "srushti patil";
// console.log(name);
// age=24;
// console.log(age);
// roll_number =123;
// console.log(roll_number);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a score: ", function(input) {

  let score = Number(input);   // Convert string to number
  let grade;

  if (score >= 90 && score <= 100){
      grade = "A";
  }
  else if (score >= 80){
      grade = "B";
  }
  else if (score >= 70){
      grade = "C";
  }
  else if (score >= 60){
      grade = "D";
  }
  else if (score >= 0){
      grade = "F";
  }
  else {
      grade = "Invalid score";
  }

  console.log("Grade:", grade);
  rl.close();
});


