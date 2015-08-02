
function resize() {
	var heights = window.innerHeight;
    document.getElementById("profile").style.height = heights + "px";
}

resize();

window.onresize = function() {
	resize();
};


window.onload = function() {
    var elements = document.querySelectorAll('.social-media li');

    for (var i in elements) {
        if (!elements.hasOwnProperty(i)) continue;
        elements[i].addEventListener( 'mouseover', function() {
            document.body.className = 'step-2';
        })
        elements[i].addEventListener( 'mouseout', function() {
            document.body.className = 'step-1';
        })
    }
}