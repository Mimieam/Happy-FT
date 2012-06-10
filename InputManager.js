function InputManager ()  /* to be optimized later ....*/
{
	this.keyBoard =  new KbManager();
	this.UP = false;
	this.DOWN = false;
	this.LEFT = false;
	this.RIGHT = false;
	this.NOINPUT = true;
	
	this.addToX = 0;
	this.addToY = 0;
};

InputManager.prototype.reset = function() {
	
/* 	this.UP = false;
	this.DOWN = false;
	this.LEFT = false;
	this.RIGHT = false;
	this.NOINPUT = true; */

	this.addToX = 0;
	this.addToY = 0;
};

InputManager.prototype.moveLeft = function(xPos) {
  this.addToX -= xPos;
  this.LEFT = true;
  this.NOINPUT = false;
  
  this.UP = false;
  this.DOWN = false;
  this.RIGHT = false;

	

  
};

InputManager.prototype.moveRight = function(xPos) {
  this.addToX += xPos;
  this.RIGHT = true;
  this.NOINPUT = false;
  
  this.UP = false;
  this.DOWN = false;
  this.LEFT = false;
  
};

InputManager.prototype.moveUp = function(yPos) {
  this.addToY -= yPos;
  this.UP = true;
  this.NOINPUT = false;
  
  this.LEFT = false;
  this.DOWN = false;
  this.RIGHT = false;
  
};

InputManager.prototype.moveDown = function(yPos) {
  this.addToY += yPos;
  this.DOWN = true;
  this.NOINPUT = false;
  
  this.LEFT = false;
  this.UP = false;
  this.RIGHT = false;
  
};

InputManager.prototype.updatePos = function(Pos) {
  if (this.keyBoard.isDown(this.keyBoard.Controller.UP)) {this.moveUp(Pos)};
  if (this.keyBoard.isDown(this.keyBoard.Controller.LEFT)) this.moveLeft(Pos);
  if (this.keyBoard.isDown(this.keyBoard.Controller.DOWN)) this.moveDown(Pos);
  if (this.keyBoard.isDown(this.keyBoard.Controller.RIGHT)) this.moveRight(Pos);
};

InputManager.prototype.updateXpos = function(x,Pos) 
{
	this.updatePos(Pos);
	return 	(x + this.addToX);
	
}
InputManager.prototype.updateYpos = function(y,Pos) 
{
	this.updatePos(Pos);
	return  (y + this.addToY);
		
}