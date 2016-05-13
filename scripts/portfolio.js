




jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
      navbar = $('.navbar');

    if (scrollPos > 530) {
      navbar.css('background-color','white');
      navbar.css('border-bottom', "solid 1px grey")
    } else {
      navbar.css('background-color','transparent');
      navbar.css('border-bottom', "none")
    }
  });
});
