var portData = [
  {
    title:'Project One',
    url:'www.hi.com',
    snapshot:'img/puppy1.jpg',
    body:'<p>This is where I talk about my project and stuff I will want to talk about how the project was so cool. This section right here will be where I do some cool things here. Maybe I even do some cooler things here you will never know will you. Okay thanks for listening. </p>'
  },
  {
    title:'Project Two',
    url:'www.who.com',
    snapshot:'img/puppy2.jpg',
    body:'</p>This is where I talk about my project and stuff I will want to talk about how the project was so cool. This section right here will be where I do some cool things here. Maybe I even do some cooler things here you will never know will you. Okay thanks for listening.  </p>'
  },
  {
    title:'Project Three',
    url:'www.me.com',
    snapshot:'img/puppy3.jpg',
    body:'<p>This is where I talk about my project and stuff I will want to talk about how the project was so cool. This section right here will be where I do some cool things here. Maybe I even do some cooler things here you will never know will you. Okay thanks for listening. </p>'
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
  var source = $('#articleInfo').html();
  var template = Handlebars.compile(source);
  return template(this);
};

portData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articleContainer').append(a.toHtml());
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
