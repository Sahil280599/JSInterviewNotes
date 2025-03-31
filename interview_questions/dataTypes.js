

// primitive data types
let number = 10 
let string = 'sahil'

let boolean = true
let undefined
let nullValue = null
let symbol = Symbol('sahil')
let bigint = 123456789012345678901234567890n


// non primitive data types
let object = { 
    name: 'sahil',
    age: 20
}

let array = [1, 2, 3, 4, 5]
let function = function() {
    console.log('hello')
}



// difference between = , == , ===

// equality : performs type coercion before comparision 
// strict equality : does not perform type coercion before comparision 

let a = 10 
let b = '10'

console.log(a == b); // true
console.log(a === b); // false


// Null and undefined
// they can be used to represent the absence of a value
// undefined is when a variable is declared but not initialized
// null is when a variable is explicitly set to null

let nullValue = null;
console.log(typeof nullValue); // answer will get is null and type is object

let undefinedVar;
console.log(typeof undefinedVar); // answer will get is undefined and type is undefined








