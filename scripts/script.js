const grid = document.querySelector(".container");
const makeGrid = (size)=>{
    
    for(let i = 0; i<size;i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
    }


}
let gridSize = 16*16;
makeGrid(gridSize);

const gridBlocks = document.querySelectorAll(".grid-element");
gridBlocks.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        item.classList.add("change-color");
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", ()=>{
    gridBlocks.forEach(item =>{
        item.classList.remove("change-color");
        
        
    })
    let entry;
    while(1){
        entry = prompt("What size should the grid have?");
        if(parseInt(entry)<=100) break;
        
    }
    
    grid.innerHTML="";
    makeGrid(entry*entry);
    
    grid.style.gridTemplateColumns = `repeat(${entry}, auto)`;
    grid.style.gridTemplateRows = `repeat(${entry}, auto)`;
    
    let gridBlock = document.querySelectorAll(".grid-element");
    gridBlock.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        item.classList.add("change-color");
    });
});
  


});


