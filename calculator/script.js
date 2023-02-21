let a = '';
let b = '';
let operator = '';
let answer = 0;
const buttonSelect = document.querySelector('.btn');
const screenContainer = document.querySelector('.calc-screen');

function add(a, b) {
  let parseA = parseFloat(a, 10);
  let parseB = parseFloat(b, 10); 
  if (answer === 0) {
    answer = parseA + parseB;
    console.log(answer);
    console.log(parseA);
    console.log(parseB); 
  } else {
    console.log(parseA);
    console.log(parseB);
    answer = answer + parseB;
    console.log(answer);
    return answer;
  }
};

function subtract(a, b) {
  let parseA = parseFloat(a, 10);
  let parseB = parseFloat(b, 10); 
  if (answer === 0) {
    answer = parseA - parseB;
    console.log(answer);
  } else {
    answer = answer - parseB;
    console.log(answer);
  };
};

function multiply(a, b) {
  let parseA = parseFloat(a, 10);
  let parseB = parseFloat(b, 10); 
  if (answer === 0) {
    answer = parseA * parseB;
    console.log(answer);
  } else {
    answer = answer * parseB;
    console.log(answer);
  }
};

function divide(a, b) {
  let parseA = parseFloat(a, 10);
  let parseB = parseFloat(b, 10); 
  if (answer === 0) {
    answer = parseA / parseB;
    console.log(answer);
  } else {
    answer = answer / parseB;
    console.log(answer);
  }
}

function operate(operator, a, b) {
  if (operator === add) {
    return add(a, b);
  } else if (operator === subtract) {
    return subtract(a, b);
  } else if (operator === multiply) {
    return multiply(a, b);
  } else if (operator === divide) {
    return divide(a, b);
  };
};

// pass the value of the button thats pressed to the display array
// then calls populateDisplay, whilst passing the display arr
function whichButton(button) {
  if ((operator == '+' ) || (operator == '-') | 
  (operator == '/' ) || (operator == 'x')) {
    screenContainer.textContent = '';
    b += button;
    screenContainer.textContent = b;
  } else {
    a += button;
    screenContainer.textContent = a;
  }
    console.log(a);
    console.log(operator);
    console.log(b);
};

function whichOperator(button) {
  solution();
  operator = button; 
}

function solution() {
  if (operator === '/' && b != '') {
    operate(divide, a, b);
    a = answer;
    b = '';
    screenContainer.textContent = answer;

  } else if (operator === 'x' && b != '') {
    operate(multiply, a, b);
    a = answer;
    b = '';
    screenContainer.textContent = answer;

  } else if (operator === '-' && b != '') {
    operate(subtract, a, b);
    a = answer;
    b = '';
    screenContainer.textContent = answer;

  } else if (operator === '+' && b != '') {
    operate(add, a, b);
    a = answer;
    b = '';
    screenContainer.textContent = answer;

  };
  // screenContainer.textContent = answer;
// console.log(operator);
}

// when AC is pressed, it resets all buttons pressed
function clearCalculator() {
  screenContainer.textContent = '';
  a = '';
  b = '';
  operator = '';
  answer = 0;
}
