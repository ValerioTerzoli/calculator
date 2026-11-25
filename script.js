function add(a, b) { return a+b;}
function subtract(a, b) { return a-b;}
function multiply(a, b) { return a*b;}
function divide(a, b) { return a/b;}

function operate(a, b, operator) {
    switch(operator) {
        case "+" : return add(a, b);
        case "-" : return subtract(a, b);
        case "*" : return multiply(a, b);
        case "/" : return divide(a, b);
    }
}

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
    })
});

const operators = document.querySelectorAll(".operator");
operators.forEach(op => {
    op.addEventListener("click", (e) => {
        operatorToUse = e.target.textContent;
        operatorClicked = true;
    })
});