$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 100
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
    navbar = $('.navbar');

    if (scrollPos > 100) {
      navbar.fadeIn("slow");
    } else {
      navbar.fadeOut("slow");
    }
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

if( $('#charts').length > 0 ) {
	if( $('#charts').is_on_screen() ) {

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
	}
}
$(window).scroll(function(){
	if( $('#charts').length > 0 ) {
		if( $('#charts').is_on_screen() ) {
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
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
