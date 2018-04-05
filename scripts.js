var span = $('span');
    span.each(function(index, element) {
});

//function which checks if the element is odd:
//span.each(function(index, element) {
//	if(index % 3 == 0) {
//		$(element).css('color', 'red');};});

//function which checks if the element is even:
//span.each(function(index, element) {
//	if(index % 2 == 0) {
//		$(element).css('color', 'red');};});
// Short method is:

$('span:even').css('color', 'red');
$('span:odd').css('color', 'blue');

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Do not click</button>';
    $(element).append(button);
});

$('button:even').css('background', 'yellow');
$('button:odd').css('background', 'red');

$('button').click(function(){
	alert($(this).attr('data-tmp'));
});
