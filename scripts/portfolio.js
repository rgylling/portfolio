
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
      navbar = $('.navbar');
      tab = $('.tab');

    if (scrollPos > 520) {
      navbar.css('background-color','white');
      tab.css('color','black');
      navbar.css('border-bottom', "solid 1px grey")
    } else {
      navbar.css('background-color','transparent');
      navbar.css('border-bottom', "none")
      tab.css('color','white');
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
//aboutme contact background projects
