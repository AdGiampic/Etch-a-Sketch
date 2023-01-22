function createGrid16 () {
    const divGrid = document.createElement('div'); // create square
    divGrid.setAttribute('style', 'border: 1px solid gray; width:40px; height: 40px'); // square has style
    divGrid.setAttribute('class', 'paint')
    for (let i = 1;i<=256; i++) { //test create square 5 times
        document.getElementById('board').appendChild(divGrid.cloneNode(true));
    }
}

createGrid16();

const color = document.querySelectorAll('.paint') // select every single item
color.forEach ((item) => { // cycle through the items
    item.addEventListener('mouseover' ,() => { // for each item I add a click event
        item.style.background = "black"
    })
})

function clearAll () {
    // convert the node list into an array
    Array.from(document.querySelectorAll('.paint'))
    .forEach((element) => element.style.background = 'white') //each element has white background
}
