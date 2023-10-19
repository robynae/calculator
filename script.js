let firstNumber = '';
let secondNumber = '';
let displayNumber ='';
let operator = 'subtract';
let operatorClicked = false;
const mainDisplay = document.querySelector('.main-display');
const smallDisplay = document.querySelector('.small-display');
const numbers = document.querySelectorAll('.number');
const reset = document.querySelectorAll('.reset');
const operatorButton = document.querySelectorAll('.operator');

function add(num1, num2) {
    num1 = firstNumber;
    num2 = secondNumber;
    return num1 + num2;
}

function subtract(num1, num2) {
    num1 = firstNumber;
    num2 = secondNumber;
    return num1 - num2;
}

function multiply(num1, num2) {
    num1 = firstNumber;
    num2 = secondNumber;
    return num1 * num2;
}

function divide(num1, num2) {
    num1 = firstNumber;
    num2 = secondNumber;
    return num1 / num2;
}

function operate(op) {
  if(op === 'add') {
    return add(firstNumber, secondNumber);
  } else if(op === 'subtract') {
    return subtract(firstNumber, secondNumber);
  } else if(op === 'multiply') {
    return multiply(firstNumber, secondNumber);
  } else if(op === 'divide') {
    return divide(firstNumber, secondNumber);
  }
}

function showDisplay(event) {

    if(operatorClicked === true) {
        displayNumber = '';
        operatorClicked = false;
    }

    if(event.target.classList.contains('number')) {
        displayNumber += event.target.textContent;
        mainDisplay.textContent = displayNumber;
        smallDisplay.textContent = displayNumber;
    }
    return;
}

function resetScreen(event) {
    if(event.target.classList.contains('allclear')) {
        displayNumber = '';
        mainDisplay.textContent = '';
        smallDisplay.textContent = '';
    } else if(event.target.classList.contains('clear')) {
        displayNumber = '';
        mainDisplay.textContent = '';
    }
    return;
}

function addOperator(event) {
    if(event.target.classList.contains('operator')) {
        operator = event.target.classList[0];
        smallDisplay.textContent += ' ' + event.target.textContent;
        firstNumber = mainDisplay.textContent;
        operatorClicked = true;
    }
    return;
}

numbers.forEach(function(number) {
    number.addEventListener('click', showDisplay);
})

reset.forEach(function(reset) {
    reset.addEventListener('click', resetScreen);
})

operatorButton.forEach(function(btn) {
    btn.addEventListener('click', addOperator);
})