$(document).ready(function(){
var tweetArea = $('.thetweets');
var icons = $('.icons');
tweetArea.mouseenter(function(){
  tweetArea.css('opacity', 1);
  icons.css('opacity', 1);
});
tweetArea.mouseleave(function(){
  tweetArea.css('opacity', 0.9);
  icons.css('opacity', 0);
});
});

