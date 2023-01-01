




const wrapper = document.getElementById("tiles");
let columns = Math.floor(document.body.clientWidth / 100);
    rows = Math.floor(document.body.clientHeight / 100);

const createTile = index =>{
    const tile = document.createElement("div");

    tile.classList.add("tile");

    return tile;
}

const createTiles = quantity=> {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / 100);
    rows = Math.floor(document.body.clientHeight / 100);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    
    createTiles(columns * rows);
}

createGrid();
window.onresize = () => createGrid();