window.onload = function blackSelected() {
  document.getElementById('color1').classList.add('selected');
};

const colors = document.querySelector('#color-palette');

function selectedColor() {
  colors.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      color.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

selectedColor();

function colorPixels() {
  const targetedColor = document.getElementById('pixel-board');
  targetedColor.addEventListener('click', (event) => {
    const pixels = event.target;
    const actualColor = document.querySelector('.selected');
    if (pixels.className === 'pixel') {
      pixels.style.backgroundColor = actualColor.style.backgroundColor;
    }
  });
}

colorPixels();

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', () => {
  const squares = document.querySelectorAll('.pixel');
  for (let index = 0; index < squares.length; index += 1) {
    if (squares[index].style.backgroundColor === ['black', 'cyan', 'red', 'green']) {
      squares[index].style.backgroundColor === 'white';
    }
  }
});
