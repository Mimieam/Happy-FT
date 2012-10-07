/*
spriteManager(src , maxFrame , xMarg, yMarg, width, height) :
	src : image source
	maxFrame : number of frame to animate
	xMarg,yMarg : Margins on the sprite if any
	width,height : frame size
	timePerFrame : ms between each frame
*/
function spriteManager(src , maxFrame , xMarg, yMarg, width, height, timePerFrame) 
{
    'use strict';
	this.img = new Image();
	this.img.src = src;
	
	this.numberOfImages = maxFrame;
	this.xMargin = xMarg;   // x and y of the current image on the sprite
	this.yMargin = yMarg;
	
	this.w = width;
	this.h = height;
	
	
	this.frame = 0;
	this.lastUpdateTime = 0;
	this.Delta = 0;
	this.acDelta = 0;
	this.msPerFrame = timePerFrame;
	
	this.xPos = 0;
	this.yPos = this.yMargin + (this.frame * this.h);

};

spriteManager.prototype.setSprite = function(context) {
	
};

spriteManager.prototype.update = function(){
	this.delta = Date.now() - this.lastUpdateTime;
    if (this.acDelta > this.msPerFrame)
    {
        this.acDelta = 0;
        this.xPos = this.xMargin + (this.frame * this.w);  // update sprite animation
        this.frame++;
        if (this.frame >= this.numberOfImages) 
			this.frame = 0;
    } 
	else
    {
        this.acDelta += this.delta;
    }
    this.lastUpdateTime = Date.now();
		
};



 