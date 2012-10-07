
/* function EntityAnimation (){
    this.animSet = [];
};

/* name = 'Up' , newAnim = Animation to go up */
/* EntityAnimation.prototype.addAnimation = function (name,newAnim ){
    this.animSet.push(name);
	this.animSet[name] = newAnim;
	//this.frameSet.push({ name2 : newAnim});
};
  */

/* 	var goingUp = new SpriteAnimation();
	goingUp.addFrame ([{ x: 0, y: 0, w: 0, h: 0, length: 0 }]);
   
    var Player = new EntityAnimation();  
    Player.addAnimation('M2', goingUp) ;
    document.write(Player); */
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
	
	this.sprite = new spriteManager(this.img.src , 6 , 15, 20, 55, 50) ;
	//this.MvBackwrd = new spriteManager(this.img.src, 7 , 15, 20, 55, 50);
	
	this.Movement = new InputManager();

};

var canvas = document.getElementById('canvas'), // get our canvas tag in the DOM
    ctx = canvas.getContext('2d'), // set the context of the canvas
    character = new Image(), // create a new image object for our sprite sheet
    player = { // create our player object
      x: 0, // set the player’s x position
      y: 50, // set the player’s y position
      w: 104, // set the player’s width
      h: 149, // set the player’s height
      sx: 0, // set the player’s image’s source x position
      sy: 301, // set the player’s image’s source y position
      faceRight: true, // this will tell the code our player is facing right to start
      faceLeft: false, // this is set to false so our player will face right
      counter: 0, // counter we use to know when to change frames
      step: 15, // we change frames every 15 frames, so increase or decrease this number if you want the player to walk faster or slower
      nextStep: 0, // this increases with each frame change
      endStep: 90,  // when counter equals this number, everything resets and we go back to the first frame
      start: { // sets the start postions of our source
        rightX: 0, // start x position when facing right
        leftX: 100, // start x position when facing left
        y: 301 // start y position is the same for both
      }
    },
    key = { // the variables we’ll use to see if a key is being pressed
      right: false,
      left: false
    };

function drawPlayer() {
  if (key.right === true) {
    move(0, true, false);
    player.x += 1;
    if (player.x > canvas.width + player.w + 1) {
      player.x = -player.w;
    }
  }
  if (key.left === true) {
    move(150, false, true);
    player.x -= 1;
    if (player.x < -player.w - 1) {
      player.x = canvas.width + player.w;
    }
  }
  if (key.right === false && player.faceRight === true) {
    player.sx = player.start.rightX;
    reset();
  }
  if (key.left === false && player.faceLeft === true) {
    player.sx = player.start.leftX;
    reset();
  }
  ctx.drawImage(character, player.sx, player.sy, player.w, player.h, player.x, player.y, player.w, player.h);
}function Happy() {
    'use strict';
	this.img = new Image();
	this.img.src = 'img/HappyF.png';
	this.w = 55;
	this.h = 50;
	this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
	this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	this.intensity = Math.random()/2;
	this.velocity = 1 ;  // move in only 1 direction :D
	this.start = { // sets the start postions of our source
        rX: 15, // start x position when facing right
        rY: 20, // start y position is the same for both
        lX: 15, // start x position when facing left
        lY: 20 + this.h, // start y position is the same for both
		X: 0,
		Y:0
		
      };
	  
	this.sprite = new spriteManager(this.img.src , 6 , 15, 20, 55, 50) ;
	this.MvForward = new spriteManager(this.img.src , 6 , this.start.rX, this.start.rY, this.w, this.h) ;
	this.MvBackwrd == new spriteManager(this.img.src , 7 , this.start.lX, this.start.lY, this.w, this.h) ;
	
	this.Movement = new InputManager();

};

Happy.prototype.chooseAnimation = function(/* context */) {
	if(this.Movement.RIGHT  || this.Movement.NOINPUT == true)
	{
		 this.start.X = this.MvForward.xMargin;
		 this.start.Y = this.MvForward.yMargin;
	}		
	else if(this.Movement.DOWN)
	{
	
	}	
	else if(this.Movement.LEFT)
	{
		 this.start.X = this.MvBackwrd.xMargin;
		 this.start.Y = this.MvBackwrd.yMargin;		
	}
	else if(this.Movement.UP == true)
	{
	}	
	//context.drawImage(this.img, this.sprite.xPos , this.sprite.yPos , this.sprite.w ,this.sprite.h,this.x, this.y,this.sprite.w ,this.sprite.h );
	
};

Happy.prototype.draw = function(context) {
    'use strict';
	this.chooseAnimation();
	context.drawImage(this.img, 15, 20 , this.w ,this.h, this.x, this.y,this.w ,this.h );
		
	{
			context.fillStyle = "red"; 
			context.fillRect(2*this.x, this.y, this.sprite.w, this.sprite.h);
		}

	
	context.fillStyle = "black";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("Debug  x: " + this.MvForward.xPos +" , y: "+this.MvForward.yPos, 200, 100);
	context.fillText("Debug  xMarg: " + this.MvForward.xMargin +" , yMarg: "+this.MvForward.yMargin, 200, 130);
	context.fillText("Debug  SX: " + this.start.X +" , SY: "+this.start.Y, 200, 160);

	context.fillText("Debug  h: " +( this.MvForward.h) +" , w: "+(this.MvForward.w), 200, 190);
	
		
};

Happy.prototype.update = function(){	
		this.sprite.update();
		
		
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



 