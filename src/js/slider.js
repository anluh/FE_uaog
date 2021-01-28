const $ = require('jquery');
import 'slick-carousel'

$( document ).ready(function() {
    // $('#project-slider').css('height', $(window).height() + 'px')

    $('#project-slider').on('init', function(){
        getSiblSlide();
    });

    $('#project-slider').on('afterChange', function(){
        getSiblSlide();
    });

    $('#project-slider').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToShow: 1,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
    })

    function getSiblSlide() {
        const prevSlide = $('#project-slider .slick-active').prev('.slick-slide');
        const nextSlide = $('#project-slider .slick-active').next('.slick-slide');
        const prevArrow = $('#projects .slick-prev');
        const nextArrow = $('#projects .slick-next');
        pasteArrowsElements(prevSlide, prevArrow);
        pasteArrowsElements(nextSlide, nextArrow);
    }

    function pasteArrowsElements(slide, arrow) {
        const img = slide.find('.js-slide-img').attr('src');
        const number = slide.find('.js-slide-number').text();
        const title = slide.find('.js-slide-title').text();
        arrow.find('.js-arrow-img').attr('src', img);
        arrow.find('.js-arrow-number').text(number);
        arrow.find('.js-arrow-title').text(title);
    }
}); 