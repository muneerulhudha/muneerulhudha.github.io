//setting height of image to fit inside the div.
$(function(){
  $('.homePage').css({ height: ($(window).innerHeight() - 100) });
  $(window).resize(function(){
    $('.homePage').css({ height: ($(window).innerHeight() - 100) });
  });
});
