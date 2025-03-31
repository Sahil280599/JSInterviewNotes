// for in and for of loops:

// for in loop:
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring properties keyed by Symbols), including inherited enumerable properties.


// for of loop:
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g. arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.


const fruits = ['apple','banana','orange'];

// iterate over the properties of an object

for(let fruit in fruits){
    console.log(fruit);
}

// iterate over the elements of an array

for (let fruit of fruits){
    console.log(fruit);


}
