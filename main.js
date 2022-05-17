

const divContainer = document.querySelector('#container');
let div;

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



