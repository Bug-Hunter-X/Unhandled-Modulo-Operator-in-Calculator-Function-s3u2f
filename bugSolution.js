function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero");
  }
  return a % b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    case '%':
      return modulo(a, b);
    default:
      throw new Error("Invalid operator");
  }
}

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 5, 3)); // Output: 2
console.log(operate('*', 5, 3)); // Output: 15
console.log(operate('/', 5, 3)); // Output: 1.6666666666666667
console.log(operate('%', 5, 3)); // Output: 2
console.log(operate('/', 5, 0)); // Throws an error