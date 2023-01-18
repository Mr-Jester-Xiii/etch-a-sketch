let grid = document.querySelector(".grid");

let columns = 30;
let rows = 30;

for (let i = 0; i < columns; ++i) {
  let column = document.createElement("div");
  column.className = "column";
  for (let j = 0; j < rows; ++j) {
    let row = document.createElement("div");
    row.className = "row";
    column.appendChild(row);
  }
  grid.appendChild(column);
}
