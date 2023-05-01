
// Fake data taken from initial-tweets.json

$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const renderTweets = function(tweets) {
    //prevents duplicate tweets when calling load tweets
    $("#tweets-container").html(" ");

    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  }
  
  const createTweetElement = function(tweetData) {
    let createdAt = timeago.format(tweetData.created_at);
    const safeHTML = `${escape(tweetData.content.text)}`;

    let $tweet = $(`
      <article class="tweet">
      <div class="tweet-header">
        <div class="tweet-display-name">
          <img src="${tweetData.user.avatars}" class="other-profile-pic">
          <h3>${tweetData.user.name}</h3>
        </div>
        <h3 class="username">${tweetData.user.handle}</h3>
      </div>
      <p class="tweet-padding">${safeHTML}</p>
      <hr>
    <footer>
      <span class="tweet-padding">${createdAt}</span>
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

  const loadTweets = function() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
    }).then((result) => {
      renderTweets(result);
    }).catch((error) => {
      console.log("ERROR: ", error.message);
    })
  }

  loadTweets();



  $("#tweet-text").submit(function(event) {
    event.preventDefault();
    $("#empty").slideUp();
    $("#long-error").slideUp();

    if ($(".new-tweet-text").val().length > 140) {
      $("#long-error").slideDown();
      return;
    } else if ($(".new-tweet-text").val().length === 0) {
      $("#empty").slideDown();
      return;
    } else {
      const data = $( this ).serialize();
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: data,
    }).then(() => {
      event.target.reset();
      loadTweets();
    }).fail((error) => {
      console.log("ERROR: ", error.message);
    })
    }
    
  });

});
