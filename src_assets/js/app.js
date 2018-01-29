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

// function fixedTitle() {
// 	var target = document.getElementById('fixed-title');
// 	var targetHidden = 'fixed-title--hidden';
// 	var targetVisible = 'fixed-title--visible';
// 	var targetOffset = offset(target);
// 	var offsetValue = 145;

// 	function hideTarget() {
// 		target.classList.add(targetHidden);
// 		target.classList.remove(targetVisible);
// 	}

// 	function showTarget() {
// 		target.classList.add(targetVisible);
// 		target.classList.remove(targetHidden);
// 	}

// 	if (targetOffset > offsetValue) {
// 		showTarget();
// 	}
// 	else if (targetOffset < offsetValue) {
// 		hideTarget();
// 	}
// 	else {
// 		hideTarget();
// 	}
// }

// function bgHeader() {
// 	var target = document.getElementById('header');
// 	var targetBg = 'header--bg';
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

// window.addEventListener('scroll', throttle(fixedTitle, 15));
// window.addEventListener('scroll', throttle(bgHeader, 15));
