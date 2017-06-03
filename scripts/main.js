$(document).ready(function(){
  function fullscreen(){
    $('.bx-wrapper, .bx-viewport, .bxslider, .background').css({
      height: ($(window).height() - $('.navbar').height())
    });
  }

  $('.bxslider').bxSlider({
    auto: false,
    // pause: 5000,
    infiniteLoop: true,
    // speed: 500,
    pager: false,
    mode: 'fade',
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500
  });

  fullscreen();
  $(window).resize(function() {
    fullscreen();
  });
});
