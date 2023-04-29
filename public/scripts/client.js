/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      console.log($tweet);
      $('#tweets-container').append($tweet);
    }
  }
  
  const createTweetElement = function(tweetData) {
    let $tweet = $(`
      <article class="tweet">
      <div class="tweet-header">
        <div class="tweet-display-name">
          <img src="${tweetData.user.avatars}" class="other-profile-pic">
          <h3>${tweetData.user.name}</h3>
        </div>
        <h3 class="username">${tweetData.user.handle}</h3>
      </div>
      <p class="tweet-padding">${tweetData.content.text}</p>
      <hr>
    <footer>
      <span class="tweet-padding">${tweetData.created_at}</span>
      <div class="icons-style">
        <a href="#">
          <i class="icon-style fa-solid fa-retweet fa-hover-hidden"></i>
          <i class="icon-style fa-solid fa-retweet fa-hover-show"></i>  
        </a>
        <a href="#">
          <i class="icon-style fa-solid fa-heart fa-hover-hidden"></i>
          <i class="icon-style fa-solid fa-heart fa-hover-show"></i>
        </a>
        <a href="#">
          <i class="icon-style fa-solid fa-flag fa-hover-hidden"></i>
          <i class="icon-style fa-solid fa-flag fa-hover-show"></i>
        </a>
      </div>
    </footer>
    </article>`);
  
    return $tweet;
  };
  
  renderTweets(data);
});
