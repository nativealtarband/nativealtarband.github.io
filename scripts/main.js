$(document).ready(function(){
  function fullscreen(){
    $('.bx-wrapper, .bx-viewport, .bxslider, .background').css({
      height: ($(window).height() - $('.navbar').height())
    });
  }

  fullscreen();
  $(window).resize(function() {
    fullscreen();
  });

  $('.bxslider').bxSlider();
});
