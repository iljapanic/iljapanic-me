// function throttle(fn, wait) {
// 	var time = Date.now();
// 	return function() {
// 		if ((time + wait - Date.now()) < 0) {
// 			fn();
// 			time = Date.now();
// 		}
// 	}
// }

// function offset(el) {
// 	var rect = el.getBoundingClientRect();
// 	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	var offset = rect.top + scrollTop;
// 	return offset;
// }

// function bgHeader() {
// 	var target = document.getElementById('header');
// 	var targetBg = 'header--scroll';
// 	var targetOffset = offset(target)
// 	offsetValue = 15;

// 	function addBg() {
// 		target.classList.add(targetBg);
// 	}

// 	function removeBg() {
// 		target.classList.remove(targetBg);
// 	}

// 	if(targetOffset > offsetValue) {
// 		addBg();
// 	}
// 	else if (targetOffset < offsetValue) {
// 		removeBg();
// 	}
// 	else {
// 		removeBg();
// 	}
// }

// window.addEventListener('scroll', throttle(bgHeader, 15));
