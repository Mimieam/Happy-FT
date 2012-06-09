
// make the cloud move back and forth in the canvas :D 

function Cloud(){
 [...]
this.velocity = Math.random() > 0.5 ? -1 : 1;  // make the clouds move in both direction
}

Cloud.prototype.update = function() { //bounce back and forth
   if (this.x < this.w) { 
    this.velocity = 1;
  } else if (this.x > Game.context.canvas.width - this.w) {
    this.velocity = -1;
  } 
 } 
 
 
 	// Score
	context.fillStyle = "black";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Debug Here x: " + this.sprite.x +" , y: "+this.img.x +"  \n w: "+ this.sprite.w , 600, 100);
	context.fillText("Debug Here x: " + this.sprite.x +" , y: "+this.img.x +"  \n w: "+ this.sprite.w , 600, 150);
	