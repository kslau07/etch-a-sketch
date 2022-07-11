// fixed height and width outer box
// if 10x10 or 25x25 or 100x100, somehow all cells will
// fit perfectly inside fixed outer box

// remove all old divs before populating new divs / calculations

const topBar = document.querySelector('.topBar')

const inputBox = document.createElement('input')
inputBox.setAttribute('type', 'text');
inputBox.setAttribute('value', 10);
inputBox.setAttribute("id", )


//<input type="text" value="10" id="textbox">
//<button id="newGrid">Generate new grid</button>
//<button id="clearGrid">Clear grid</button>




// const outerBox = document.createElement('div');
// container.appendChild(outerBox)
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

let toggleCellChangeType = 2;

function changeCellColor(event) {
  const randInt = () => Math.round(Math.random() * 255)
  const cellid = event.target.id

  // document.querySelector(`#${cellid}`).classList.add('changeCellColor') // Another way, use css page
  
  if (toggleCellChangeType == 1) {
    document.querySelector(`#${cellid}`).style.backgroundColor = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;
  } else if (toggleCellChangeType == 2) {
    document.querySelector(`#${cellid}`).style.backgroundColor = "rgb(0, 0, 0)";
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
    child.style.backgroundColor = "rgb( 255, 255, 255 )";
  }, 0)

}

// list.forEach(el => el.addEventListener('mouseout', removeColor))
//setTimeout(removeColor, 1000)

const btn = document.querySelector('button');
// btn.addEventListener('click', () => createGrid(10))
btn.addEventListener('click', createGrid)

const btnClearGrid = document.querySelector('#clearGrid')
btnClearGrid.addEventListener('click', clearGrid)



createGrid();