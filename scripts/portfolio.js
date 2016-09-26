
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

$.fn.is_on_screen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

if( $('#charts').length > 0 ) { // if target element exists in DOM
	if( $('#charts').is_on_screen() ) { // if target element is visible on screen after DOM loaded

			 $('.html_chart').addClass('html');
			 $('.css_chart').addClass('css');
			 $('.js_chart').addClass('js');
			 $('.wordpress_chart').addClass('wordpress');
			 $('.ruby_chart').addClass('ruby');
			 $('.ps_chart').addClass('ps');
			 $('.git_chart').addClass('git');
			 $('.bootstrap_chart').addClass('bootstrap');
       $('.responsive_chart').addClass('responsive');
	} else {
			 $('.html_chart').removeClass('html');
			 $('.css_chart').removeClass('css');
			 $('.js_chart').removeClass('js');
			 $('.wordpress_chart').removeClass('wordpress');
			 $('.ruby_chart').removeClass('ruby');
			 $('.ps_chart').removeClass('ps');
			 $('.git_chart').removeClass('git');
			 $('.bootstrap_chart').removeClass('bootstrap');
       $('.responsive_chart').removeClass('responsive');
	}
}
$(window).scroll(function(){ // bind window scroll event
	if( $('#charts').length > 0 ) { // if target element exists in DOM
		if( $('#charts').is_on_screen() ) { // if target element is visible on screen after DOM loaded

			 $('.html_chart').addClass('html');
			 $('.css_chart').addClass('css');
			 $('.js_chart').addClass('js');
			 $('.wordpress_chart').addClass('wordpress');
			 $('.ruby_chart').addClass('ruby');
			 $('.ps_chart').addClass('ps');
			 $('.git_chart').addClass('git');
			 $('.bootstrap_chart').addClass('bootstrap');
       $('.responsive_chart').addClass('responsive');

		} else {

			 $('.html_chart').removeClass('html');
			 $('.css_chart').removeClass('css');
			 $('.js_chart').removeClass('js');
			 $('.wordpress_chart').removeClass('wordpress');
			 $('.ruby_chart').removeClass('ruby');
			 $('.ps_chart').removeClass('ps');
			 $('.git_chart').removeClass('git');
			 $('.bootstrap_chart').removeClass('bootstrap');
       $('.responsive_chart').removeClass('responsive');

		}
	}
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      // $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
