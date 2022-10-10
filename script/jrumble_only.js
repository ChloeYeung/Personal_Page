/* test 2 */
/*
(function($){  
	$.fn.textyle = function(options){
		var target = this;
		var targetTxt = target.contents();
		var defaults = {
					duration : 400,
					delay : 100,
					easing : 'swing',
					callback : null
				};
		var setting = $.extend(defaults, options);
		targetTxt.each(function(){
			var texts = $(this);
			if(this.nodeType === 3){
				mkspn(texts);
			}
		});
		function mkspn(texts){
			texts.replaceWith(texts.text().replace(/(\S)/g,'<span>$1</span>'));
		}
		return this.each(function(){
			var len = target.children().length;
			target.css('opacity',1);
			for (var i = 0; i < len; i++) {
				target.children('span:eq('+i+')')
				.delay(setting.delay*i)
				.animate({
					opacity : 1,
					top : 0,
					left : 0,
				},setting.duration,setting.easing,setting.callback);
			};
		});
	};
}( jQuery ));
*/


// test 3


// $('#rumble-element').jrumble();
// Initialize jRumble on Selector

$('#selfintro').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});


$('#selfintro1').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro1').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});



$('#selfintro2').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro2').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});
$('#selfintro3').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro3').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});


$('#selfintro4').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('#selfintro4').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});





$('#selfintro5').jrumble({
	speed: 10,
	x: 1,
	y: 1
});



var emojiStart = function () {
	$('#selfintro5').trigger('startRumble');
	setTimeout(emojiStop, 300);
};

var emojiStop = function () {
	$('#selfintro5').trigger('stopRumble');
	setTimeout(emojiStart, 300);
};

emojiStart();
/*// Initialize jRumble on Selector
$('#rumble-element').jrumble();

// Start rumble on element
$('#rumble-element').trigger('startRumble');

// Stop rumble on element
$('#rumble-element').trigger('stopRumble');
*/



$('.skillBorderCol').jrumble({
	speed: 20,
	x: 1,
	y: 0.2
});

$('.skillBorderCol').hover(function () {
	$(this).trigger('startRumble');
}, function () {
	$(this).trigger('stopRumble');
});