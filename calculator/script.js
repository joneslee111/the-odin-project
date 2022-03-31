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
  } else {
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
    b = '';
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

// listens for button presses for the numbers 
// and calls whichButton function
// buttonSelect.addEventListener('click', whichButton);
// let buttonSelect = document.querySelectorAll('.btn');
// for (let i = 0; i < buttonSelect.length; i++) {
//   buttonSelect[i].addEventListener('click', whichButton);
// };


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
    console.log(b);
};

function whichOperator(button) {
  operator = button;
}

function solution() {
  if (operator === '/') {
    operate(divide, a, b);
    b = '';
  } else if (operator === 'x') {
    operate(multiply, a, b);
    b = '';
  } else if (operator === '-') {
    operate(subtract, a, b);
    b = '';
  } else if (operator === '+') {
    operate(add, a, b);
    b = '';
  };
// console.log(operator);
}