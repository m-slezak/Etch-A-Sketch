

const divContainer = document.querySelector('#container');
let divs;

for(let i = 0; i < 256; i++){
    divs = document.createElement('div');
    divs.classList.add('.div-element')
    divs.setAttribute('style', 'border: solid 3px black')
    divContainer.appendChild(divs)
}




