function createGrid16 () {
    const divGrid = document.createElement('div'); // create square
    const styleCss = 'border: 1px solid gray; width:40px; height: 40px ; background-color: white' // square has style
    divGrid.setAttribute('style', styleCss); 
    divGrid.setAttribute('class', 'paint')
    for (let i = 1;i<=256; i++) { //test create square 5 times
        document.getElementById('board').appendChild(divGrid.cloneNode(true));
    }
}

createGrid16();

function paintBlack () {
    const color = document.querySelectorAll('.paint') // select every single item
    color.forEach ((item) => { // cycle through the items
        item.addEventListener('mouseover' ,() => { // for each item I add a click event
            item.style.background = "black"
        })
    })
}

paintBlack()

function clearAll () {
    // convert the node list into an array
    Array.from(document.querySelectorAll('.paint'))
    .forEach((element) => element.style.background = 'white') //each element has white background
}

function paintRandom () {
    const color = document.querySelectorAll('.paint') // select every single item
    color.forEach ((item) => { // cycle through the items
        item.addEventListener('mouseover' ,() => { // for each item I add a click event
            let R = Math.floor(Math.random() * 256); //red
            let G = Math.floor(Math.random() * 256); // green
            let B = Math.floor(Math.random() * 256); // blue
            item.style.background = "rgb(" + R + "," + G + "," + B + ")"
        })
    })
}

function newGrid () {
    Array.from(document.querySelectorAll('.paint')) 
    .forEach((item => item.remove())) //removes the current grid
    const newGrid = document.createElement('div');
    let gridSize = prompt ("Pick a number between 2 to 96 to adjust grid size") // prompt from 2 to 96
    if (gridSize === null) { // if nothing was picked use default value
        gridSize = 16;
    }
    if (gridSize < 2 && gridSize > 96) {
        throw new Error ('Number too small or high')
    }
    /*
    if (typeof 'gridSize' !== number) {
        throw new Error ('Please pick a number')
    }
    */
    let sq = (672 / gridSize) - 2
    let newStyle = 'border: 1px solid gray; width:' + sq + 'px; height: ' + sq + 'px ; background-color: white'
    newGrid.setAttribute('style', newStyle);
    newGrid.setAttribute('class', 'paint')
    for (let i = 1;i<=gridSize*gridSize; i++) { //test create square 5 times
        document.getElementById('board').appendChild(newGrid.cloneNode(true));
    }
    paintBlack();
}