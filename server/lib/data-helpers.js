"use strict";

module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function saveTweet(newTweet, callback) {
      db.collection("tweets").insert(newTweet);
      callback(null, true);
    },



    // Get all tweets in `db`, sorted by newest first
     getTweets: function getTweets(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }

      for (let tweet of tweets) {
        console.log(tweets);
      }
      callback(null, tweets);

    });


}
}
}