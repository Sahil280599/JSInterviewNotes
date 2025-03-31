// hoisting is a phenomenon in javascript where variables and functions are moved to the top of their scope before execution of the code

// hoisting is of two types : 
// 1. var 
// 2. let and const


sayHello();

function sayHello(){
    console.log('Hello');
    
}

//when you use var in hoisting it will give typeerror: 

sayHi();

function sayHi(){
    console.log('Hi');
}


// let and const declarations are also hoisted but they are not initialized with a default value
// they are in the temporal dead zone until the initialization is not done










