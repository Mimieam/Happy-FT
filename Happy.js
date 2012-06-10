function Happy() {
    'use strict';
	this.img = new Image();
	this.img.src = 'img/HappyF.png';
	this.w = 56;
	this.h = 48;
	this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
	this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	this.intensity = Math.random()/2;
	this.velocity = 1 ;  // move in only 1 direction :D
	this.start = { // sets the start postions of our source
        //starting coordonate for going forward
  	    rX: 13, 
        rY: 21, 
       
	    //starting coordonate for going backward
	    lX: 10, 
        lY: 105, 
		X: 0,
		Y:0
		
      };
	  
	this.sprite = new spriteManager(this.img.src , 6 , 15, 20, 55, 50) ;
	this.MvForward = new spriteManager(this.img.src , 6 , this.start.rX, this.start.rY, this.w, this.h, 100) ;
	this.MvBackwrd = new spriteManager(this.img.src , 7 , this.start.lX, this.start.lY, this.w, this.h, 200) ;
		
	this.Movement = new InputManager();

};

Happy.prototype.chooseAnimation = function(/* context */) {
	 if(this.Movement.RIGHT   || this.Movement.NOINPUT  == true)
	{
		 this.start.X = this.MvForward.xPos;
		 this.start.Y = this.MvForward.yPos;
		// console.log("Debug Moving right: "+ this.Movement.RIGHT);
	}		 
	else if(this.Movement.DOWN)
	{
		console.log("Debug Moving Down: "+ this.Movement.DOWN);
	}	
	else if(this.Movement.LEFT == true)
	{
		 this.start.X = this.MvBackwrd.xPos;
		 this.start.Y = this.MvBackwrd.yPos;		
		// console.log("Debug Moving Left: "+ this.Movement.LEFT);
	}
	else if(this.Movement.UP == true)
	{
		console.log("Debug Moving Up: "+ this.Movement.UP);
	}	
	//context.drawImage(this.img, this.sprite.xPos , this.sprite.yPos , this.sprite.w ,this.sprite.h,this.x, this.y,this.sprite.w ,this.sprite.h );
	
};


Happy.prototype.draw = function(context) {
    'use strict';

	this.chooseAnimation();
	context.drawImage(this.img, this.start.X, this.start.Y , this.w ,this.h, this.x, this.y,this.w ,this.h );
	
	{
			context.fillStyle = "red"; 
		//	context.fillRect(this.sprite.xPos, this.sprite.yPos, this.w, this.h);
			context.fillRect(this.MvForward.xPos, this.MvForward.yPos, this.w, this.h);
			context.fillStyle = "green";
			context.fillRect(this.MvBackwrd.xPos, this.MvBackwrd.yPos, this.w, this.h);
		}

/* 	
	context.fillStyle = "black";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Debug  x: " + this.sprite.xPos +" , y: "+this.sprite.yPos, 200, 100);
	context.fillText("Debug  xMarg: " + this.MvForward.xPos +" , yMarg: "+this.MvForward.yPos, 200, 130);
	context.fillText("Debug  xMarg: " + this.MvBackwrd.xPos +" , yMarg: "+this.MvBackwrd.yPos, 200, 160);
	context.fillText("Debug  Count: " +this.sprite.count , 200, 190);
	context.fillText("Debug  h: " +( this.sprite.h) +" , w: "+(this.sprite.w), 200, 210);
	 */
		
};

Happy.prototype.update = function(){	
		this.sprite.update();
		this.MvForward.update();
		this.MvBackwrd.update();
		
		
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

//Happy.prototype.__draw(){};



 