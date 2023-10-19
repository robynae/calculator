let firstNumber;
let secondNumber;
let operator = '';

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
