function throttle(fn, wait) {
	var time = Date.now();
	return function() {
		if ((time + wait - Date.now()) < 0) {
			fn();
			time = Date.now();
		}
	}
}

function offset(el) {
	var rect = el.getBoundingClientRect(),
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
