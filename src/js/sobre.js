//-------------------------------------------------------------------//
//DOUBLE CLICK PARA CORES

let colors = ['#dfdfdf', '#add8e6', '#9bedd8'];
let colorIndex = 0;

document.body.style.backgroundColor = colors[colorIndex]; // Define a cor inicial

document.body.addEventListener('dblclick', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
});