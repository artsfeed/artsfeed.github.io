(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
  }); // end of document ready
})(jQuery); // end of jQuery name space


$('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function(){
  var carousel_interval = 2500;
  $('.carousel').carousel();
  var int;
  function run(){
      int = setInterval(function()
      { 
          $('.carousel').carousel('next');
      }, carousel_interval);
  }
  function stop(){
  clearInterval(int);
  }
  $('.carousel').hover(stop, run);     
  }); 