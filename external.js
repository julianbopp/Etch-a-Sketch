let container = document.querySelector(".container");

function createGrid(GRIDSIZE) {
    for (let i = 0; i < GRIDSIZE; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < GRIDSIZE; j++) {
            let div = document.createElement("div");
            div.classList.add("gridElement");
            row.appendChild(div);
     }
    }
    let grid = document.querySelectorAll(".gridElement");
    grid.forEach(element => element.addEventListener("mouseenter", function() {this.classList.add("hover")}));

    grid.forEach(element => element.addEventListener("mouseleave", function() {this.classList.remove("hover")}));

}

function removeGrid() {
    container.replaceChildren();
}


function sizeButtonClick() {
    let size = prompt("Input Grid Size");
    GRIDSIZE = Number(size);
    removeGrid();
    createGrid(GRIDSIZE);

}

createGrid(16);

let sizeButton = document.querySelector(".sizeButton")
sizeButton.addEventListener("click", sizeButtonClick);