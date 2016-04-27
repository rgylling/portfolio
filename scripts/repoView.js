(function(module) {
  var repoView = {};
  var ui = function() {
    var $about = $('#repoSection');
    $about.show();
  };
  var repoTemplate = $('#repo-template').html();
  var render = Handlebars.compile(repoTemplate);
  repoView.index = function() {
    ui();
    $('#repoSection').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
