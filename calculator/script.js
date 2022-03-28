function add(a, b) {
  console.log(a + b);
  answer = a + b;
};

function subtract(a, b) {
  console.log(a-b);
  return a - b;
};

function multiply(a, b) {
  console.log(a*b);
  return a * b;
};

function divide(a, b) {
  console.log(a/b);
  return a / b;
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
let a = [];
let b = [];
let operator = '';
let answer = 0;

// listens for button presses for the numbers 
// and calls whichButton function
let buttonSelect = document.querySelector('.btn');
// buttonSelect.addEventListener('click', whichButton);
// let buttonSelect = document.querySelectorAll('.btn');
// for (let i = 0; i < buttonSelect.length; i++) {
//   buttonSelect[i].addEventListener('click', whichButton);
// };


// pass the value of the button thats pressed to the display array
// then calls populateDisplay, whilst passing the display arr
function whichButton(button) {
  let screenContainer = document.querySelector('.calc-screen');

  if (operator == '+' ) {
    screenContainer.textContent = '';
    b += button;
    screenContainer.textContent = b;
  } else {
    a += button;
    screenContainer.textContent = a;
  }
    console.log(a);
    console.log(b);
  // populateDisplay(a, b);
};

// takes in the display arg and does some dom manipulation
// selects the calc-screen class and ands the display value as text
// function populateDisplay(a, b) {
//   let screenContainer = document.querySelector('.calc-screen');
//   screenContainer.textContent = a;

// };

// 
function whichOperator(button) {
  // let a = 5;
  // let b = 5;
  operator = button;

}

function solution() {
  if (operator === '/') {
    operate(divide, 5, 5);
  } else if (operator === 'x') {
    operate(multiply, 5, 5);
  } else if (operator === '-') {
    operate(subtract, 5, 5);
  } else if (operator === '+') {
    operate(add, a, b);
  };
// console.log(operator);
}