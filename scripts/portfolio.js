
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
      navbar = $('.navbar');
      tab = $('.tab');
      home = $('#fontchange');

    if (scrollPos > 520) {
      navbar.css('background-color','white');
      tab.css('color','black');
      navbar.css('border-bottom', "solid 1px grey")
      home.css('visibility','visible')
    } else {
      navbar.css('background-color','transparent');
      navbar.css('border-bottom', "none")
      tab.css('color','white');
      home.css('visibility','hidden')
    }
  });
});

$(document).ready(function (){
  $("#aboutme").on('click',function(e){
      e.preventDefault();
         $('html, body').animate({
              scrollTop: $(".aboutme").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
  $("#contact").on('click',function(e){
      e.preventDefault();
         $('html, body').animate({
              scrollTop: $(".contact").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
  $("#background").on('click',function(e){
      e.preventDefault();
         $('html, body').animate({
              scrollTop: $(".background").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
  $("#projects").on('click',function(e){
      e.preventDefault();
         $('html, body').animate({
              scrollTop: $(".projects").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
  $("#fontchange").on('click',function(e){
      e.preventDefault();
         $('html, body').animate({
              scrollTop: $("html").offset().top
        }, 1000);
    });
});
