function add(a, b) { return a+b;}
function subtract(a, b) { return a-b;}
function multiply(a, b) { return a*b;}
function divide(a, b) { return a/b;}

function operate(a, b, operator) {
    switch(operator) {
        case "+" : return add(Number(a), Number(b));
        case "-" : return subtract(Number(a), Number(b));
        case "*" : return multiply(Number(a), Number(b));
        case "/" : return divide(Number(a), Number(b));
    }
}
let a;
let isAFilled = false;
let numberClicked = false;
let operatorToUse;
let operatorClicked = false;

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
numbers.forEach(num => {
    num.addEventListener("click", (e) => {
        if(operatorClicked) {
            display.textContent = "";
            operatorClicked = false;
        }
        display.textContent += e.target.textContent;
        numberClicked = true;
    })
});

const operators = document.querySelectorAll(".operator");
operators.forEach(op => {
    op.addEventListener("click", (e) => {
        if (numberClicked) {
            if(!isAFilled) {
                a = display.textContent;
                isAFilled = true;
            }
            else a = operate(a, display.textContent, operatorToUse);
            operatorToUse = e.target.textContent;
            operatorClicked = true;
            numberClicked = false;
        }
    })
});

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
    if(isAFilled && !operatorClicked && numberClicked) {
        display.textContent = operate(a, display.textContent, operatorToUse);
        operatorClicked = true;
        isAFilled = false;
    }
})

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    isAFilled = false;
    numberClicked = false;
    operatorClicked = false;
})

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
})