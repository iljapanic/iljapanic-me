document.addEventListener('DOMContentLoaded', function () {
  var replyButton = document.querySelector('.reply-button')
  var replyDiv = document.querySelector('.reply')

  replyButton.addEventListener('click', function () {
    if (replyDiv.classList.contains('is-hidden')) {
      console.log('showing reply box')
      replyDiv.classList.remove('is-hidden')
      replyDiv.classList.add('is-visible')
    } else {
      console.log('hiding reply box')
      replyDiv.classList.remove('is-visible')
      replyDiv.classList.add('is-hidden')
    }
  })

})
