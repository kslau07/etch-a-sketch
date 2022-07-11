// using javascript create a 16x16 square

const container = document.querySelector('.container');

for (i = 0; i < 32 ; i++) {

  let div = document.createElement('div');
  div.setAttribute('id', `box${i}`);
  div.setAttribute('class', 'cell');
  container.appendChild(div);
  
}



function changeColor(event) {
  const key = event.target.id
  document.querySelector(`#${key}`).classList.add('changeColor')
}

function removeColor(event) {
  const key = event.target.id;
  document.querySelector(`#${key}`).classList.remove('changeColor')
}

const list = document.querySelectorAll('.cell')
list.forEach(el => el.addEventListener('mouseover', changeColor))
list.forEach(el => el.addEventListener('mouseout', removeColor))