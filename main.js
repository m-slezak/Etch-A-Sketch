/*a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.*/


const divContainer = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = `Hey I'm red`;
para.setAttribute('styles', 'color: red;');
divContainer.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = `I'm a blue h3!`;
h3.style.color = 'blue';
divContainer.appendChild(h3);

const blackDiv = document.createElement('div');
blackDiv.setAttribute('styles', 'background: pink; border: black solid;');

const h1 = document.createElement('h1');
h1.textContent = `I'm in a div`
blackDiv.appendChild(h1);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';
blackDiv.appendChild(para2);

divContainer.appendChild(blackDiv)
