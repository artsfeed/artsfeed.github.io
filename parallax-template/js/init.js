
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
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

$(document).ready(function(){
  run()
});

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


/*
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
  
  $(".carousel-goleft").click(function(){
    $('.carousel').carousel('prev');
  });
  $(".carousel-goright").click(function(){
    $('.carousel').carousel('next');
  });
  /*
  $(".carousel-goright").dblclick(function(){
    $('.carousel').carousel('next', 2);
  });
  */