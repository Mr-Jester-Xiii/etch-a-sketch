let grid = document.querySelector(".grid");

let columns = 16;
let rows = 16;

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

const btn16 = document.querySelector("#btn16");
btn16.addEventListener("click", () => {
  columns = 16;
  rows = 16;
  wipeGrid();
  drawGrid();
});

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

const resetbtn = document.querySelector("#resetbtn");
resetbtn.addEventListener("click", () => {
  grid.classList.add("shake");
  wipeGrid();
  drawGrid();
});

const custombtn = document.querySelector('#custombtn');
custombtn.addEventListener("click", () => {
  let custom = prompt("Please enter grid size. Max:150.", "");
  if (custom <= 150) {
  columns = custom;
  rows = custom;
  wipeGrid();
  drawGrid();
  } else {
    alert("Thats not gonna work. Try again")
  }
})

