(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('nav li:first-child').click(function(){
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('main section').show();
      $('section .aboutsection').css('display','none');
    });
  };

  module.aboutController = aboutController;
})(window);
