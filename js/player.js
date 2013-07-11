function player (img) 
{
    'use strict';
	this.img = img;
	this.currentAnimation ;
	
	this.animSet = [];
	
	this.w = 0;
	this.h = 0;
	this.x = 0;
	this.y = 0;
	
	this.animUpdate =0 ;

}

/* name = 'Up' , newAnim = Animation to go up */
player.prototype.addAnimation = function (name,newAnim ){
    this.animSet.push(name);
	this.animSet[name] = newAnim;
};

player.prototype.setAllAnimation = function (AnimArray)
{
	this.animSet = AnimArray;
}



