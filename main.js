const divContainer = document.querySelector('#container');
let div;
const btn = document.querySelector('#btn');
const input = document.querySelector('#input')
const numberOfSquares = (input.value * input.value);

btn.addEventListener('click', () =>{
    for(let i = 0; i < numberOfSquares; i++){
        div = document.createElement('div');
        div.classList.add('div-element')
        div.setAttribute('style', 'border: solid 3px black')
        divContainer.appendChild(div)
    }

})


for(let i = 0; i < 256; i++){
    div = document.createElement('div');
    div.classList.add('div-element')
    div.setAttribute('style', 'border: solid 3px black')
    divContainer.appendChild(div)
}

const allDivs = document.querySelectorAll('.div-element');

allDivs.forEach(div => div.addEventListener('mouseenter', () =>{
    div.style.backgroundColor = 'black';
}))



