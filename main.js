const divContainer = document.querySelector("#container");
let div;
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const numberOfSquares = input.value * input.value;
const board = document.querySelectorAll(".div-element");

const inputValue = input.value;

allDivs.forEach((div) =>
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "black";
  })
);

function changeSize(inputValue) {
  makeSquare(inputValue);
}
function makeSquare(size) {
  let board = document.querySelectorAll(".div-element");
  board.forEach((div) => div.remove());
  divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < `${size * size}`; i++) {
    div = document.createElement("div");
    div.classList.add("div-element");
    div.setAttribute("style", "border: solid 1px black");
    divContainer.appendChild(div);
  }
}
btn.addEventListener("click", makeSquare);
