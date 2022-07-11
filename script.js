// fixed height and width outer box
// if 10x10 or 25x25 or 100x100, somehow all cells will
// fit perfectly inside fixed outer box

const container = document.querySelector('.container');

function makeBox(val) {

  let outerBox = 1000;
  let totalCells = val ** 2;

  for (i = 1; i <= totalCells; i++) {

    const autoSize = Math.floor(outerBox/val)
    let div = document.createElement('div');

    div.setAttribute('id', `box${i}`);
    div.setAttribute('class', 'cell');
    div.style.height = `${autoSize}px`;
    div.style.width = `${autoSize}px`;
    container.appendChild(div); 
  }
}

makeBox(32);


function changeColor(event) {

  const randInt = () => Math.round(Math.random() * 255)
  
  const key = event.target.id
  // document.querySelector(`#${key}`).classList.add('changeColor')
  document.querySelector(`#${key}`).style.backgroundColor = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;
  // document.querySelector(`#${key}`).style.borderColor = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;
}

function removeColor(event) {
  const key = event.target.id;
  document.querySelector(`#${key}`).style.backgroundColor = "";
}

const list = document.querySelectorAll('.cell')
list.forEach(el => el.addEventListener('mouseover', changeColor))
// list.forEach(el => el.addEventListener('mouseout', removeColor))
//setTimeout(removeColor, 1000)

const btn = document.querySelector('button');
btn.addEventListener('click', () => makeBox(10))