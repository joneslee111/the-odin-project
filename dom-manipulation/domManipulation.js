//  Using DOM manipulation to create a p element called redText
// style it red and add some text content
const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.classList.add('redText');
redText.style.color = 'red';
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

// create a h3 element
// style it blue and add some text content
const blueHeader = document.createElement('h3');
blueHeader.classList.add('blueHeader');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I'm a blue h3!";

container.appendChild(blueHeader);

// create a div with a black border and pink background color, with:
// another h1 that has some text
// a p that has some text
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'pink';
newDiv.style.borderWidth = '5px';
newDiv.style.borderStyle = 'solid';
newDiv.style.borderColor = 'black';

const headerText = document.createElement('h1');
headerText.classList.add('headerText');
headerText.textContent = "I'm in a div";
newDiv.appendChild(headerText);

const meToo = document.createElement('p');
meToo.classList.add('meTooText');
meToo.textContent = "ME TOO!";
newDiv.appendChild(meToo);


newDiv.classList.add('newDiv');
container.appendChild(newDiv);
