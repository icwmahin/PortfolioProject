let display = document.getElementById("display");
let currentInput = "";
let lastOperator = "";
let resetDisplay = false;

function appendNumber(number) {
  if (resetDisplay) {
    currentInput = "";
    resetDisplay = false;
  }
  currentInput += number;
  updateDisplay(currentInput);
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
}

function appendOperator(operator) {
  if (lastOperator) {
    calculate();
  }
  currentInput += ` ${operator} `;
  lastOperator = operator;
  resetDisplay = false;
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "";
  lastOperator = "";
  updateDisplay("0");
}

function deleteLast() {
  if (currentInput) {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay(currentInput || "0");
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput.replace("%", "/100"));
    updateDisplay(currentInput);
    currentInput = currentInput.toString();
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

function updateDisplay(value) {
  display.textContent = value;
}
// **
