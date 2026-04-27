// Print day
let day = "Monday   ";
console.log("today is " + day);

// Check voting eligibility
let age = 22;
if (age >= 18) {
    console.log("eligible for voting");
} else {
    console.log("not eligible");
}

// Simple function
function simple() {
    console.log("This is simple function");
}
simple();

// Numbers
console.log(20);
console.log(3);

// Hello world
console.log("Hello World!");

// Boolean values
console.log(false);
console.log(true);

// Array of fruits
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Print all fruits
fruits.forEach(fruit => console.log(fruit));

// Loop 0 to 2
for (let i = 0; i <= 2; i++) {
    console.log(i);
}

// Print fruits again
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Object
let person = {
    name: "Sakhi",
    age: 2,
    city: "Indore"
};

console.log("name :", person.name);
console.log("age :", person.age);
console.log("city :", person.city);

// Squares array
let nums = [10, 15, 20, 25, 30];
let squares = nums.map(n => n * n);
console.log("squares:", squares);

// Even numbers
let evens = nums.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// Sum
let sum = nums.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

// Using loop
console.log("Using Loop:");
for (let i = 10; i <= 30; i += 5) {
    console.log(i);
}