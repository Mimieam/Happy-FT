/*
spriteManager(src , maxFrame , xMarg, yMarg, width, height) :
	src : image source
	maxFrame : number of frame to animate
	xMarg,yMarg : Margins on the sprite if any
	width,height : frame size
*/

function spriteManager(src , maxFrame , xMarg, yMarg, width, height) 
{
    'use strict';
	this.img = new Image();
	this.img.src = 'img/HappyF.png';
	
	this.numberOfImages = 6;
	this.xMargin = 15;   // x and y of the current image on the sprite
	this.yMargin = 20;
	
	this.w = 55;
	this.h = 50;
	
	
	this.frame = 0;
	this.lastUpdateTime = 0;
	this.Delta = 0;
	this.acDelta = 0;
	this.msPerFrame = 5;
	
	this.xPos = 0;
	this.yPos = this.yMargin + (this.frame * this.h);

};

spriteManager.prototype.setSprite = function(context) {
 
};

Happy.prototype.update = function(){	
  
};



 