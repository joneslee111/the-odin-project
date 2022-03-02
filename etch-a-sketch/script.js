const container = document.querySelector('#container');

// Use this to ask the player how many squares
// or provide an option of squares as buttons
// let gridCount = prompt('How many squares would you like?');
// console.log(gridCount);
let gridCount = 256;

createGrid();

function createGrid() {
  for (let i = 0; i < gridCount; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  };
};

const gridId = document.querySelector('.grid');

container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.grid')) {
    e.target.classList.add('.active');
    e.target.style.background = 'black';
  }
});


// const divs = document.querySelector('.grid');
// divs.addEventListener('mouseover',
// e => e.target.classList.add('my-colour-class')
// );





// for (let rows = 0; rows < 16; rows++) {
//     for (let cols = 0; cols < 16; cols++) {
//       const grid = document.createElement('div');
//       grid.classList.add('grid');
//       container.appendChild(grid);
//     };
// };
