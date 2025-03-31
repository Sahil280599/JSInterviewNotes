// some and every:

// some:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.


// every:
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.


// some returns true if at least one element passes the test

// every returns true if all elements pass the test



const numbers = [1,2,3,4,5];

const evenNumbers = numbers.some(numbers => numbers%2 == 0);

console.log(evenNumbers);


const evenNumbers_1 = numbers.every(numbers => numbers%2 == 0);

console.log(evenNumbers_1);

