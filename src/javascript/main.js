(function ($) {
  'use strict';
  $(document).ready(function () {

    var extraToggle = $('.extra__toggle');
    var extraContent = $('.extra__content');
    var extraMore = $('.extra__toggle .more');
    var extraLess = $('.extra__toggle .less');

    extraContent.hide();
    extraLess.hide();
    extraContent.addClass('hidden');

    // recalculates DOM
    window.dispatchEvent(new Event('resize'));
    AOS.refresh();


    extraToggle.click( function () {
      var content = $(this).prev('.extra__content');
      var more = $(this).find('.more');
      var less = $(this).find('.less');

      if (content.hasClass('hidden')) {
        content.slideDown();
        content.removeClass('hidden');
        more.hide();
        less.fadeIn();
      } else {
        content.slideUp();
        content.addClass('hidden');
        less.hide();
        more.fadeIn();
      }
    });

  });
}(jQuery));
