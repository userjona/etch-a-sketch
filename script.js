let buttonSize = document.querySelector('.size');
let buttonClear = document.querySelector('.clear');
let colorPicker = document.querySelector('.colorpicker');
let grid = document.querySelector('#main');
let num = 16;
let currentColor = "#ffff00";

createGrid(num);
gridAlign();

buttonSize.addEventListener('click', () => {
    changeGridSize();
    createGrid(num);
    gridAlign();
});

buttonClear.addEventListener('click', () => {
    clearButton();
});


colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
});

function createGrid(val) {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (i = 0; i < val * val; i++) {
        let child = document.createElement('div');
        child.innerHTML = '';
        child.className = 'mini';
        grid.appendChild(child);
        child.style.border = '1px solid gray'
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = currentColor;
        });
    }
}

function changeGridSize() {
    let gridSize = prompt("1-100");
    num = parseInt(gridSize);
}

function gridAlign() {
    grid.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
}

function clearButton() {
    let miniBox = grid.children;

    for (i = 0; i < miniBox.length; i++) {
        miniBox[i].style.backgroundColor = 'white';
    }
}

function colorButton() {
    let miniBox = grid.children;

    for (i = 0; i < miniBox; i++) {
        miniBox[i].addEventListener('mouseenter', () => {
            miniBox[i].style.backgroundColor = currentColor;
        });
    }
}
