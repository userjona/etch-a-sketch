let button = document.querySelector('#grindSize');
let grid = document.querySelector('#main');
let num = 16;


createGrid(num);
gridAlign();

button.addEventListener('click', () => {
    changeGridSize();
    createGrid(num);
    gridAlign();    
});


console.log(grid.children);


function createGrid(val){

    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    for (i = 0; i < val * val; i++) {
        let child = document.createElement('div');
        child.innerHTML = '';
        child.className = 'mini';
        grid.appendChild(child);
        child.style.border='1px solid gray'
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = 'yellow';
        })
    }
}

function changeGridSize(){
    let gridSize = prompt("1-100");
    num = parseInt(gridSize);
}

function gridAlign(){
    grid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
}
