(function(module) {
  var routes = {};
  routes.setMapping = function() {
    page.base('/');

    page('', homeController.index);
    page('about', aboutController.index);

    page();
  };
  routes.setMapping();
  module.routes = routes;
})(window);
