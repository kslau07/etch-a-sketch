// fixed height and width outer box
// if 10x10 or 25x25 or 100x100, somehow all cells will
// fit perfectly inside fixed outer box

// remove all old divs before populating new divs / calculations

const topBar = document.querySelector('.topBar')

const topBarTitle = document.createElement('div')
topBarTitle.setAttribute('id', 'topBarTitle');
topBarTitle.classList.add('content');
topBarTitle.textContent = "ETCH - A - SKETCH";

topBar.appendChild(topBarTitle)



const inputBox = document.createElement('input')
inputBox.setAttribute('type', 'range')
inputBox.setAttribute('min', 1)
inputBox.setAttribute('max', 50)
inputBox.setAttribute('value', 25);
inputBox.setAttribute("id", "slider")
inputBox.setAttribute('class', 'tool')

const buttonNewGrid = document.createElement('button');
buttonNewGrid.classList.add('content');
buttonNewGrid.textContent = "New Grid"
buttonNewGrid.addEventListener('click', createGrid);
buttonNewGrid.setAttribute('class', 'tool')

const buttonClearGrid = document.createElement('button');
buttonClearGrid.classList.add('text');
buttonClearGrid.textContent = "Clear Grid";
buttonClearGrid.addEventListener('click', clearGrid)
buttonClearGrid.setAttribute('class', 'tool')

const buttonToggleColor = document.createElement('button');
buttonToggleColor.classList.add("content");
buttonToggleColor.textContent = "Toggle Color";
buttonToggleColor.addEventListener('click', toggleColor)
buttonToggleColor.setAttribute('class', 'tool')

topBar.appendChild(inputBox);
topBar.appendChild(buttonNewGrid);
topBar.appendChild(buttonClearGrid);
topBar.appendChild(buttonToggleColor);


// const outerBox = document.createElement('div');
// container.appendChild(outerBox)
const outerBox = document.querySelector('.outerBox');

function createGrid() {

  removeAllCells() //remove old cells/nodes

  let numOfCellsOneSide = document.getElementById('slider').value


  
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
  nodeList.forEach(cell => cell.addEventListener('mouseover', changeCellColor))
}

function removeAllCells() {
  const oldCells = document.querySelectorAll('.outerBox > *');

  oldCells.forEach(cell => {
    let child = document.getElementById(`${cell.id}`);
    outerBox.removeChild(child)
    // document.getElementById(`${cell.id}`).remove() // Second way to remove nodes
  })
}

let toggleCellChangeType = 1;

function toggleColor() {
  if (toggleCellChangeType == 2) {
    toggleCellChangeType = 1;
  } else {
    toggleCellChangeType = 2;
  }
}

function changeCellColor(event) {
  const randInt = () => Math.round(Math.random() * 255)
  const cellid = event.target.id

  // document.querySelector(`#${cellid}`).classList.add('changeCellColor') // Another way, use css page
  
  if (toggleCellChangeType == 1) {
    document.querySelector(`#${cellid}`).style.backgroundColor = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;
  } else if (toggleCellChangeType == 2) {
    document.querySelector(`#${cellid}`).style.backgroundColor = "rgb(121, 141, 145)";
  }
}

function removeColor(event) {
  const key = event.target.id;
  document.querySelector(`#${key}`).style.backgroundColor = "";
}

function clearGrid() {
  const nodeList = document.querySelectorAll('.outerBox div')
  const array = Array.from(nodeList)
  
  // practice reduce, very flexible
  array.reduce((total, n) => {
    const child = document.getElementById(`${n.id}`)
    // child.style.backgroundColor = "rgb( 255, 255, 255 )";
    child.style.backgroundColor = "";
  }, 0)

}

createGrid();