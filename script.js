const D_SIZE = 16;
const D_MODE = 'color';
const D_COLOR = '#FFFFFF';

let currentColor = D_COLOR;
let currentMode = D_MODE;
let currentSize = D_SIZE;


function setColor(newColor){
    currentColor = newColor;
}

function setMode(newMode){
    unlockBtn(newMode);
    currentMode = newMode;
}

function setSize(newSize){
    currentSize = newSize;
}


let cPicker = document.getElementById("cPicker");
let colBtn = document.getElementById("colBtn");
const clearBtn = document.getElementById("clBtn");
let sizeValue = document.getElementById("sizeValue");
let slider = document.getElementById("slider");
const container = document.getElementById("container");

cPicker.onchange = (e) => setColor(e.target.value);

//Creates the grid
function makeGrid (size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < (size * size); i++) {
        const gridPiece = document.createElement("div");
        gridPiece.addEventListener("mouseover", colorChange);
        container.appendChild(gridPiece);
    };
};

function colorChange(event){

}

makeGrid(D_SIZE);