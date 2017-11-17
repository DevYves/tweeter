//Wrapper that keeps functions from firing until the document has been loaded
$(document).ready(function() {

  $(".compose").on("click", function() {
    $(".new-tweet").slideToggle().find("textarea").focus();
  });

//Function which constructs the tweet HTML nodes by deconstructing the database
//object and converting them into html elements.
  function createTweetElement(tweetData){
    //function to convert date into days using UTC time
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

// Adds result of function createdTweets to top of HTML section .tweetsWrapper
//effectively adding the new tweet to the top of the page.
function renderTweets(tweets) {
  for(var tweet in tweets) {
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

//function to handle the POST request on the submission of tweets in the form box using Ajax to post new
//tweets in an asynchronous manner so that users do not need to refresh the page.
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

});




