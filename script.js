function createGrid16 () {
    const divGrid = document.createElement('div'); // create square
    divGrid.setAttribute('style', 'border: 1px solid gray; width:40px; height: 40px'); // square has style
    for (let i = 1;i<=16; i++) { //test create square 5 times
        document.getElementById('board').appendChild(divGrid.cloneNode(true));
    }
}

createGrid16();