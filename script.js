// using javascript create a 16x16 square

const container = document.querySelector('.container');

const box = document.createElement('div');
box.classList.add('content');
box.textContent = "Hello world!"
container.appendChild(box)