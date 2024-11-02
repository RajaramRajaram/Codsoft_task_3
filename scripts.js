let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = ''; 
  }
  currentInput += value;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  display.innerText = currentInput;
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || '0';
  display.innerText = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  display.innerText = currentInput;
}
