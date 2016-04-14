var portData = [
  {
    title:'Project One',
    url:'www.hi.com',
    snapshot:'"img/puppy1.jpg"',
    body:'<p>This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff </p>'
  },
  {
    title:'Project Two',
    url:'www.who.com',
    snapshot:'img/puppy2.jpg',
    body:'</p>This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff  This is where I talk about my project and stuff  </p>'
  },
  {
    title:'Project Three',
    url:'www.me.com',
    snapshot:'img/puppy3.jpg',
    body:'<p>This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk    about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff This is where I talk about my project and stuff </p>'
  },
];


var articles = [];

function Article (opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.snapshot = opts.snapshot;
  this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.find('h1').text(this.title);
  $newArticle.find('img').attr('src',this.snapshot);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.removeClass('template');
  return $newArticle;
};

portData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});


$('section .aboutsection').css('display','none');

//$('nav').on('click',function(){
$('nav li:nth-child(2)').click(function() {
  $('section .aboutsection').show();
  $('main section').css('display','none');
  $('html, body').animate({
    scrollTop: $('section .aboutsection').offset().top
  }, 300);
});
$('nav li:first-child').click(function(){
  $('main section').show();
  $('section .aboutsection').css('display','none');
});
//});
