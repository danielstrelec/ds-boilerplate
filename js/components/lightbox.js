// lightbox ( https://github.com/andreknieriem/simplelightbox )
jQuery(document).ready(function ($) {
  if ($('.js-gallery').length) {
    $('.js-gallery a').simpleLightbox({
      showCounter: false,
    });
  }
});
