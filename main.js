const inputField = document.querySelector("#input");
const divContainer = document.querySelector("#container");
let size;

// const btn = document.querySelector("#btn");

function changeSize(input) {
  size = inputField.value;
  if (size >= 2 && size <= 100) {
    makeSquare(size);
  } else {
    console.log("Too many, too less squares");
  }
}
function makeSquare(size) {
  let board = document.querySelectorAll(".div-element");
  board.forEach((square) => square.remove());
  divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < `${size * size}`; i++) {
    let board = document.querySelectorAll(".div-element");
    const square = document.createElement("div");
    square.classList.add("div-element");
    square.setAttribute("style", "border: solid 1px black");
    board.forEach((square) =>
      square.addEventListener("mouseenter", () => {
        square.setAttribute("style", "background-color: black");
      })
    );

    divContainer.appendChild(square);
  }
}
