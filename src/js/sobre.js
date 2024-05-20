//-------------------------------------------------------------------//
//DOUBLE CLICK PARA CORES

let colors = ['#dfdfdf', '#4c8da2', '#54b5d8'];
let colorIndex = 0;

document.body.style.backgroundColor = colors[colorIndex]; // Define a cor inicial

document.body.addEventListener('dblclick', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
});