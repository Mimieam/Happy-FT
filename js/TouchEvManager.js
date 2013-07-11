 function TEvManager ()
{
    this.TouchArr = {}; // hold the key pressed
	this.TLength = 0;  // Touch length
							 
};
 
TEvManager.prototype.touchDown = function() {
    this.touchXY();
};
 
TEvManager.prototype.touchUp = function(e) {
    if (!e)
        e = event;
    this.TLength = e.targetTouches.length;
};
 
TEvManager.prototype.touchXY = function(e) {
    if (!e)
        e = event;
    e.preventDefault();
    this.TLength = e.targetTouches.length;
    for (var i = 0; i < this.TLength; i++) {
        console.log("touched")
     //  canX[i] = e.targetTouches[i].pageX - can.offsetLeft;
     //  canY[i] = e.targetTouches[i].pageY - can.offsetTop;
    }
}
 