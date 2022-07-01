let topDisplay, bottomDisplay,operatorMemory;
let inputMemory=[];
let operated = false;
let decimal = false;


function sum(a, b) { return a + b; };

function subtract(a, b) { return a - b; };

function multiply(a, b) { return a * b; };

function divide(a, b) { return a / b; };


function operate(operator, a, b) {
    a = parseInt(a);
    b= parseInt(b);
    let result;
    if (operator == "+")
        result = sum(a, b);
    if (operator == "-")
        result = subtract(a, b);
    if (operator == "*")
        result = multiply(a, b);
    if (operator == "/")
        result = divide(a, b);

    operated = false;
    return result;
}

function numberInput(e) {
    //block more than one decimal number;
    if (decimal == true && e.target.innerText == ".")
        return;
    if (e.target.innerText == ".")
        decimal = true;

    let display = document.getElementById("bottom-display");
    if (bottomDisplay != undefined)
        bottomDisplay = bottomDisplay + e.target.innerText
    else bottomDisplay = e.target.innerText;
    display.innerText = bottomDisplay;

}

function operatorInput(e) {
    if (operated == true && e.target.innerText != "=")
        return;
    operated = true;
    if ( operatorMemory != "="){
        console.log("equal detected!")
        operatorMemory = e.target.innerText;

    }
        
    inputMemory.push(bottomDisplay);
    bottomDisplay = "";
    let display = document.getElementById("bottom-display");
    display.innerText = bottomDisplay;
    console.log(inputMemory);
    if(inputMemory.length ==2){
        console.log("operate");
        console.log(operatorMemory + " " + inputMemory[0]+ " "+inputMemory[1]);
        let result = operate(operatorMemory,inputMemory[0], inputMemory[1])
        console.log(result);
        display.bottomDisplay = result;
    }



}


const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
numberButtons.forEach(numberButton => numberButton.addEventListener('click', numberInput));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operatorInput));