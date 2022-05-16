

const divContainer = document.querySelector('#container');
let divs;

for( let i = 0; i<16; i++){
    divs = document.createElement('div');
    divs.classList.add('.div-element')
    divs.setAttribute('style', 'height: 100px', 'width: 100px', 'border: solid 3px black')
    divContainer.appendChild(divs)
    divs.innerHTML = "hello"
}




