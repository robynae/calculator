let firstNumber = 2;
let secondNumber = 1;
let operator = 'subtract';

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

