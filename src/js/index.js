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

  // mobile menu 
  function openMobileMenu() {
    $('.js-menu-button').toggleClass('menu-button--opened');
    $('.js-nav').slideToggle();
    $('.js-menu-overlay').toggleClass('menu-overlay--active');
  }
  
  function scrollToBlock(e) {
    if($(e.target).hasClass('js-nav_link')) {
      let anchor = `#${$(e.target).data('id')}`;

      if ($(anchor).length < 1) return

      $('html, body').animate({
          scrollTop: $(anchor).offset().top
      }, 500);

      if ($('.js-menu-overlay').hasClass('menu-overlay--active')) {
        $('.js-menu-button').click();
      }
    }
  }

});
