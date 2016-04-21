//IFFY containing my javascript
(function(module) {

  module.Article = Article; //making Article viewable outside the IIFE

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
  //$('section .aboutsection').css('display','none');


  function useNext(next) {
    var aboutSection = $('section .aboutsection');

    next(aboutSection);

    console.log('everything loaded');
  }

  function hideAbout(s){ s.css('display','none'); };


  useNext(hideAbout);








//Shows about section and hides portfolio section
  $('nav li:nth-child(2)').click(function() {
    $('section .aboutsection').show();
    $('main section').css('display','none');
    $('html, body').animate({
      scrollTop: $('section .aboutsection').offset().top
    }, 300);
  });

//Shows portfolio section and hides about me section
  $('nav li:first-child').click(function(){
    $('main section').show();
    $('section .aboutsection').css('display','none');
  });
})(window);
