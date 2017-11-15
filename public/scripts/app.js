/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// var tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }

function renderTweets(tweets) {
  for(var tweet in tweets) {
    console.log("tweet in loop :", tweets);
    console.log("hopefuly the object :", tweets[tweet]);
    var createdTweet = createTweetElement(tweets[tweet]);
    $('.tweetsWrapper').append(createdTweet);
  }
  return createdTweet;
}

// var tweet = createTweetElement(tweetData);

function createTweetElement(tweetData){
  var header = $('<header>')
         .append(`<img class="avatar" src="${tweetData.user.avatars.regular}">`)
         .append(`<h3 class="username">${tweetData.user.name}</h2>`)
         .append(`<span>${tweetData.user.handle}</span>`);
  var paragr = $(`<p>${tweetData.content.text}</p>`);
  var opendiv =$(`<div>`);
  var div = $('<div class="icons">')
         .append('<i class="fa fa-heart">')
         .append('<i class="fa fa-retweet">')
         .append('<i class="fa fa-flag">');
  var footer = $(`<footer>`)
         .append(`<span>${tweetData.created_at}</span>`)
         .append(div);

  var full = $('<article>')
         .append(header)
         .append(paragr)
         .append(footer);

  // $('.tweetsWrapper').append(full);

  return full;



}

// var tweets = renderTweets(data);


// createTweetElement(tweets);

renderTweets(data);

});

