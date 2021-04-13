function blackSelected() {
  const black = document.getElementById('color1');
  black.classList.add('selected');
};

blackSelected();

const colors = document.querySelector('#color-palette');

function addClass(event) {
  const targetedClasses = event.target;
  const classes = document.getElementsByClassName('selected');
  for (let index = 0; index < classes.length; index += 1) {
    classes[index].classList.remove('selected');
  }
  targetedClasses.classList.add('selected');
}

const result = document.querySelector('#color-palette');
result.addEventListener('click', addClass);

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
