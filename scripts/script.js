const makeGrid = (size)=>{
    const grid = document.querySelector(".container");
    for(let i = 0; i<size;i++){
        let gridBlock = document.createElement("div");
        gridBlock.classList.add("grid-element");
        grid.appendChild(gridBlock);
    }


}
let gridSize = 16*16;
makeGrid(gridSize);
