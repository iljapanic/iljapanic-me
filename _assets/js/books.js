/* https://github.com/toddmotto/echo */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,a={},u=function(){},d=function(t){return null===t.offsetParent},l=function(t,e){if(d(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},i=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,l=n.offsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,l),b:s(n.offsetBottom,l),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u,a.render(),document.addEventListener?(t.addEventListener("scroll",i,!1),t.addEventListener("load",i,!1)):(t.attachEvent("onscroll",i),t.attachEvent("onload",i))},a.render=function(n){for(var o,r,d=(n||document).querySelectorAll("[data-echo], [data-echo-background]"),i=d.length,f={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},s=0;i>s;s++)r=d[s],l(r,f)?(c&&r.setAttribute("data-echo-placeholder",r.src),null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+r.getAttribute("data-echo-background")+")":r.src!==(o=r.getAttribute("data-echo"))&&(r.src=o),c||(r.removeAttribute("data-echo"),r.removeAttribute("data-echo-background")),u(r,"load")):c&&(o=r.getAttribute("data-echo-placeholder"))&&(null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+o+")":r.src=o,r.removeAttribute("data-echo-placeholder"),u(r,"unload"));i||a.detach()},a.detach=function(){document.removeEventListener?t.removeEventListener("scroll",i):t.detachEvent("onscroll",i),clearTimeout(n)},a});

echo.init({
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
	var bookBreakLarge = 5 + 1;
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

delayBookAnimation('item--non-fiction');
delayBookAnimation('item--fiction');


