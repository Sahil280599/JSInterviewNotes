// difference between let, const and var

// var is function scoped
// let and const are block scoped


// 1. var
// - Function scoped
// - Can be redeclared and updated
// - Hoisted to the top of its scope and initialized as undefined
var x = 10;
var x = 20; // allowed
x = 30; // allowed

// 2. let 
// - Block scoped
// - Cannot be redeclared but can be updated
// - Hoisted but not initialized (temporal dead zone)
let y = 10;
// let y = 20; // error: cannot redeclare
y = 20; // allowed

// 3. const
// - Block scoped
// - Cannot be redeclared or updated
// - Must be initialized at declaration
// - Hoisted but not initialized (temporal dead zone)
const z = 10;
// const z = 20; // error: cannot redeclare
// z = 20; // error: cannot reassign

// Note: const objects can have their properties modified
const person = {name: 'John'};
person.name = 'Jane'; // allowed
// person = {name: 'Jane'}; // error: cannot reassign
