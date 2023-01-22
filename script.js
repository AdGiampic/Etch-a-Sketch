function createGrid16 () {
    const divGrid = document.createElement('div'); // create square
    divGrid.setAttribute('style', 'border: 1px solid gray; width:40px; height: 40px'); // square has style
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
    let gridSize = 4 // prompt from 2 to 96
    let sq = 672 / gridSize
    let newStyle = 'border: 1px solid gray; width:' + sq + 'px; height: ' + sq + 'px'
    newGrid.setAttribute('style', newStyle);
    newGrid.setAttribute('class', 'paint')
    for (let i = 1;i<=gridSize; i++) { //test create square 5 times
        document.getElementById('board').appendChild(newGrid.cloneNode(true));
    }
}