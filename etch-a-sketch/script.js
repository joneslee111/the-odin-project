const container = document.querySelector('.grid-container');
let colour = 'black'

// this function creates a grid using gridTemplate
function createGrid(size) {
  let squares = container.querySelectorAll('div');
  squares.forEach((div) => div.remove());

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size * size;

for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.classList.add('grid-squares');
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', squareColour);
    container.insertAdjacentElement('beforeend', square);
  };
};

createGrid(16);

// this function ensures that the user enters a number between 2 & 100
//before creating a grid
function changeGridSize(input) {
  if (input >= 2 && input <= 100) {
    createGrid(input);
  } else {
    console.log('Enter between 2 & 100');
  };
};

// this function listens to the html file for a button press, 
// and depening on the button press it sets the colour variable
// as that choice
function changeColour(choice) {
  colour = choice;
};

// this function listens to the colour variable and depending
// on which colour has been set, it sets the background of 
// the sqaure to that colour
function squareColour() {
  if (colour === 'random') {
    colour = getRandomColor();
  } else if (colour === 'multi') {
    this.style.backgroundColor = getRandomColor();
  } else {
    this.style.backgroundColor = colour;
  };
};

// this function creates a random colour based on 6 of the 
// letters/numbers in 'letters' then sets randomColour as that
// randomised number/letters
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let randomColour = '#';
  for (let i = 0; i < 6; i++) {
    randomColour += letters[Math.floor(Math.random() * 16)];
  };
  return randomColour; 
};

// this function clears the grid by selecting all the divs
// and changes the background colour to white
function clearGrid() {
  let squares = container.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = 'white');
};
