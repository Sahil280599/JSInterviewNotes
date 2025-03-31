// function declaration : defines a function with a name

function add(a,b){

    return a+b;
}


// function expression : defines a function as a value assigned to a variable


const add = function(a,b){

    return a+b;
}


// arrow function : short hand for function expression


const greet = (name)=>{
    return `Hello ${name}`;
}


// function constructor: creates a new function object

const add = new Function('a','b','return a+b');


