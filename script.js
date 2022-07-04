let bottomDisplay, operatorMemory, inputMemory = null;
let operated = false;
let decimal = false;
//lock the display when a result/calculation is displayed, so the user can only backspace inputted numbers. 
let displayLock = false;


function sum(a, b) { return a + b; };

function subtract(a, b) { return a - b; };

function multiply(a, b) { return a * b; };

function divide(a, b) { return a / b; };


function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a,b);
    let result;
    if (operator == "+")
        result = sum(a, b);
    if (operator == "-")
        result = subtract(a, b);
    if (operator == "x")
        result = multiply(a, b);
    if (operator == "÷")
        result = divide(a, b);

    operated = false;
    console.log(result);
    if(result == "Infinity" || isNaN(result)){
        return "illegal operation!";
    }
    //rounds result to 4 decimal places
    return Math.round(parseFloat(result)* 10000)/ 10000;
}

function clear(){

    bottomDisplay, operatorMemory, inputMemory = null;
    operated,decimal = false;
    let displayBottom = document.getElementById("bottom-display");
    let displayTop = document.getElementById("top-display");
    displayBottom.innerText = "";
    displayTop.innerText= "";



}

function deleteInput(){
    let displayBottom = document.getElementById("bottom-display");
    if(displayLock || displayBottom.innerText == "")
        return
    displayBottom.innerText= displayBottom.innerText.slice(0,-1);
   
}

function numberInput(e) {
    displayLock = false;
    //checks illegal operation message isnt blocking the user input area
    if(bottomDisplay == "illegal operation!"){
        inputMemory = null;
        bottomDisplay = null;
    }
    //block more than one decimal number;
    if (decimal == true && e.target.innerText == ".")
        return;
    if (e.target.innerText == ".")
        decimal = true;
    //append input to the bottom display
    let display = document.getElementById("bottom-display");
    if (bottomDisplay != undefined)
        bottomDisplay = bottomDisplay + e.target.innerText
    else bottomDisplay = e.target.innerText;
    display.innerText = bottomDisplay;
    

}

function operatorInput(e) {
    let displayBottom = document.getElementById("bottom-display");
    let displayTop = document.getElementById("top-display");


    // performs the caculation providing there is two inputs or a previous calculation
    if(e.target.innerText == "=" && inputMemory != null){
        let calculation = operate(operatorMemory, inputMemory, displayBottom.innerText);
        displayTop.innerText = inputMemory + " " +  operatorMemory + " " + displayBottom.innerText + " =";
        bottomDisplay = "";
        displayBottom.innerText = calculation;
        displayLock = true;

        return;
    }
        operatorMemory = e.target.innerText;
        inputMemory = displayBottom.innerText;
        displayTop.innerText = inputMemory+  " " + operatorMemory;
        bottomDisplay = "";
    
    displayBottom.innerText = "";
  
}


const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
numberButtons.forEach(numberButton => numberButton.addEventListener('click', numberInput));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operatorInput));
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteInput);