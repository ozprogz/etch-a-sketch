const DEFAULT_SIZE = 16;

let defaultMode = true; 
let gridSize = DEFAULT_SIZE; 

const grid = document.querySelector(".container");
const clearButton = document.querySelector(".clear");
const rgbButton = document.querySelector(".rgb-button");
const blackButton = document.querySelector(".black-button");

makeGrid(gridSize);

clearButton.addEventListener("click", ()=>{
    clearGrid();     
    if(defaultMode==true){
        blackMode();
}   
    else rgbMode();
});

rgbButton.addEventListener("click", ()=>{
    rgbMode();
});


blackButton.addEventListener("click", ()=>{
   blackMode()
});

function addClass(){
    const gridBlocks = document.querySelectorAll(".grid-element");
    gridBlocks.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        item.classList.add("change-color");
        });
    }); 
}
function rgbMode(){
    defaultMode = false;
    const gridBlocks = document.querySelectorAll(".grid-element");
    gridBlocks.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        setRgb(item);
    });
});
}

function blackMode(){
    defaultMode = true;
    const gridBlocks = document.querySelectorAll(".grid-element");
    gridBlocks.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        item.style.backgroundColor = "black";

})})

}
function makeGrid(size) {
    let squared = size * size;
    for(let i = 0; i < squared; i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
    
    }
    addClass();

}

function setRgb(item){
    let max =256;
    let r = Math.floor(Math.random() * max);
    let g = Math.floor(Math.random() * max);
    let b = Math.floor(Math.random() * max);
    item.style.backgroundColor =`rgb(${r},${g},${b})`;
}

function clearGrid(){
    let entry;
    while(1){
        entry = parseInt(prompt("What size should the grid have? Enter a number between 1-100"));
        if(entry!=0 &&(entry <=100)) break;
    }

    grid.innerHTML="";
    makeGrid(entry);
    grid.style.gridTemplateColumns = `repeat(${entry}, auto)`;
    grid.style.gridTemplateRows = `repeat(${entry}, auto)`;
}
