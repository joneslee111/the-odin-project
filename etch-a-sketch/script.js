const container = document.querySelector('#grid-container');
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

function changeGridSize(input) {
  if (input >= 2 && input <= 100) {
    createGrid(input);
  } else {
    console.log('Enter between 2 & 100');
  };
};

function squareColour() {
  if (colour === 'random') {
    // colour = getRandomColor();
    // colour 
    this.style.backgroundColor = darkerShade();

  } else if (colour === 'multi') {
    this.style.backgroundColor = getRandomColor();
  } else {
    this.style.backgroundColor = colour;
  };
};

function changeColour(choice) {
  colour = choice;
};

function darkerShade() {
  let test = 255;
  let background = ''
  for (i = 0; i < 26; i++) {
    background = `rgb(${test}, ${test}, ${test})`;
    test - 10;
  }; 
  console.log(test);
  console.log(background);
  return background;
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let randomColour = '#';
    for (let i = 0; i < 6; i++) {
      randomColour += letters[Math.floor(Math.random() * 16)];
    };
    return randomColour; 
};

function clearGrid() {
  let squares = container.querySelectorAll('div');
  squares.forEach((div) => div.style.backgroundColor = 'white');
};

// createGrid();

// function createGrid() {
//   for (let i = 0; i < gridCount; i++) {
//       const grid = document.createElement('div');
//       grid.classList.add('grid');
//       container.appendChild(grid);
//   };

// };

// const gridId = document.querySelector('.grid');

// container.addEventListener('mouseover', function (e) {
//   if (e.target.matches('.grid')) {
//     e.target.classList.add('active');
//     e.target.style.background = 'black';
//   }
// });


//   let element = document.querySelectorAll('.grid');

// const reset = document.querySelector('#clear');
// let activeGrids = document.querySelector('.grid');
// reset.addEventListener('click', function(activeGrids) {
//   activeGrids.style.background = 'white';

// });

// // const divs = document.querySelector('.grid');
// // divs.addEventListener('mouseover',
// // e => e.target.classList.add('my-colour-class')
// // );





// // for (let rows = 0; rows < 16; rows++) {
// //     for (let cols = 0; cols < 16; cols++) {
// //       const grid = document.createElement('div');
// //       grid.classList.add('grid');
// //       container.appendChild(grid);
// //     };
// // };
