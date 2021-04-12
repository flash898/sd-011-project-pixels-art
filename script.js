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

const paintBoard = document.getElementById('pixel-board');

paintBoard.addEventListener('click', (event) => {
  const realColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = realColor;
  }
});

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', function() {
  const squares = document.querySelectorAll('.pixel')
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = 'white';
  }
});
