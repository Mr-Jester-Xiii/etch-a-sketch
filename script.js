let grid = document.querySelector(".grid");

let columns = 10;
let rows = 10;

// function changeColour() {
//     alert("Touch");
// }

function drawGrid() {
  for (let i = 0; i < columns; ++i) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < rows; ++j) {
      let cell = document.createElement("div");
      cell.className = "cell";
      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
}

function wipeGrid() {
  while (grid.hasChildNodes())
  grid.removeChild(grid.firstChild);
}

drawGrid();

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  wipeGrid();
});

