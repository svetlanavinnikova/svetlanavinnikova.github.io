$(function(){
	$(document).on("click", ".menu-btn", function(){
	t1.reversed(!t1.reversed());
	$(container).addClass('hidden');
});
$(document).on("click", ".close-menu", function(){
	$(container).removeClass('hidden');
	t1.reversed(!t1.reversed());
});
});

//Greensock
var t1 = new TimelineMax({paused:true});
t1.to(".menu", 0.8, {
	autoAlpha: 1
});

t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1, {
	opacity: 0,
	y: 10,
	ease: Power3.easeInOut
}, 0.1);

t1.reverse();
