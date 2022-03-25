function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
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
let display = 0;

let buttonSelect = document.querySelectorAll('.btn');
buttonSelect.forEach((btn) => {
  btn.addEventListener('click', whichButton)
});

function whichButton(button) {
  display += button;
  // console.log(display);
  populateDisplay(display);
};

// populate display
function populateDisplay(display) {
  let screenContainer = document.querySelector('.calc-screen');
  // let screenText = screenContainer.querySelector('.calc-text');
  screenContainer.textContent = display;
  // console.log(display);

}


// console.log(display);
