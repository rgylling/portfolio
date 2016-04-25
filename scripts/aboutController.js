(function(module) {
  var articlesController = {};
  articlesController.index = function() {
    $('nav li:nth-child(2)').click(function() {
      $('section .aboutsection').show();
      $('main section').css('display','none');
      $('html, body').animate({
        scrollTop: $('section .aboutsection').offset().top
      }, 300);
    });
  };

  module.articlesController = articlesController;
})(window);
