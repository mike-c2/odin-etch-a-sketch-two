const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;

function drawBoxes() {
  const gridSizeNumbers = document.querySelectorAll('.grid-size');
  const gridSize = +gridSizeNumbers[0].textContent;
  
  const drawContainer = document.getElementById('draw-container');
  const drawContainerSize = drawContainer.clientWidth;

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

    drawContainer.appendChild(newBox);
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