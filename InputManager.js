function InputManager ()
{
	this.keyBoard =  new KbManager();
	this.addToX = 0;
	this.addToY = 0;
};

InputManager.prototype.reset = function() {
	this.addToX = 0;
	this.addToY = 0;
};

InputManager.prototype.moveLeft = function(xPos) {
  this.addToX -= xPos;
};

InputManager.prototype.moveRight = function(xPos) {
  this.addToX += xPos;
};

InputManager.prototype.moveUp = function(yPos) {
  this.addToY -= yPos;
};

InputManager.prototype.moveDown = function(yPos) {
  this.addToY += yPos;
};

InputManager.prototype.updatePos = function(Pos) {
  if (this.keyBoard.isDown(this.keyBoard.Controller.UP)) this.moveUp(Pos);
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