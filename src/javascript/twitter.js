(function ($) {
  'use strict'
  $(document).ready(function () {

    // Twitter widget
    $('.twitter-feed').tweet({
      username: 'iljapanic',
      count: 15,
      retweets: false,
      loading_text: 'loading tweets...',
    })


    var tweetCarousel = new Flickity('.tweet_list', {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      draggable: true,
      pageDots: false,
      prevNextButtons: true,
      autoPlay: 5000,
      adaptiveHeight: true
    })
  })
}(jQuery))
