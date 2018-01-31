var echo = require('./vendor/echo.js')

echo.echo.init({
	offset: 0,
	throttle: 15,
	unload: false
});

function delayBookAnimation(bookClassName) {
	var screenIsSmall = window.matchMedia('(max-width: 60rem)').matches;
	var screenIsMedium = window.matchMedia('(min-width: 60rem) and (max-width: 75rem)').matches;
	var screenIsLarge = window.matchMedia('(min-width: 75rem) and (max-width: 90rem)').matches;
	var screenIsXLarge = window.matchMedia('(min-width: 90rem)').matches;

	var bookBreakSmall = 2 + 1;
	var bookBreakMedium = 3 + 1;
	var bookBreakLarge = 4 + 1;
	var bookBreakXLarge = 5 + 1;

	var book = document.getElementsByClassName(bookClassName);
	var bookIndex = 0;

	Array.prototype.forEach.call(book, function(el, index, array) {
		bookIndex ++;

		if (screenIsSmall) {
			if (bookIndex == bookBreakSmall) {
				bookIndex = 1;
			}
			var bookDelay = bookIndex + '00';
			el.setAttribute('data-aos-delay', bookDelay);
		}
		else if (screenIsMedium) {
			if (bookIndex == bookBreakMedium) {
				bookIndex = 1;
			}
			var bookDelay = bookIndex + '00';
			el.setAttribute('data-aos-delay', bookDelay);
		}
		else if (screenIsLarge) {
			if (bookIndex == bookBreakLarge) {
				bookIndex = 1;
			}
			var bookDelay = bookIndex + '00';
			el.setAttribute('data-aos-delay', bookDelay);
		}
		else if (screenIsXLarge) {
			if (bookIndex == bookBreakXLarge) {
				bookIndex = 1;
			}
			var bookDelay = bookIndex + '00';
			el.setAttribute('data-aos-delay', bookDelay);
		}
	});
}

delayBookAnimation('iten--non-fiction')
delayBookAnimation('item--fiction')


