function ColDwall()  /* ColD Wall collision detection engine*/
{
	this.collide = false;
};

ColDwall.prototype.areColliding = function(a,b) {
	
	return a.x < b.x + b.w &&
     a.x + a.w > b.x &&
     a.y < b.y + b.h &&
     a.y + a.h > b.y;
};

