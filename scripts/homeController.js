(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('main section').show();
    $('section .aboutsection').css('display','none');
    $('#repoSection').css('display','none');
  };

  module.homeController = homeController;
})(window);
