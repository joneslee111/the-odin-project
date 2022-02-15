const container = document.querySelector('#container');
// container.textContent = 'This is a test';


for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
};
