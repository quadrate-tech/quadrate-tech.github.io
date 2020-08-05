$(document).ready(function() {

  'use strict';

  // =================
  // Responsive videos
  // =================

  $('.wrapper').fitVids();

  // ===============
  // Off Canvas menu
  // ===============

  $('.off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

  // ======
  // Search
  // ======

  var search_field = $('[name=search]'),
      search_results = $('.search-results'),
      toggle_search = $('.toggle-search-button'),
      search_result_template = "\
        <div class='search-results__item'>\
          <a class='search-results__item__title' href='{{link}}'>{{title}}</a>\
          <span class='post__date'>{{pubDate}}</span>\
        </div>";

  $('[name=search]').attr("autofocus", "true")

  toggle_search.click(function(e) {
    e.preventDefault();
    $('.search-form-container').addClass('is-active');

    // If off-canvas is active, just disable it
    $('.off-canvas-container').removeClass('is-active');

    setTimeout(function() {
      $('[name=search]').focus();
    }, 500);
  });

  $('.search-form-container').attr('tabindex', '0');
  $('.search-form-container, .close-search-button').on('click keydown', function(event) {
    if (event.target.className.indexOf('close-search-button') > -1 || event.keyCode == 27) {
      $('.search-form-container').removeClass('is-active');
    }
  });

  // search_field.ghostHunter({
  //   results: search_results,
  //   onKeyUp         : true,
  //   info_template   : "<h4 class='heading'>Number of posts found: {{amount}}</h4>",
  //   result_template : search_result_template,
  //   zeroResultsInfo : false,
  //   before: function() {
  //     search_results.fadeIn();
  //   }
  // });

  // ===============
  // Homepage Layout
  // ===============

  // Add large-6 to second and third posts in homepage, so each one will be 50% width
  $('.home-template .post-card-wrap:nth-of-type(2), .home-template .post-card-wrap:nth-of-type(3)')
  .addClass('medium-6 large-6');

  // ============
  // Latest posts
  // ============

  // function latestPosts() {
  //   $.get('/rss/', function (data) {
  //     var $xml = $(data);
  //     var recent = '';
  //     $xml.find('item').slice(0, 4).each(function () {
  //       var $this = $(this),
  //       item = {
  //         title: $this.find('title').text(),
  //         link: $this.find('link').text(),
  //         image: $this.find('media\\:content, content').attr('url'),
  //         description: $this.find('description').text(),
  //         pubDate: $this.find('pubDate').text(),
  //         category: $this.find('category').text()
  //       };
  //       recent += '<div class="post-card">';
  //       recent += '<a title="' + item.title + '" href="' + item.link + '">';
  //       recent += '<div style="background-image: url(' + item.image + ')" class="grey-bg post-card__image post-card__image--has-outline CoverImage FlexEmbed FlexEmbed--4by3"></div>';
  //       recent += '</a>';
  //       recent += '<h2 class="post-card__title post-card__title--small">';
  //       recent += '<a title="' + item.title + '" href="' + item.link + '">' + item.title + '</a>';
  //       recent += '</h2>';
  //       recent += '</div>';
  //     });
  //     $('.recent-posts').html(recent);
  //   });
  // }

  //latestPosts();

  // ==============
  // Twitter widget
  // ==============

  // var twitterWidget = true;         // Set to false to hide the Twitter widget
  // var twitterWidgetID = '832606090760114177'; // ID of your Twitter widget

  // if (twitterWidget && $('#twitter-widget').length) {
  //   var twitterConfig = {
  //     'id': twitterWidgetID,
  //     'domId': 'twitter-widget',
  //     'maxTweets': 2,
  //     'enableLinks': true,
  //     'showUser': false,
  //     'showInteraction': false
  //   };
  //   twitterFetcher.fetch(twitterConfig);
  // } else {
  //   $('.widget--twitter-wrap').remove();
  // }

});
