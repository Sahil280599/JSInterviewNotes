// default parameters:

// default parameters are a way to assign default values to function parameters



function greet(name = 'Guest'){
    console.log(`Hello ${name}`);
}

greet();
greet('John');
