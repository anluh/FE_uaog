const $ = require('jquery');
import 'slick-carousel'

let direction = null

$('#project-slider').on('init', function(){
    if (window.innerWidth > 767) {
        getSiblSlide();
    }
});

$('#projects').on('click', '.slick-next', function(){
    direction = 'next';
    $('#project-slider').slick('slickNext');
});

$('#projects').on('click', '.slick-prev', function(){
    direction = 'prev';
    $('#project-slider').slick('slickPrev');

});

$('#project-slider').on('beforeChange', function(){
    if (window.innerWidth > 767) {
        getSiblSlide();
    }
});

$('#project-slider').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToShow: 1,
    fade: true,
    arrows: false
})

function getSiblSlide() {
    let currentSlide = $('#project-slider .slick-active')
    if (direction === 'prev') {
        currentSlide = currentSlide.prev('.slick-slide');
    } else if (direction === 'next') {
        currentSlide = currentSlide.next('.slick-slide');
    }
    const prevSlide = currentSlide.prev('.slick-slide').length
        ? currentSlide.prev('.slick-slide') 
        : $('#project-slider .slick-slide').last();
    const nextSlide = currentSlide.next('.slick-slide').length 
        ? currentSlide.next('.slick-slide') 
        : $('#project-slider .slick-slide')[0];
    const prevArrow = $('#projects .slick-prev');
    const nextArrow = $('#projects .slick-next');
    pasteArrowsElements($(prevSlide), prevArrow);
    pasteArrowsElements($(nextSlide), nextArrow);
}

function pasteArrowsElements(slide, arrow) {
    const newImgSrc = slide.find('.js-slide-img').attr('src');
    const number = slide.find('.js-slide-number').text();
    const title = slide.find('.js-slide-title').text();
    // insert info to arrow preview
    const currentImg = arrow.find('.js-arrow-img')
    arrow.find('.js-arrow-number').text(number);
    arrow.find('.js-arrow-title').text(title);

    let newImg = $(currentImg[0]).clone()
    newImg.attr('src', newImgSrc).insertBefore(currentImg);
    currentImg.fadeOut(800, function() {
        $(this).remove();
    });
}