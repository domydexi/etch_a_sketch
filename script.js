const D_COLOR = '#b7b5e4';
const D_MODE = 'color';
const D_SIZE = 16;

let currentColor = D_COLOR;
let currentMode = D_MODE;
let currentSize = D_SIZE;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  activateButton(newMode);
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

const cPicker = document.getElementById('cPicker');
const colBtn = document.getElementById('colBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const clearBtn = document.getElementById('clBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

cPicker.onchange = (e) => setCurrentColor(e.target.value);
colBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  reloadGrid();
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
  clearGrid();
  setupGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = '';
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.addEventListener('mouseover', changeColor);
    grid.appendChild(gridElement);
  }
}

function changeColor(e) {
  if (currentMode === 'rainbow') {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  }
}

function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active');
  } else if (currentMode === 'color') {
    colBtn.classList.remove('active');
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active');
  } else if (newMode === 'color') {
    colBtn.classList.add('active');
  }
}

window.onload = () => {
  setupGrid(D_SIZE);
  activateButton(D_MODE);
}
