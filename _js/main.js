
SmartUnderline.init({
	"location": ""
})

function resize() {
	var heights = window.innerHeight;
    document.getElementById("splash").style.height = heights + "px";
}

resize();

// window.onresize = function() {
// 	resize();
// };


window.onload = function() {
    
    var activator = document.querySelectorAll('.splash__social li');
    var splash =  document.getElementById("splash");



    for (var i in activator) {
        if (!activator.hasOwnProperty(i)) continue;
        activator[i].addEventListener( 'mouseover', function() {
            // document.body.className = 'splash-1';
            classie.add( splash, 'splash-2' );
            classie.remove( splash, 'splash-1' );
        })
        activator[i].addEventListener( 'mouseout', function() {
            classie.add( splash, 'splash-1' );
            classie.remove( splash, 'splash-2' );
        })
    }

    
}