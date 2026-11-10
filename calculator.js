const display = document.getElementById('display');
let currentValue = '0';
let storedValue = null;
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
  display.value = currentValue;
}

function inputNumber(value) {
  if (shouldResetDisplay) {
    currentValue = value;
    shouldResetDisplay = false;
  } else {
    currentValue = currentValue === '0' ? value : currentValue + value;
  }

  updateDisplay();
}

function inputDecimal() {
  if (shouldResetDisplay) {
    currentValue = '0.';
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }

  if (!currentValue.includes('.')) {
    currentValue += '.';
    updateDisplay();
  }
}

function clearCalculator() {
  currentValue = '0';
  storedValue = null;
  operator = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function deleteLastDigit() {
  currentValue = currentValue.length <= 1 ? '0' : currentValue.slice(0, -1);
  updateDisplay();
}

function doCalculation(nextOperator) {
  const inputValue = Number(currentValue);

  if (storedValue === null) {
    storedValue = inputValue;
  } else if (operator) {
    const previousValue = storedValue;
    switch (operator) {
      case '+':
        storedValue = previousValue + inputValue;
        break;
      case '-':
        storedValue = previousValue - inputValue;
        break;
      case '*':
        storedValue = previousValue * inputValue;
        break;
      case '/':
        storedValue = previousValue / inputValue;
        break;
      default:
        break;
    }
  }

  operator = nextOperator;
  currentValue = String(storedValue);
  shouldResetDisplay = true;
  updateDisplay();
}

function calculateResult() {
  if (operator === null || storedValue === null) {
    return;
  }

  const inputValue = Number(currentValue);
  const previousValue = storedValue;

  switch (operator) {
    case '+':
      currentValue = String(previousValue + inputValue);
      break;
    case '-':
      currentValue = String(previousValue - inputValue);
      break;
    case '*':
      currentValue = String(previousValue * inputValue);
      break;
    case '/':
      currentValue = String(previousValue / inputValue);
      break;
    default:
      break;
  }

  storedValue = null;
  operator = null;
  shouldResetDisplay = true;
  updateDisplay();
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    const { value, action } = button.dataset;

    if (value !== undefined) {
      if (value === '.') {
        inputDecimal();
      } else {
        inputNumber(value);
      }
      return;
    }

    switch (action) {
      case 'clear':
        clearCalculator();
        break;
      case 'delete':
        deleteLastDigit();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        doCalculation(action);
        break;
      case '=':
        calculateResult();
        break;
      default:
        break;
    }
  });
});

updateDisplay();
