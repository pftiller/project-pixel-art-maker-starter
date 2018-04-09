// variables;
let clicked;

// load jquery
$(document).ready(onLoad);

function onLoad() {
    console.log('JQ loaded');
    //event listeners
    $('input:submit').on('click', makeGrid);
    $('#pixelCanvas').on('click','td', function(){
            var color = clicked ? '#fff' : $('#colorPicker').val();
            $(this).css('background-color', color);
            clicked = !clicked;
    });

}

// functions
function makeGrid(event) {
    event.preventDefault();
    $('#pixelCanvas').empty();
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