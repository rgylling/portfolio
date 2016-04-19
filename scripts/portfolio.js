//empty array that holds my objects
var articles = [];

//function constructor
function Article (opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.snapshot = opts.snapshot;
  this.body = opts.body;
}

//handlebar template
Article.prototype.toHtml = function() {
  var source = $('#articleInfo').html();
  var template = Handlebars.compile(source);
  return template(this);
};

//Put my for each into a function
Article.loadAll = function (rawData) {
  portData.forEach(function(ele) {
    articles.push(new Article(ele));
  });
};

//Grab json file and append it to the page
Article.fetchAll = function() {
  var getJason = jQuery.getJSON('../data/data.json', function(data){
    Article.loadAll(data);
    articles.forEach(function(a){
      $('#articleContainer').append(a.toHtml());
    });
  });
};

//Hides about section when user comes to the page
$('section .aboutsection').css('display','none');

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
