# JavaScript Interview Preparation Notes

This repository contains comprehensive notes and examples for JavaScript interview preparation, covering key concepts and common interview questions.

## Project Structure

```
interview_questions/
├── variableShadowing.js    # Examples of variable shadowing
├── higherOrderFunction.js  # Higher order functions and callbacks
├── pureFunction.js         # Pure vs impure functions
└── thiskeyword.js         # Understanding 'this' keyword
```

## Topics Covered

### 1. Variable Shadowing
- Definition: When a variable in a lower scope has the same name as a variable in a higher scope
- Examples showing different scopes (global, function, block)
- Best practices and common pitfalls

### 2. Higher Order Functions
- Functions that take other functions as arguments
- Functions that return other functions
- Callback functions
- Common use cases and examples

### 3. Pure Functions
- Characteristics of pure functions
- Side effects and their impact
- Examples of pure vs impure functions
- Advantages and disadvantages

### 4. this Keyword
- Different contexts of 'this'
- Regular functions vs arrow functions
- Constructor functions
- Event handlers
- call(), apply(), and bind()

## How to Use

1. Clone the repository
2. Navigate to the `interview_questions` directory
3. Open any `.js` file to view examples and explanations
4. Run the examples using Node.js or in browser console

## Running Examples

```bash
# Using Node.js
node interview_questions/variableShadowing.js
node interview_questions/higherOrderFunction.js
node interview_questions/pureFunction.js
node interview_questions/thiskeyword.js
```

## Key Concepts

### Variable Shadowing
```javascript
let x = 10; // Global scope

function myFunction() {
    let x = 20; // Function scope
    console.log(x); // 20
}
```

### Higher Order Functions
```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}
```

### Pure Functions
```javascript
// Pure
function add(a, b) {
    return a + b;
}

// Impure
let counter = 0;
function increment() {
    counter++;
    return counter;
}
```

### this Keyword
```javascript
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
```

## Interview Tips

1. **Variable Shadowing**
   - Understand scope hierarchy
   - Be aware of naming conflicts
   - Know when shadowing might cause issues

2. **Higher Order Functions**
   - Explain the concept clearly
   - Provide real-world examples
   - Understand callback patterns

3. **Pure Functions**
   - Explain side effects
   - Discuss benefits and trade-offs
   - Provide practical examples

4. **this Keyword**
   - Know different contexts
   - Understand arrow functions
   - Be familiar with binding methods

## Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

## Contributing

Feel free to contribute by:
1. Adding more examples
2. Improving explanations
3. Adding new topics
4. Fixing any errors

## License

This project is open source and available under the MIT License. 