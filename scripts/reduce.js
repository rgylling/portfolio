//Counts the words in my body paragraphs
Article.numWordsAll = function() {
  console.log(Article.all);
  console.log('doesthiswork????????');
  return Article.all.map(function(article) {
    return article.body.split(' ').length;
    console.log('doesthisworknow');
  })
.reduce(function(a, b) {
  console.log(a+b + 'fduhdfghufd');
  return a+b;
});
};

//Appends the number of words in my body paragraphs
function timerOn () {
  $( document ).ready(function() {
    $('#reduce').text('fun fact, there are ' + Article.numWordsAll() + ' words in my articles!');
  });
};
window.setTimeout(timerOn, 10);
