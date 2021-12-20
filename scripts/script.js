let black = true; 
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
        entry = parseInt(prompt("What size should the grid have? Enter a number between 1-100"));
        if(entry!=0 &&(entry <=100)) break;
    }
    
    grid.innerHTML="";
    makeGrid(entry*entry);
    
    grid.style.gridTemplateColumns = `repeat(${entry}, auto)`;
    grid.style.gridTemplateRows = `repeat(${entry}, auto)`;
    
    let gridBlock = document.querySelectorAll(".grid-element");
    if(black) 
    {   gridBlock.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        item.classList.add("change-color");
    });
});
}
    else {
        gridBlock.forEach( item =>{ item.addEventListener("mouseover", ()=>{
            generateRandomRgbValue(item);
        });
    });
    }       
});

const rgbButton = document.querySelector(".rgb-button");
rgbButton.addEventListener("click", ()=>{
    black = false;
    const test = document.querySelectorAll(".grid-element");
    test.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        generateRandomRgbValue(item);

    

})})})

const blackButton = document.querySelector(".black-button");
blackButton.addEventListener("click", ()=>{
    black = true;
    const test = document.querySelectorAll(".grid-element");
    test.forEach( item =>{ item.addEventListener("mouseover", ()=>{
        item.style.backgroundColor = "black";
    

})})})


function generateRandomRgbValue(item){
    let max =256;
    let r = Math.floor(Math.random() * max);
    let g = Math.floor(Math.random() * max);
    let b = Math.floor(Math.random() * max);
    item.style.backgroundColor =`rgb(${r},${g},${b})`;
}


