const colorsNum = 4;
const gridX = 5;
const gridY = 5;

function colorGrid() {
  const gridOfColors = document.querySelector('#color-palette');
  for (let index = 0; index < colorsNum; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    gridOfColors.appendChild(color);
  }
}

colorGrid();

function giveColor() {
  const colorDivsArray = document.getElementsByClassName('color');
  colorDivsArray[0].style.backgroundColor = 'black';
  colorDivsArray[0].classList.add('selected');
  colorDivsArray[1].style.backgroundColor = 'maroon';
  colorDivsArray[2].style.backgroundColor = 'darkolivegreen';
  colorDivsArray[3].style.backgroundColor = 'darkcyan';
}

giveColor();

function createLines() {
  const gridOfPixels = document.querySelector('#pixel-board');
  for (let index = 0; index < gridY; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    gridOfPixels.appendChild(line);
  }
}

createLines();

function fillLines() {
  const linesArray = document.querySelectorAll('.line');
  for (let index = 0; index < linesArray.length; index += 1) {
    const line = linesArray[index];
    for (let index2 = 0; index2 < gridX; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

fillLines();
