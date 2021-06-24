// Functions

let makeMeHappy = 100 * 100; // THIS IS A GLOBAL SCOPE, CAN BE CALLED ANYWHERE BECAUSE THE SCOPE IS THE WHOLE PROGRAM

const power = function(base, exponent) {
    let result = 1; // THIS IS A LOCAL SCOPE BECAUSE THE BINDING CAN ONLY BE CALLED INSIDE THE FUNCTION
    for (let counter = 0; counter < 10; counter++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 5));
console.log(makeMeHappy);