
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    run();
    $('ul.tabs').tabs({swipeable: true});
  }); // end of document ready
})(jQuery); // end of jQuery name space


$('.carousel.carousel-slider').carousel({fullWidth: true});
var int;
var time = 5000;
var timeout = 15000

function run(){
  stop()
  int = setInterval(function()
  { 
      $('.carousel').carousel('next');
  }, time);
}

function runback(){
  stop()
  int = setInterval(function()
  { 
      $('.carousel').carousel('prev');
  }, time);
}

function stop(){
clearInterval(int);
}

$('.carousel').hover(stop, run);

$(".carousel-goleft").click(function(){
  stop()
  $('.carousel').carousel('prev');
  setTimeout(function(){
    runback()
  }, timeout);
});

$(".carousel-goright").click(function(){
  stop()
  $('.carousel').carousel('next');
  setTimeout(function(){
    run()
  }, timeout);
});