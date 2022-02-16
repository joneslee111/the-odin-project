const container = document.querySelector('#container');
// container.textContent = 'This is a test';
let gridCount = prompt('How many squares would you like?');
console.log(gridCount);



function createGrid() {
  for (let i = 0; i < gridCount; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  };
};

createGrid();

// for (let rows = 0; rows < 16; rows++) {
//     for (let cols = 0; cols < 16; cols++) {
//       const grid = document.createElement('div');
//       grid.classList.add('grid');
//       container.appendChild(grid);
//     };
// };
