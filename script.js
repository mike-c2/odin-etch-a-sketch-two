const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;
const INCREMENT_OPACITY_SIZE = 0.1;

function drawBoxes() {
  const gridSizeNumbers = document.querySelectorAll('.grid-size');
  const gridSize = +gridSizeNumbers[0].textContent;
  
  const drawContainer = document.getElementById('draw-container');
  const drawContainerSize = drawContainer.clientWidth;

  while(drawContainer.firstChild) {
    drawContainer.removeChild(drawContainer.firstChild);
  }

  // Divide by 10 because 1rem === 10px
  const boxSize = (drawContainerSize / gridSize / 10) + 'rem';
  const numberOfBoxes = gridSize * gridSize;

  for(let i = 0; i < numberOfBoxes; i++) {
    const newBox = document.createElement('div');
    newBox.style.boxSizing = 'border-box';
    newBox.style.border = 'none';
    newBox.style.width = boxSize;
    newBox.style.height = boxSize;
    newBox.style.backgroundColor = 'black';
    newBox.style.opacity = 0;

    newBox.addEventListener('mouseover', incrementOpacity);

    drawContainer.appendChild(newBox);
  }
}

function incrementOpacity() {
  let currentOpacity = +this.style.opacity;
  
  this.style.opacity = Math.min(currentOpacity + INCREMENT_OPACITY_SIZE, 1);

  currentOpacity = +this.style.opacity;

  if(currentOpacity === 1) {
    this.removeEventListener('mouseover', incrementOpacity);
  }
}

function setGridSize() {
  const gridSizeNumbers = document.querySelectorAll('.grid-size');
  const newGridSize = getNewGridSize();

  gridSizeNumbers.forEach(gridSize => {
    gridSize.textContent = newGridSize;
  });
}

function getNewGridSize() {
  let newGridSize;

  do {
    newGridSize = +prompt(`Enter the new grid size, must be a number: ${MIN_GRID_SIZE} <= number <= ${MAX_GRID_SIZE}`);
  }
  while(isNaN(newGridSize) || newGridSize < MIN_GRID_SIZE || newGridSize > MAX_GRID_SIZE);

  return newGridSize;
}

drawBoxes();