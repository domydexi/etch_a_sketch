const container = document.getElementById("container");

//Creates the grid
function makeGrid (rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

container.addEventListener("mouseover", function(event){
    event.target.classList.replace("grid-item", "color");
});

makeGrid(20,20);