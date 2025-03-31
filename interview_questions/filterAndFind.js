// filter and find:

// filter:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.


// find:
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

//filter returns an array

const numbers = [1,2,3,4,5];

const evenNumbers = numbers.filter(numbers => numbers%2 == 0);

console.log(evenNumbers);


// find returns only one element

const numbers_1 = [1,2,3,4,5];

const evenNumbers_1 = numbers_1.find(numbers_1 => numbers_1%2 == 0);

console.log(evenNumbers_1);






