$(document).ready(function () {
  /*
    ON-SCROLL ANIMATIONS

    taken from the following article:
    http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
    big up to the authors for nice and easy implemenation for on-scroll animations!
  */

  function onScrollInit (items, trigger) {
    items.each(function () {
      var osElement = $(this)
      var osAnimationClass = osElement.attr('data-os-animation')
      var osAnimationDelay = osElement.attr('data-os-animation-delay')
      var screenSize = $(window).width()

      if (Modernizr.touch) {
        // no delay on touch devices (assume it's mobile)
        osElement.css({
          '-webkit-animation-delay': 0,
          '-moz-animation-delay': 0,
          'animation-delay': 0
        })
      }
      if (screenSize < 768) {
        // no delay on smaller screens
        osElement.css({
          '-webkit-animation-delay': 0,
          '-moz-animation-delay': 0,
          'animation-delay': 0
        })
      } else {
        osElement.css({
          '-webkit-animation-delay': osAnimationDelay,
          '-moz-animation-delay': osAnimationDelay,
          'animation-delay': osAnimationDelay
        })
      }

      var osTrigger = (trigger) ? trigger : osElement

      osTrigger.waypoint(function () {
        osElement.addClass('animated').addClass(osAnimationClass)
      }, {
        triggerOnce: true,
        offset: '85%'
      })
    })
  }

  /*
    activate on-scroll animations
    animation are set up throught HTML data- attributes
  */
  onScrollInit($('.os-animation'))

  /*
    CONTENT CAROUSELS
  */

  $('#carousel--people').owlCarousel({
    items: 3,
    // global settings (copy-paste)
    paginationNumbers: true,
    scrollPerPage: true
  })

  $('#carousel--books').owlCarousel({
    items: 5,
    // global settings (copy-paste)
    paginationNumbers: true,
    scrollPerPage: true
  })

  /*
    AIRTABLE API DATA FEED
  */
//   var airtable_read_endpoint_people = 'https://api.airtable.com/v0/appMcHdQ6jbemy6H4/People?maxRecords=200&view=Last%20Name&api_key=keyBD29GsCFD8IN4K'
//   var airtable_read_endpoint_books = 'https://api.airtable.com/v0/appMcHdQ6jbemy6H4/Books?maxRecords=200&view=Publication%20Year&api_key=keyBD29GsCFD8IN4K'
//   // var airtable_read_endpoint_sites = ''
//   var airtable_read_endpoint_contributors = 'https://api.airtable.com/v0/appMcHdQ6jbemy6H4/Contributors?maxRecords=200&view=Last%20Name&api_key=keyBD29GsCFD8IN4K'
//
//   var peopleData = {}
//
// var pollData = {};
// var chartData = [];
//
// function getDataAndBuild() {
//   // // zero out data
//   // peopleData = {
//   //     'First Name':
//   // }
//   //
//   //
//   // pollData = {
//   //   "👯": 0,
//   //   "🍑": 0,
//   //   "💥": 0,
//   //   "🍕": 0,
//   //   "☠️": 0
//   // }
//   //
//   // chartData = [0, 0, 0, 0, 0];
//
//   console.log("Getting data");
//   axios
//     .get(airtable_read_endpoint_people)
//     .then(function(result) {
//       console.log("Got data (showing first record): ", result.data.records[0]);
//       result.data.records.forEach(function(element, index) {
//         peopleData[element.fields["Emoji Choice"]]++;
//       });
//       console.log("Updated people data: ", peopleData);
//
//       // Turn Object into Array (for chart)
//       // var i = 0;
//       // for (var prop in pollData) {
//       //   chartData[i] = pollData[prop];
//       //   i++;
//       // }
//       // console.log("Made chart data: ", chartData);
//       //
//       // buildChart(chartData);
//     });
// }
//
// // Kick things off!
// getDataAndBuild();
})
