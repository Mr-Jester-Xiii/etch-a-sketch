let grid = document.querySelector(".grid");

let columns = 32;
let rows = 32;

function drawGrid() {
  for (let i = 0; i < columns; ++i) {
    let column = document.createElement("div");
    column.className = "column";
    for (let j = 0; j < rows; ++j) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = 'black';
      })
      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
}

function wipeGrid() {
  while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);
}

drawGrid();

const btn32 = document.querySelector("#btn32");
btn32.addEventListener("click", () => {
  columns = 32;
  rows = 32;
  wipeGrid();
  drawGrid();
});

const btn64 = document.querySelector("#btn64");
btn64.addEventListener("click", () => {
  columns = 64;
  rows = 64;
  wipeGrid();
  drawGrid();
});

const btn128 = document.querySelector("#btn128");
btn128.addEventListener("click", () => {
  columns = 128;
  rows = 128;
  wipeGrid();
  drawGrid();
});

const resetbtn = document.querySelector("#resetbtn");
resetbtn.addEventListener("click", () => {
  wipeGrid();
  drawGrid();
});

