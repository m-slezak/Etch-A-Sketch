const inputField = document.querySelector("#input");
const divContainer = document.querySelector("#container");
let size;
let selectedColor;
let square;

const radioBtns = document.querySelectorAll('input[name="changeColor"]');
const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click", () => {
  for (const radioBtn of radioBtns) {
    if (radioBtn.checked) {
      selectedColor = radioBtn.value;
      console.log(selectedColor);
      break;
    }
  }
});

const btn = document.querySelector("#btn");

function changeSize(input) {
  size = inputField.value;
  if (size >= 2 && size <= 100) {
    makeSquare(size);
  } else {
    console.log("Too many, or not enough squares");
  }
}
function makeSquare(size) {
  let board = document.querySelectorAll(".div-element");
  board.forEach((square) => square.remove());
  divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < `${size * size}`; i++) {
    let board = document.querySelectorAll(".div-element");
    square = document.createElement("div");
    square.classList.add("div-element");
    square.setAttribute("style", "border: solid 1px black");
    square.addEventListener("mouseenter", chooseColor);

    divContainer.appendChild(square);
  }
}
function chooseColor(color) {
  if (selectedColor == "black") {
    let board = document.querySelectorAll(".div-element");
    board.forEach((square) =>
      square.addEventListener(
        "mouseenter",
        () => (square.style.backgroundColor = "black")
      )
    );
  }
  if (selectedColor === "erase") {
    let board = document.querySelectorAll(".div-element");
    board.forEach((square) =>
      square.addEventListener(
        "mouseenter",
        () => (square.style.backgroundColor = "white")
      )
    );
  }
  if (selectedColor === "random") {
    let board = document.querySelectorAll(".div-element");
    let randomColor = "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
    board.forEach((square) =>
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = randomColor;
      })
    );
  }
}
