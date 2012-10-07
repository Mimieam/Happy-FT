function Fish() {
    'use strict';
	this.img = new Image();
	this.img.src = 'img/fishF.png';
	this.w = 40;
	this.h = 40;
	this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
	this.y = (Game.context.canvas.height - this.h);
	this.intensity = Math.random()/2;
	this.velocity = 1 ;  // move in only 1 direction :D
	this.start = { // sets the start postions of our source
        //starting coordonate for the jumping animation
  	    rX: 0, 
        rY: 0, 

		X: 0,
		Y:0
		
      };
	 this.jmpHeight = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	 this.JumpingAnim = new SpriteManager(new AnimationData(Game.spriteDB.base['Fish_THROW'],
		{
		  repeats: true,
		  keyframe: 0
		}
	));
		
};

/* Fish.prototype.chooseAnimation = function() {
	if (this.y >= this.jmpHeight ) {  // going up
			this.start.X = this.JumpingAnim.animation.frames[0].x;
			this.start.Y = this.JumpingAnim.animation.frames[0].y;
			//console.log(" FISH going UP");
	}else if (this.y <= this.jmpHeight ) {  // going down
			this.start.X = this.JumpingAnim.xPos 
			this.start.Y = this.JumpingAnim.yPos
			
			//console.log(" FISH going DOWN");
	}
};
 */

Fish.prototype.draw = function(context) {
    'use strict';
	//this.chooseAnimation();
	context.drawImage(this.img, this.JumpingAnim.frame.x, this.JumpingAnim.frame.y, this.w ,this.h, this.x, this.y,this.w ,this.h );	
};

Fish.prototype.update = function(){	
		this.JumpingAnim.update(60);	
	// add some variability in the speed depending on the jmpHeight
				  // This definitly need to be improved ... way to ugly and messy
		if (this.y > Game.context.canvas.height + this.h) 
		  {
			this.velocity = 1;
			//console.log("initial state: "+ this.y);
			this.y  = (Game.context.canvas.height - this.h);
			this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
			this.jmpHeight = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
		  } 
		  else if (this.y >= this.jmpHeight ) {  // going up
			this.y  -= this.velocity *Math.floor(Math.random() * 10); 
			this.x += 3;
			//console.log(" y <= jH ", this.jmpHeight , " y : ", this.y);
		  }else if (this.y <= this.jmpHeight ) {  // going down
		  //add rotation here later for polishing
		  this.x += 3;
			this.y  += this.velocity *3;
			this.jmpHeight += this.velocity *3;
			//console.log(" y >= jH ", this.jmpHeight , " y : ", this.y);
		  }
	

};


Fish.prototype.touchCloud = function() {
		console.log("a Fish as been captured");
		Game.score ++;
			this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
			this.y = (Game.context.canvas.height - this.h);
	
};




 