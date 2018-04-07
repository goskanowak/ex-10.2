$(function(){
    var span = $('span');
    span.each(function(index, element) {
    });

    $('span:even').css('color', 'red');
    $('span:odd').css('color', 'blue');

    var paragraphs = $('p');
    paragraphs.each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '">Do not click</button>';
        $(element).append(button);
    });

    $('button:even').css('background', 'yellow');
    $('button:odd').css('background', 'red');

    $('button').on('click', function(){
        alert($(this).attr('data-tmp'));
    });
})