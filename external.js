
let GRIDSIZE = 16;

let container = document.querySelector(".container");
for (let i = 0; i < GRIDSIZE; i++) {
    let row = document.createElement("div");
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