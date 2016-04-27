
//function constructor
  function Article (opts) {
    this.title = opts.title;
    this.url = opts.url;
    this.snapshot = opts.snapshot;
    this.body = opts.body;
  }

  Article.all = [];

//handlebar template
  Article.prototype.toHtml = function() {
    var source = $('#articleInfo').html();
    var template = Handlebars.compile(source);
    return template(this);
  };

//Put my for each into a function

  Article.loadAll = function (rawData) {
    Article.all = rawData.map(function(ele) {
      return new Article(ele);
    });
  };


//Grab json file and append it to the page
  Article.fetchAll = function() {
    var getJason = jQuery.getJSON('../data/data.json', function(data){
      Article.loadAll(data);
      Article.all.forEach(function(a){
        $('#articleContainer').append(a.toHtml());
        console.log('json loaded');
      });
    });
  };


//Hides about section when user comes to the page
$('repoSection').css('display','none');

  $('section .aboutsection').css('display','none');
