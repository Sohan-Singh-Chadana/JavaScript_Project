const rowsInput = document.querySelector("#rows");
const columsInput = document.querySelector("#columns");
const tableElement = document.querySelector("table");

let rows = +rowsInput.value;
let colums = +columsInput.value;

function createMatrix(rows, colums) {
  const matrix = Array.from(Array(rows), () => []);

  let count = 1;
  let direction = 1;
  let rowindex = 0;
  let columIndex = 0;

  while (columIndex < colums) {
    while (rowindex >= 0 && rowindex < rows) {
      matrix[rowindex][columIndex] = count++;
      rowindex += direction;
    }
    direction *= -1;
    rowindex += direction;
    columIndex += 1;
  }
  return matrix;
}

function generateTable(rows, colums) {
  const matrix = createMatrix(rows, colums);
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < colums; j++) {
      const cell = document.createElement("td");
      cell.textContent = matrix[i][j];
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  return fragment;
}

function updateTable() {
  tableElement.replaceChildren(generateTable(rows, colums));
}

rowsInput.addEventListener("change", () => {
  rows = +rowsInput.value;
  updateTable();
});
columsInput.addEventListener("change", () => {
  colums = +columsInput.value;
  updateTable();
});
updateTable();
