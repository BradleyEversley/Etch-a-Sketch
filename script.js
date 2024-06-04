 // Default grid dimension values
const gridSize = 400;
let cellNumber = 16;

// Set grid dimensions
const board = document.querySelector("#board");
const sliderContainer = document.querySelector("slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;
board.style.width = board.style.height = `${gridSize}px`;

 function setBgColor () {
    this.style.backgroundColor = 'blue';
 }

 function createGrid(cellNumber) {
    for (let i = 0; i < (cellNumber * cellNumber); i++) {
        const cell = document.createElement("div");

        cell.style.width = cell.style.height = `${(gridSize / cellNumber)}px`;
        cell.classList.add("cell");
        board.appendChild(cell);

        cell.addEventListener("mouseover" , setBgColor);
    }
 }

 function removeCells() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
 }    

//  event listener for changes in slider value
slider.oninput  = function() {
    let txt = `${this.value} x ${this.value}`; //captures current value of slider
    sliderValue.innerHTML = txt; //display grid size
    removeCells(); //clears current grid
    createGrid(this.value); //creates new grid with updated value
    }
 

 createGrid(16);