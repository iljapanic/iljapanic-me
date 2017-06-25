$(document).ready(function () {

  // SMOOTH SCROLL
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // EXTRA TOGGLE
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

  // APPLICATION FORM
   function hideAlerts() {
      $('.alert__loading').hide();
      $('.alert__success').hide();
      $('.alert__error').hide();
    }

    function alertLoading() {
      $('.alert__loading').fadeIn();
      $('.alert__success').hide();
      $('.alert__error').hide();
    }

    function alertSuccess() {
      $('.alert__loading').hide();
      $('.alert__success').fadeIn();
      $('.alert__error').hide();
    }

    function alertError() {
      $('.alert__loading').hide();
      $('.alert__success').hide();
      $('.alert__error').fadeIn();
    }

    hideAlerts();


    $('#proposal-form').on('submit', function(e) {
      e.preventDefault();

      //get the form fields
      var proposalType = $('input[name=type-of-proposal]:checked').val();
      var proposalDescription = $('#proposal-description').val();
      var proposalGoals = $('#proposal-goals').val();
      var proposalTimeline = $('#proposal-timeline').val();
      var proposalBudget = $('#proposal-budget').val();
      var proposalLocation = $('#proposal-location').val();
      var proposalCollaboration = $('input[name=type-of-collaboration]:checked').val();
      var proposalAdditional= $('#proposal-additional').val();
      var proposalName = $('#proposal-name').val();
      var proposalEmail = $('#proposal-email').val();


      //send to formspree
      $.ajax({
          url:'https://formspree.io/hello@iljapanic.me',
          method:'POST',
          data:{
              _subject: proposalName + ' - iljapanic.me proposal',
              _replyto: proposalEmail,
              name: proposalName,
              email: proposalEmail,
              proposalType: proposalType,
              proposalDescription: proposalDescription,
              proposalGoals: proposalGoals,
              proposalTimeline: proposalTimeline,
              proposalBudget: proposalBudget,
              proposalLocation: proposalLocation,
              proposalCollaboration: proposalCollaboration,
              proposalAdditional: proposalAdditional
          },
          dataType:'json',
          beforeSend: function() {
            console.log('sending your message');
            alertLoading();
          },
          success: function(data) {
            console.log('message sent');
            alertSuccess();
            $('#proposal-form')[0].reset();
          },
          error: function(err) {
            console.log('there was an error sending the form');
            alertError();
            $('.alert').append(err);
          }

      });

    });

});
