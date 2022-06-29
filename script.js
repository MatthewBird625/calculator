console.log("hello");

function sum(a, b) { return a + b; };

function subtract(a, b) { return a - b; };

function multiply(a, b) { return a * b; };

function divide(a, b) { return a / b; };


function operate(operator, a, b) {

    let result;
    if (operator == "+")
        result = sum(a, b);
    if (operator == "-")
        result = subtract(a, b);
    if (operator == "*")
        result = multiply(a, b);
    if (operator == "/")
        result = divide(a, b);

        return result;
}

console.log(operate("/",20,5));