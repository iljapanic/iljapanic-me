(function ($) {
  'use strict';
  $(document).ready(function () {

    $('.message-link').magnificPopup({
      type: 'inline',
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-fade',
      focus: '#form-name',
      callbacks: {
        open: function() {
          $('#form-name').focus();
        },
        close: function() {
        }
      }
    })

    var messageTextarea = $('.message textarea');
    autosize(messageTextarea);

    function hideInputValues() { // hide all input-values
      $('.input-value').addClass('hidden');
      $('.input-value').removeClass('visible');
    }

    hideInputValues();

    // NAME
    $('#form-name').on('change paste keyup', function() {
      var nameValue = $(this).val();
      var firstName = nameValue.split(' ')[0];
      $('#form-name-value .value').html(firstName);

      if(!nameValue) {
        $('#form-name-value').removeClass('visible');
        $('#form-name-value').addClass('hidden');
      }
    });

    $('#form-name').on('focusout', function() {
      var nameValue = $(this).val();

      if(nameValue) {
        $('#form-name-value').removeClass('hidden');
        $('#form-name-value').addClass('visible');
      }
    });

    // EMAIL
    $('#form-email').on('change paste keyup', function() {
      var emailValue = $(this).val();
      $('#form-email-value .value').html(emailValue);

      if(!emailValue) {
        $('#form-email-value').removeClass('visible');
        $('#form-email-value').addClass('hidden');
      }
    });

    $('#form-email').on('focusout', function() {
      var emailValue = $(this).val();

      if(emailValue) {
        $('#form-email-value').removeClass('hidden');
        $('#form-email-value').addClass('visible');
      }
    });


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


    $('#send-message').on('submit', function(e) {
      e.preventDefault();

      //get the form fields
      var message = $('#form-message').val();
      var name = $('#form-name').val();
      var firstName = name.split(' ')[0];
      var email = $('#form-email').val();


      //send to formspree
      $.ajax({
          url:'https://formspree.io/hello@iljapanic.me',
          method:'POST',
          data:{
              _subject: 'New message from ' + firstName + ' (iljapanic.me)',
              _replyto: email,
              name: name,
              message: message
          },
          dataType:'json',
          beforeSend: function() {
            console.log('sending your message');
            alertLoading();
          },
          success: function(data) {
            console.log('message sent');
            alertSuccess();
            $('.alert__success .first-name').html(firstName);
            $('#send-message')[0].reset();
            autosize.destroy(messageTextarea);
            autosize(messageTextarea);
            hideInputValues();
          },
          error: function(err) {
            console.log('there was an error sending the form');
            alertError();
            $('.alert').append(err);
          }

      });

    });


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
