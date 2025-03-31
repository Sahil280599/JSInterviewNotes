// map:

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.



const numbers = [1,2,3,4,5];

const squareNumbers = numbers.map(number => number * number);

console.log(squareNumbers);



// what maps return:

// map returns a new array with the results of the callback function applied to each element.



// map vs foreach:

// map returns a new array
// foreach does not return a new array


