function resize(){var e=window.innerHeight;document.getElementById("splash").style.height=e+"px"}!function(e){"use strict";function s(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,s){var n=a(e,s)?t:o;n(e,s)}var a,o,t;"classList"in document.documentElement?(a=function(e,s){return e.classList.contains(s)},o=function(e,s){e.classList.add(s)},t=function(e,s){e.classList.remove(s)}):(a=function(e,n){return s(n).test(e.className)},o=function(e,s){a(e,s)||(e.className=e.className+" "+s)},t=function(e,n){e.className=e.className.replace(s(n)," ")});var i={hasClass:a,addClass:o,removeClass:t,toggleClass:n,has:a,add:o,remove:t,toggle:n};"function"==typeof define&&define.amd?define(i):"object"==typeof exports?module.exports=i:e.classie=i}(window),resize(),window.onresize=function(){resize()},window.onload=function(){var e=document.querySelectorAll(".splash__social li"),s=document.querySelectorAll(".splash__colophon a"),n=document.getElementById("splash");for(var a in e)e.hasOwnProperty(a)&&(e[a].addEventListener("mouseover",function(){classie.add(n,"splash-2"),classie.remove(n,"splash-1")}),e[a].addEventListener("mouseout",function(){classie.add(n,"splash-1"),classie.remove(n,"splash-2")}));for(var a in s)s.hasOwnProperty(a)&&(s[a].addEventListener("mouseover",function(){classie.add(n,"splash-3"),classie.remove(n,"splash-1")}),s[a].addEventListener("mouseout",function(){classie.add(n,"splash-1"),classie.remove(n,"splash-3")}))};