const $ = require('jquery');

let projectDescrHeight = ($('.js-project-top').outerHeight());
let topBarHeight = $('.js-top-bar').outerHeight();

$(window).on('load', function() {
	

	$('.js-project-top-wrap').css({
		height: `${projectDescrHeight}px`,
		marginTop: `-${projectDescrHeight + topBarHeight + 10}px`
	});
});

$('#main-info').on('scroll', function() {
	let scroll = $(window).scrollTop();
	let blurcof = scroll < 1000 ? scroll : 1000;

	$('.js-background-img').css({
		filter: "blur(" + (blurcof/40) + "px)"
	});

	if ($(window).scrollTop() + $(window).height() < $('.js-project-top-wrap').offset().top + $('.js-project-top-wrap').height()) {
		$('.js-project-top').addClass('projects-top--fixed');
	} else {
		$('.js-project-top').removeClass('projects-top--fixed');
	}	
});

$('.js-scroll-to-more').on('click', function() {
	$('#main-info').animate({scrollTop: $(".js-project-top-wrap").offset().top - topBarHeight }, 500);
});