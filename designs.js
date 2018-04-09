let color;
let pixelCanvas;
let tbody;
let $new;

// Select color input
$(document).ready(onLoad);

function onLoad() {
    console.log('JQ loaded');
    updateColor();
    //event listeners
    $('input:submit').on('click', makeGrid);
    $('#colorPicker').on('change', updateColor)
    $('#pixelCanvas').delegate('td','click',function(){
        $(this).toggleClass('selected');
     }); 

}

// Select size input


// When size is submitted by the user, call makeGrid()
function updateColor() {
    color = $('#colorPicker').val();
    console.log('updateColor resulted in this new color', color);
}
function makeGrid(event) {
    event.preventDefault();
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();
    console.log(height, width);
    for(let i = 0; i < height; ++i) {
        $('#pixelCanvas').append('<tr id="' + [i] + '">');
        for(let j = 0; j < width; ++j) {
            $('#' + [i]).append('<td></td>');
        }
    }
}