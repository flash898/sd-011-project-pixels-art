const blackColor = document.querySelector('#black');
blackColor.classList.add('selected');

const blueColor = document.querySelector('#blue');
const greenColor = document.querySelector('#green');
const yellowColor = document.querySelector('#yellow');

function selectBlackColor() {
  blueColor.classList.remove('selected');
  greenColor.classList.remove('selected');
  yellowColor.classList.remove('selected');
  blackColor.classList.add('selected');
}
blackColor.addEventListener('click', selectBlackColor);

function selectBlueColor() {
  greenColor.classList.remove('selected');
  yellowColor.classList.remove('selected');
  blackColor.classList.remove('selected');
  blueColor.classList.add('selected');
}
blueColor.addEventListener('click', selectBlueColor);

function selectGreenColor() {
  blueColor.classList.remove('selected');
  yellowColor.classList.remove('selected');
  blackColor.classList.remove('selected');
  greenColor.classList.add('selected');
}
greenColor.addEventListener('click', selectGreenColor);

function selectYellowColor() {
  blueColor.classList.remove('selected');
  greenColor.classList.remove('selected');
  blackColor.classList.remove('selected');
  yellowColor.classList.add('selected');
}
yellowColor.addEventListener('click', selectYellowColor);
