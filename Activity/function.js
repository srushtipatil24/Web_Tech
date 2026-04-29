// function: reusable block of code which perform specific task

// // ============================================
// // 1. FUNCTION DECLARATION (Function Statement)
// // ============================================
// // Hoisted - can be called before declaration

// function greet(name) {
//   return "Hello, " + name;
// }

// console.log(greet("Alice")); // Works - hoisted


// // ============================================
// // 2. FUNCTION EXPRESSION
// // ============================================
// // NOT hoisted - must declare before calling

// const add = function(a, b) {
//   return a + b;
// };

// console.log(add(5, 3)); // 8


// // ============================================
// // 3. ANONYMOUS FUNCTION EXPRESSION
// // ============================================
// // Function without a name

// const multiply = function(x, y) {
//   return x * y;
// };

// console.log(multiply(4, 5)); // 20


// // ============================================
// // 4. NAMED FUNCTION EXPRESSION
// // ============================================
// // Function expression with a name (useful for recursion)

// const factorial = function fact(n) {
//   if (n <= 1) return 1;
//   return n * fact(n - 1);
// };

// console.log(factorial(5)); // 120


// // ============================================
// // 5. ARROW FUNCTION (ES6+)
// // ============================================
// // Concise syntax, lexical 'this' binding

// const square = (num) => {
//   return num * num;
// };

// console.log(square(6)); // 36

// // Short syntax (implicit return)
// const cube = (num) => num * num * num;

// console.log(cube(3)); // 27

// // Single parameter (parentheses optional)
// const double = n => n * 2;

// console.log(double(10)); // 20

// // No parameters
// const greetMsg = () => "Hi there!";

// console.log(greetMsg()); // Hi there!


// // ============================================
// // 6. FUNCTION WITH DEFAULT PARAMETERS
// // ============================================

// function welcome(name = "Guest", country = "USA") {
//   return `Welcome, ${name} from ${country}`;
// }

// console.log(welcome()); // Welcome, Guest from USA
// console.log(welcome("Bob")); // Welcome, Bob from USA
// console.log(welcome("Charlie", "UK")); // Welcome, Charlie from UK


// // ============================================
// // 7. FUNCTION WITH MULTIPLE PARAMETERS
// // ============================================

// function calculateTotal(price, tax, discount) {
//   return price + (price * tax) - discount;
// }

// console.log(calculateTotal(100, 0.1, 5)); // 105


// // ============================================
// // 8. FUNCTION WITH REST PARAMETERS (...)
// // ============================================
// // Accepts variable number of arguments

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(1, 2, 3, 4, 5)); // 15


// // ============================================
// // 9. FUNCTION RETURNING A VALUE
// // ============================================

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true; // Early return
//   }
//   return false;
// }

// console.log(isEven(4)); // true


// // ============================================
// // 10. FUNCTION WITHOUT RETURN (returns undefined)
// // ============================================

// function printMessage(msg) {
//   console.log(msg); // No explicit return
// }

// printMessage("This has no return value");


// // ============================================
// // 11. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// // ============================================
// // Executes immediately when defined

// (function() {
//   console.log("IIFE executed!");
// })();

// // IIFE with parameters
// (function(name) {
//   console.log("Hello, " + name);
// })("David");


// // ============================================
// // 12. HIGHER-ORDER FUNCTIONS
// // ============================================
// // Functions that return other functions

// function makeMultiplier(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }

// const double2 = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double2(5)); // 10
// console.log(triple(5)); // 15

function addTwoNumbers(n1, n2){
    console.log(n1 + n2);
}
addTwoNumbers(4, 5); //arguments

function add(n1, n2){
    let result = n1 + n2;
    return result;
    console.log(result); //unreachable code detected => code after return statement does not execute
}

const res = add(4, 5);
console.log(res);

function loginUserMsg(username){
    return `${username} just logged in!`
}
console.log(loginUserMsg()); //undefined just logged in! when argument is empty then undefined.

function myfunction(...num1){ //spread operator
    return num1;
}
console.log(200,300,400);

const obj = {
    name: 'prachi',
    age: 20
}

function myObj(anyObj){
    console.log(`my name is ${anyObj.name}`);
    console.log(`my age is ${anyObj.age}`);
}
myObj(obj);

const ar = [1,2,3,4]

function myArr(anyArr){
    console.log(anyArr);
    // anyArr.map(each => console.log(each))
    console.log(anyArr[0]);
    console.log(anyArr[1]);
}
myArr(ar)

//arrow functions

const addtwoNo = (n1, n2) => {
    return n1 + n2;
}
console.log(addtwoNo(4,5));

//simple function

const fun = function(){
    username = 'prachi';
    console.log(this.username); //this => 
}
fun()

const arrowFun = () => {
    user = "prachi"
    console.log(this);
}
arrowFun()

//what is arrow function
//diff arrow function and simple function
//what is this keyword
//why we use this keyword
//why we do not use this keyword in the arrow function

//write code for arrow functions with 2 examples 
//write code for switch case in JS
//How to use truthy and falsy value in JS with examples 
//how to use ternary operator in JS
//write a code for howto use loops in array => while, do while, for, forEach, forIn, forOf
//diff between for in and for of loop
//how to use map and filter function in JS