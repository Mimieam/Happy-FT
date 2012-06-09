function Happy() {
    'use strict';
	this.img = new Image();
	this.img.src = 'img/HappyF.png';
	this.w = 55;
	this.h = 55;
	this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
	this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	this.intensity = Math.random()/2;
	this.velocity = 1 ;  // move in only 1 direction :D
	this.sprite = this.img;
	this.sprite.count = 0;
	this.sprite.numberOfImages = 6;
	this.sprite.xMargin = 15;   // x and y of the current image on the sprite
	this.sprite.yMargin = 20;
	
	this.sprite.w = 55;
	this.sprite.h = 50;
	
	this.sprite.frame = 0;
	this.sprite.lastUpdateTime = 0;
	this.sprite.Delta = 0;
	this.sprite.acDelta = 0;
	this.sprite.msPerFrame = 5;
	
	this.sprite.xPos = 0;//this.sprite.xMargin + (this.sprite.frame * this.sprite.w);
	this.sprite.yPos = this.sprite.yMargin + (this.sprite.frame * this.sprite.h);
	
	this.Movement = new InputManager();

};

Happy.prototype.draw = function(context) {
    //'use strict';
   if (this.img !== null)
		context.drawImage(this.sprite, this.sprite.xPos ,this.sprite.yPos , this.sprite.w ,this.sprite.h,this.x, this.y,this.sprite.w ,this.sprite.h );
	else{
			context.fillStyle = "red"; 
			context.fillRect(this.x, this.y, this.sprite.w, this.sprite.h);
		}

	
	context.fillStyle = "black";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Debug  x: " + this.sprite.xPos +" , y: "+this.sprite.yPos, 600, 100);
	context.fillText("Debug  xMarg: " + this.sprite.xMargin +" , yMarg: "+this.sprite.yMargin, 600, 130);
	context.fillText("Debug  Count: " +this.sprite.count , 600, 160);
	context.fillText("Debug  h: " +( this.sprite.h) +" , w: "+(this.sprite.w), 600, 190);
	
		
};

Happy.prototype.update = function(){	
        this.sprite.delta = Date.now() - this.sprite.lastUpdateTime;
        if (this.sprite.acDelta > this.sprite.msPerFrame)
        {
            this.sprite.acDelta = 0;
            
		  this.sprite.xPos = this.sprite.xMargin + (this.sprite.frame * this.sprite.w);  // update sprite animation
		  
            this.sprite.frame++;
            if (this.sprite.frame >= 5) this.sprite.frame = 0;
        } else
        {
            this.sprite.acDelta += this.sprite.delta;
        }
        this.sprite.lastUpdateTime = Date.now();
		
			if (this.x < Game.context.canvas.width + this.w) {
			this.velocity = 1;
		  } else if (this.x > Game.context.canvas.width + this.w) {
			this.x  = 0 - this.w ;
		  }
		  this.x = this.Movement.updateXpos(this.x,2);
		  this.y = this.Movement.updateYpos(this.y,1);
		  this.Movement.reset();
		 // this.x  += this.velocity; 
			 

};



 