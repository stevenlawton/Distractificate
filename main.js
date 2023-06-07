console.log("Distractificate...");

$(document).ready(function() {

  let config = { attributes: true, childList: false, characterData: false }
  let callback = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      doSomething();
    });
  });


  var targets =  $('.ytd-thumbnail');
  targets.each(function() {
    callback.observe(this, config);
  });

  targets =  $('.ytd-rich-grid-media #avatar-link');
  targets.each(function() {
    callback.observe(this, config);
  });

  doSomething();
});

// let lastKnownScrollPosition = 0;
// let ticking = false;

function mutify(selector) {
  $(selector).css("filter", "blur(5px) contrast(50%) grayscale(50%)");
  $(selector).css("transform", "scale(0.5)");
}

function moreEyes(selector) {
  $(selector).css("transform", "scale(1.1)");
}

function remove(selector) {
  remove(selector,0)
}
function remove(selector,parentcount) {
  var target = $(selector);

  for (let i = 0; i < parentcount; i++) {
    target = target.parent();
  }

  target.remove();
}
function empty(selector) {
  $(selector).empty();
  $(selector).html("&nbsp;");
}

function fix(selector){
  $(selector).css("padding-left", "16px");
}
function doSomething() {
  mutify('.ytd-rich-grid-media #avatar-link');
  mutify('ytd-thumbnail');
  mutify('ytd-video-owner-renderer a yt-img-shadow');
  mutify('ytd-playlist-thumbnail');


  moreEyes('ytd-rich-grid-media H3');

  fix('ytd-rich-grid-media H3');
  $('ytd-rich-grid-media').css('height' ,$('ytd-rich-grid-media').css('height')/2 );

  empty('ytd-rich-grid-media div.ytd-rich-grid-media a#avatar-link');

  remove('#header');
  remove('.ytd-segmented-like-dislike-button-renderer');
  remove('.ytd-reel-shelf-renderer');
  remove('yt-formatted-string:contains("Shorts")',3);
  remove('#voice-search-button');
  remove('h3 yt-formatted-string:contains("Explore")',2);
  remove('h3 yt-formatted-string:contains("More from YouTube")',2);
  remove('h3 yt-formatted-string:contains("Subscriptions")',2);
  remove('ytd-ad-slot-renderer');
  remove('#offer-module');
  remove('ytd-in-feed-ad-layout-renderer');
  remove('ytd-comments');
  remove('ytd-video-owner-renderer #owner-sub-count');
  remove('ytd-channel-renderer');

}

document.body.addEventListener('yt-page-data-updated',(event) => {
  console.log(`` , event);
  doSomething();
});
document.body.addEventListener('yt-navigate',(event) => {
  console.log(`yt-navigate` , event);
  doSomething();
});
document.body.addEventListener('yt-playlist-data-updated',(event) => {
  console.log(`yt-playlist-data-updated` , event);
  doSomething();
});
document.body.addEventListener('yt-player-updated',(event) => {
  console.log(`yt-player-updated` , event);
  doSomething();
});


// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;
//
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });
//
//     ticking = true;
//   }
// });


//$("ytd-app").

//
// voice-search-button
//! 2023-06-06 https://www.youtube.com
// www.youtube.com##ytd-reel-shelf-renderer.ytd-item-section-renderer.style-scope
// www.youtube.com##ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer.style-scope
// www.youtube.com###container > .yt-chip-cloud-renderer.style-scope
// www.youtube.com###header > .ytd-item-section-renderer.style-scope
// www.youtube.com##ytd-video-owner-renderer.ytd-watch-metadata.style-scope > .ytd-video-owner-renderer.style-scope.yt-simple-endpoint > .no-transition.ytd-video-owner-renderer.style-scope
// www.youtube.com##.no-transition.ytd-comment-renderer.style-scope > .yt-img-shadow.style-scope
// www.youtube.com###comments > .ytd-comments.style-scope
// www.youtube.com##ytd-segmented-like-dislike-button-renderer.ytd-menu-renderer.style-scope
// www.youtube.com###thumbnail-container