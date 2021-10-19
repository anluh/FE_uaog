const $ = require('jquery');

const mainBlock = $('#main-info');
let $projectTopWrap = $('.js-project-top-wrap');
let projectDescrHeight = ($('.js-project-top').outerHeight());
let topBarHeight = $('.js-top-bar').outerHeight();

$(window).on('load', topInfoPosition);
$(window).on('resize', topInfoPosition);

function topInfoPosition() {
	console.log(657576)
	$projectTopWrap.css({
		height: `${projectDescrHeight}px`,
		marginTop: `-${projectDescrHeight + topBarHeight + 20}px`
	});
}

mainBlock.on('scroll', function() {
	let scroll = mainBlock.scrollTop();
	let blurcof = scroll < 1000 ? scroll : 1000;

	$('.js-background-img').css({
		filter: "blur(" + (blurcof/40) + "px)"
	});

	if ($(window).height() <= $projectTopWrap.offset().top + $projectTopWrap.height() + 20) {
		$('.js-project-top').addClass('projects-top--fixed');
	} else {
		$('.js-project-top').removeClass('projects-top--fixed');
	}	
});

$('.js-scroll-to-more').on('click', function() {
	mainBlock.animate({scrollTop: $(".js-project-top-wrap").offset().top - topBarHeight }, 500);
});

$('.js-show-projects-nav').on('click', function(){
	$('.js-projects-nav').addClass('projects-nav--show');
	$('body').addClass('projects-nav-shown')
});

$('.js-hide-projects-nav').on('click', function(){
	$('.js-projects-nav').removeClass('projects-nav--show');
	$('body').removeClass('projects-nav-shown')
});

