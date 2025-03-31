// Higher Order Function:
// A higher order function is a function that can take another function as an argument
// or return a function as a result.

// Callback Function:
// A callback function is a function that is passed as an argument to another function
// and is executed after the outer function has finished executing.

// Example 1: Higher Order Function taking a callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Executing the callback function
}

// Callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Using the higher order function with callback
greet("Sahil", sayGoodbye);

// Example 2: Higher Order Function returning a function
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

// Using the returned function
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // Output: 10

// Example 3: Real-world example with setTimeout
function processUser(name, callback) {
    console.log(`Processing user: ${name}`);
    
    // Simulating some async operation
    setTimeout(() => {
        callback(name);
    }, 2000);
}

// Callback function
function displayUser(name) {
    console.log(`User processing complete: ${name}`);
}

// Using the higher order function with callback
processUser("Smriti", displayUser);

// Example 4: Array methods as Higher Order Functions
const numbers = [1, 2, 3, 4, 5];

// map is a higher order function that takes a callback
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled numbers:", doubled);

// filter is another higher order function
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);



