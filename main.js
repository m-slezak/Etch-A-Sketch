const inputField = document.querySelector("#input");
const divContainer = document.querySelector("#container");
let size;

const radioBtns = document.querySelectorAll('input[name="changeColor"]');
const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click", () => {
  let selectedColor;
  for (const radioBtn of radioBtns) {
    if (radioBtn.checked) {
      selectedColor = radioBtn.value;
      console.log(selectedColor);
      break;
    }
  }
});

// const btn = document.querySelector("#btn");

// function changeSize(input) {
//   size = inputField.value;
//   if (size >= 2 && size <= 100) {
//     makeSquare(size);
//   } else {
//     console.log("Too many, or not enough squares");
//   }
// }
// function makeSquare(size) {
//   let board = document.querySelectorAll(".div-element");
//   board.forEach((square) => square.remove());
//   divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//   divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//   for (let i = 0; i < `${size * size}`; i++) {
//     let board = document.querySelectorAll(".div-element");
//     const square = document.createElement("div");
//     square.classList.add("div-element");
//     square.setAttribute("style", "border: solid 1px black");
//     board.forEach((square) =>
//       square.addEventListener("mouseenter", () => {
//         square.setAttribute("style", "background-color: black");
//       })
//     );

//     divContainer.appendChild(square);
//   }
// }
