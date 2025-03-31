// this keyword:
// The this keyword refers to the object that is executing the current function.

// Example 1: this in a regular function
const person = {
    name: "Sahil",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: Hello, my name is Sahil

// Example 2: this in a constructor function
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person1 = new Person("Smriti");
person1.greet(); // Output: Hello, my name is Smriti

// Example 3: this in a regular function (global context)
function sayHello() {
    console.log(this); // this refers to the global object (window in browser)
}

sayHello();

// Example 4: this in an arrow function
const person2 = {
    name: "John",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // this refers to the global object
    }
};

person2.greet(); // Output: Hello, my name is undefined `arrow function` don't bind this keyword to the object

// Example 5: this in event handlers
const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', function() {
    console.log(this); // this refers to the button element
});
document.body.appendChild(button);

// Example 6: this with call(), apply(), and bind()
const person3 = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person4 = {
    name: "Bob"
};

// Using call()
person3.greet.call(person4); // Output: Hello, my name is Bob

// Using apply()
person3.greet.apply(person4); // Output: Hello, my name is Bob

// Using bind()
const greetBob = person3.greet.bind(person4);
greetBob(); // Output: Hello, my name is Bob

// Example 7: this in class methods
class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}

const student = new Student("Charlie");
student.greet(); // Output: Hello, I am Charlie




