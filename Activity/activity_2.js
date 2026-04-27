//array,function,object declation
//write code for reverse number
//write code for palindrome number
//write code for fibbonaci series
//write code for find largest number in array
//write code for remove duplicate from array
//write code for find missing number in array
//write code for reverse a string
//write code for vowel count in string
//write code for check palindrome in string
//write code for check prime number and factorial
//write code for function to find even odd number
//write code for function to sum of numbers in array

//activity 1-----> array function and object declartion


//activity 2-----> write code for reverse number 
/*let num = 45678;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(reverse); // Output: 87654

//activity 3-----> write code for palindrome number
let number = 121;
let originalNumber = number;
let reversedNumber = 0;

while (number > 0) {
  let digit = number % 10;
  reversedNumber = reversedNumber * 10 + digit;
  number = Math.floor(number / 10);
}

if (originalNumber === reversedNumber) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}// Output: Palindrome*/

//activity 4-----> write code for fibbonaci series

// Print message
console.log("Welcome to DKTE!");

// Variables
let name = "Srushti";
let age = 22;

console.log("Name:", name);
console.log("Age:", age);

// If-else (check voting)
if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible");
}

// Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", numbers);

// Loop (print numbers)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Find sum (simple way)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("Sum is:", sum);

// Reverse string (simple)
let str = "Patil";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}
console.log("Reverse:", rev);

// Factorial (simple)
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial:", fact);