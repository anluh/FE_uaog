const $ = require('jquery');

// import icons for svg sprite
  
function requireAll(r) {
    r.keys().forEach(r);
  }
  
requireAll(require.context('../icons/', true, /\.svg$/));

$( document ).ready(function() {

  // add eventListeners

  $('.js-menu-button').on('click', openMobileMenu);
  $('.js-nav').on('click', scrollToBlock);
  $('.js-bottom-arrow').on('click', scrollDown);
  $(window).on('scroll', fixHeader);

  // mobile menu 
  function openMobileMenu() {
    $('.js-menu-button').toggleClass('menu-button--opened');
    $('body').toggleClass('body--menu-opened');
    $('.js-nav').slideToggle();
    $('.js-green-overlay').toggleClass('green-overlay--active');
  }
  
  function scrollToBlock(e) {
    if($(e.target).hasClass('js-nav_link')) {
      let anchor = `#${$(e.target).data('id')}`;

      if ($(anchor).length < 1) return

      $('html, body').animate({
          scrollTop: $(anchor).offset().top
      }, 500);

      if ($('.js-green-overlay').hasClass('green-overlay--active')) {
        $('.js-menu-button').click();
      }
    }
  }

  function scrollDown() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 500);
  }

  function fixHeader() {
      let scroll = $(window).scrollTop(),
        header = $('.js-main-header'),
        stopPoint = header.position().top + header.outerHeight(true);
          
      if (scroll >= stopPoint) {
        header.addClass('main-header--fixed');
      } else {
        header.removeClass('main-header--fixed');
        
      }
  }

});
