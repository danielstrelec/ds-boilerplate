// lightbox (Magnific Popup)
$(document).ready(function() {
  if ($('.gallery').length) {
    // český překlad
    $.extend(true, $.magnificPopup.defaults, {
      tClose: 'Zavřít',
      tLoading: 'Nahrávám...',
      gallery: {
        tPrev: 'Předchozí',
        tNext: 'Následující',
        tCounter: '%curr% z %total%'
      },
      image: {
        tError: '<a href="%url%">Obrázek</a> nelze načíst.'
      },
      ajax: {
        tError: '<a href="%url%">Obsah</a> nelze načíst.'
      }
    });

    $('.gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
        tCounter: ''
      }
    });
  }
});
