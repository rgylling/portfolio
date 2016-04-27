(function(module) {
  var repos = {};
  repos.all = [];
  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/user/repos' +
            '?per_page=50' +
            '&sort=updated',
      type: 'GET',
      success: function(data) {
        repos.all = data;
        repos.all = repos.with('description');
        callback();
      }
    }
  );
  };
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
