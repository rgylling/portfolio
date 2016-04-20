function wordCount(numbs) {
  return numbs.split(' ').length;

};

Article.numWordsAll = function() {
  console.log(Article.all);
  console.log('doesthiswork????????');
  return Article.all.map(function(article) {
    return wordCount(article.body); // Grab the words from the `article` `body`.
    console.log('doesthisworknow');
  })
.reduce(function(a, b) {
  console.log(a+b + 'fduhdfghufd');
  return a+b;// Sum up all the values!
});
};

function timerOn () {
$( document ).ready(function() {
    $('#reduce').text(Article.numWordsAll() + ' words in my articles');
});
};
window.setTimeout(timerOn, 500);
