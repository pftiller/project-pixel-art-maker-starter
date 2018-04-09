let color = $('#colorPicker').val();
let pixelCanvas;
let tbody;
let $new;

// Select color input
$(document).ready(onLoad);

function onLoad() {
    console.log('JQ loaded');
    //event listeners
    $('input:submit').on('click', makeGrid);
    $('#pixelCanvas').delegate('td','click',function(){
        $(this).toggleClass('selected');
     }); 

     console.log(color);
}

// Select size input


// When size is submitted by the user, call makeGrid()

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