const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;

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
