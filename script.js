// fixed height and width outer box
// if 10x10 or 25x25 or 100x100, somehow all cells will
// fit perfectly inside fixed outer box

// remove all old divs before populating new divs / calculations

const outerBox = document.querySelector('.outerBox');

function createGrid() {

  removeAllCells() //remove old cells/nodes

  let numOfCellsOneSide = document.getElementById('textbox').value
  
  if (numOfCellsOneSide > 100) {
    numOfCellsOneSide = 100
  };
  
  let outerBoxWidth = 1000;
  let totalCells = numOfCellsOneSide ** 2;

  for (i = 1; i <= totalCells; i++) {

    const cellWidth = Math.floor(outerBoxWidth/numOfCellsOneSide)
    let div = document.createElement('div');

    div.setAttribute('id', `box${i}`);
    div.setAttribute('class', 'cell');
    div.style.height = `${cellWidth}px`;
    div.style.width = `${cellWidth}px`;
    outerBox.appendChild(div);
  }

  // set listener to each cell
  const nodeList = document.querySelectorAll('.cell')
  nodeList.forEach(cell => cell.addEventListener('mouseover', changeColor))
}

function removeAllCells() {
  const oldCells = document.querySelectorAll('.outerBox > *');

  oldCells.forEach(cell => {
    let child = document.getElementById(`${cell.id}`);
    outerBox.removeChild(child)
    // document.getElementById(`${cell.id}`).remove() // Second way to remove nodes
  })
}

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

function clearGrid() {
  const nodeList = document.querySelectorAll('.outerBox div')
  const array = Array.from(nodeList)
  
  array.reduce((total, n) => {
    const child = document.getElementById(`${n.id}`)
    child.style.backgroundColor = "rgb( 255, 255, 255 )";
  })

}

// list.forEach(el => el.addEventListener('mouseout', removeColor))
//setTimeout(removeColor, 1000)

const btn = document.querySelector('button');
// btn.addEventListener('click', () => createGrid(10))
btn.addEventListener('click', createGrid)

const btnClearGrid = document.querySelector('#clearGrid')
btnClearGrid.addEventListener('click', clearGrid)

createGrid();