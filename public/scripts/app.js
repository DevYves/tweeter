/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {



  $(".compose").on("click", function() {
    $(".new-tweet").slideToggle().find("textarea").focus();
  });

  function createTweetElement(tweetData){
    const days = Math.floor((Date.now() - tweetData.created_at)/(1000 * 60 * 60 * 24));
    console.log(days);
  var header = $('<header>')
         .append(`<img class="avatar" src="${tweetData.user.avatars.regular}">`)
         .append(`<h3 class="username">${tweetData.user.name}</h2>`)
         .append(`<span>${tweetData.user.handle}</span>`);
  var paragr = $(`<p>`).text(`${tweetData.content.text}`);
  var opendiv =$(`<div>`);
  var div = $('<div class="icons">')
         .append('<i class="fa fa-heart">')
         .append('<i class="fa fa-retweet">')
         .append('<i class="fa fa-flag">');
  var footer = $(`<footer>`)
         .append(`<span>${days} days ago</span>`)
         .append(div);

  var full = $('<article>')
         .append(header)
         .append(paragr)
         .append(footer);

  return full;

}

function renderTweets(tweets) {
  for(var tweet in tweets) {
    console.log("tweet in loop :", tweets);
    console.log("hopefuly the object :", tweets[tweet]);
    var createdTweet = createTweetElement(tweets[tweet]);
    $('.tweetsWrapper').prepend(createdTweet);
  }
  return createdTweet;
}

function loadTweets() {
  $.getJSON('/tweets')
  .done((tweet) => {
    renderTweets(tweet);

  });

}

loadTweets();

function submitTweets(){
  $('#button').on('click', function(event){
    event.preventDefault();
  const $form = $(".textarea");
  if ($form.serialize().length <= 5){
    alert("Forms cannot be left empty!");
    return;
    } else if ($form.serialize().length > 145){
      alert("Please keep messages to 140 characters");
      return;
    }

  $.ajax({
    method: 'post',
    url:  '/tweets',
    data: $form.serialize()

  }).then(function(tweets){
      loadTweets(tweets);
      $form.val('');
      $('.counter').text(140);
    });
})

}

submitTweets();






// var tweet = createTweetElement(tweetData);
// function(){
// $(".compose").click(function(){
//     $(".newtweet").slideToggle(300);
// });
// }


});




