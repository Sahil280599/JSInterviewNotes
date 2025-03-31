// what is  variable scope?
// variable scope is the region of code where a variable is defined and can be accessed.
// there are three types of variable scope:
// 1. global scope
// 2. function scope
// 3. block scope

// global scope " variable decalres outside any function or block"


let globalVar = 'I am a global variable';

function myFunction(){

    let localVar = 'I am a local variable';

    console.log(globalVar);
    console.log(localVar);
    
}


myFunction();

console.log(globalVar);
console.log(localVar); // error: localVar is not defined 

