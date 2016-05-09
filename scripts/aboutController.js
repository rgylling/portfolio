(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('section .aboutsection').show();
    $('main section').css('display','none');
    $('#project').css('display','none');
    $('html, body').animate({
      scrollTop: $('section .aboutsection').offset().top
    }, 300);
    repos.requestRepos(repoView.index);
  };
  module.aboutController = aboutController;
})(window);
