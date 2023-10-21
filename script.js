let firstNumber = '';
let displayNumber ='';
let operator = null;
let operatorClicked = false;

const mainDisplay = document.querySelector('.main-display');
const smallDisplay = document.querySelector('.small-display');
const numbers = document.querySelectorAll('.number');
const reset = document.querySelectorAll('.reset');
const operatorButton = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 == 0) {
        return 'Error';
    }
    return num1 / num2;
}

function operate(op, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  if(op === 'add') {
    return add(num1, num2);
  } else if(op === 'subtract') {
    return subtract(num1, num2);
  } else if(op === 'multiply') {
    return multiply(num1, num2);
  } else if(op === 'divide') {
    return divide(num1, num2);
  }
}

function showDisplay(event) {
    if(event.target.classList.contains('number')) {
        if(operatorClicked === true) {
            displayNumber = '';
            operatorClicked = false;
        }
        displayNumber += event.target.textContent;
        mainDisplay.textContent = displayNumber;
    }
    return;
}

function resetScreen(event) {
    if(event.target.classList.contains('allclear')) {
        smallDisplayNumber = '';
        displayNumber = '';
        mainDisplay.textContent = '';
        smallDisplay.textContent = '';
        firstNumber = '';
        secondNumber = '';
    } else if(event.target.classList.contains('clear')) {
        displayNumber = '';
        mainDisplay.textContent = '';
    }
    return;
}

function createDecimals() {
    if(mainDisplay.textContent === '') {
        mainDisplay.textContent = '0'
    }
    if(mainDisplay.textContent.includes('.')) {
        return;
    }
    displayNumber += '.';
    mainDisplay.textContent = displayNumber;
}

function addOperator(event) {
    if (operator !== null) {
      firstNumber = operate(operator, firstNumber, displayNumber);
      displayNumber = firstNumber.toString();
      mainDisplay.textContent = displayNumber;
      smallDisplay.textContent = `${firstNumber} ${event.target.textContent}`;
    } else {
      firstNumber = displayNumber;
      smallDisplay.textContent = displayNumber + ' ' + event.target.textContent;
    }
    operator = event.target.classList[0];
    operatorClicked = true;
    displayNumber = '';
  }

  function getAnswer() {
    if (operator !== null) {

      firstNumber = operate(operator, firstNumber, displayNumber);
      displayNumber = firstNumber.toString();
      mainDisplay.textContent = roundResult(displayNumber);
      smallDisplay.textContent = '';
      operator = null;
      operatorClicked = false;
    }
  }

  function roundResult(number) {
    return Math.round(number * 100) / 100;
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

equals.addEventListener('click', getAnswer);

decimal.addEventListener('click', createDecimals);