(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('nav li:first-child').click(function(){
      $('main section').show();
      $('section .aboutsection').css('display','none');
    });
  };

  module.aboutController = aboutController;
})(window);
