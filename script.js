let firstNumber = '';
let secondNumber = '';
let displayNumber ='';
let operator = 'subtract';
const mainDisplay = document.querySelector('.main-display');
const smallDisplay = document.querySelector('.small-display');
const numbers = document.querySelectorAll('.number');
const allClear = document.querySelector('.allclear');
const clear = document.querySelector('.clear');


function add(num1, num2) {
    operator = 'add';
    return num1 + num2;
}

function subtract(num1, num2) {
    operator = 'subtract';
    return num1 - num2;
}

function multiply(num1, num2) {
    operator = 'multiply';
    return num1 * num2;
}

function divide(num1, num2) {
    operator = 'divide'
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
    if(event.target.classList.contains('number')) {
        displayNumber += event.target.textContent;
        mainDisplay.textContent = displayNumber;
        smallDisplay.textContent = displayNumber;
    }
    return;
}

numbers.forEach(function(number) {
    number.addEventListener('click', showDisplay);
})