//pure function:
// A pure function is a function that always returns the same output for the same input
// and has no side effects.

// Example 1: Pure Function
function add(a, b) {
    return a + b;
}

// Example 2: Pure Function
function square(num) {
    return num * num;
}

// Example 3: Pure Function with Object
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

// Impure Functions Examples:

// Example 1: Impure Function with Side Effect (console.log)
function greet(name) {
    console.log(`Hello, ${name}!`); // Side effect: logging to console
    return `Hello, ${name}!`;
}

// Example 2: Impure Function with External Variable
let counter = 0;
function incrementCounter() {
    counter++; // Side effect: modifying external variable
    return counter;
}

// Example 3: Impure Function with Random
function getRandomNumber() {
    return Math.random(); // Different output for same input
}

// Example 4: Impure Function with Date
function getCurrentTime() {
    return new Date().toISOString(); // Different output each time
}

// Example 5: Impure Function with DOM Manipulation
function updateDisplay(text) {
    document.getElementById('output').innerHTML = text; // Side effect: DOM manipulation
    return text;
}

// Testing Pure Functions
console.log("Testing Pure Functions:");
console.log(add(2, 3)); // Always returns 5
console.log(add(2, 3)); // Always returns 5
console.log(square(4)); // Always returns 16
console.log(square(4)); // Always returns 16

// Testing Impure Functions
console.log("\nTesting Impure Functions:");
console.log(incrementCounter()); // Returns 1
console.log(incrementCounter()); // Returns 2
console.log(getRandomNumber()); // Different each time
console.log(getRandomNumber()); // Different each time
console.log(getCurrentTime()); // Different each time
console.log(getCurrentTime()); // Different each time

// advantages of pure functions:
// 1. predictable
// 2. easier to test
// 3. easier to reason about
// 4. easier to debug
// 5. easier to maintain

// disadvantages of pure functions:
// 1. sometimes they are not practical
// 2. sometimes they are not efficient
// 3. sometimes they are not easy to write
// 4. sometimes they are not easy to read
// 5. sometimes they are not easy to maintain
