// destructuring:

// destructuring is a way to extract values from arrays or objects and assign them to variables



const person = {
    name: 'John',
    age: 20,
    city: 'New York'
}


// destructuring an object

const {name, age, city} = person;

console.log(name, age, city);


// destructuring an array

const [first, second, third] = ['apple', 'banana', 'cherry'];

console.log(first, second, third);
