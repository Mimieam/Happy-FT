 function InputManager ()  
{
	this.keyBoard =  new KbManager();
	this.UP = false;
	this.DOWN = false;
	this.LEFT = false;
	this.RIGHT = false;
	this.NOINPUT = true;
	
	this.addToX = 0;
	this.addToY = 0;
	
	this.FORWARDBOOST = false;
		
	// those are to here to stop the animation and movement after A has been pressed once
	this.alreadyPressed = false;  // check if A has been already pressed
	this.animCount = 8; // frame number for boost forward animation
	
};

InputManager.prototype.reset = function() {
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
  this.FORWARDBOOST = false;


  
};

InputManager.prototype.moveRight = function(xPos) {
  this.addToX += xPos;
  this.RIGHT = true;
  this.NOINPUT = false;
  
  this.UP = false;
  this.DOWN = false;
  this.LEFT = false;
  this.FORWARDBOOST = false;

};

InputManager.prototype.moveUp = function(yPos) {
  this.addToY -= yPos;
  this.UP = true;
  this.NOINPUT = false;
  
  this.LEFT = false;
  this.DOWN = false;
  this.RIGHT = false;
  this.FORWARDBOOST = false;

};

InputManager.prototype.moveDown = function(yPos) {
  this.addToY += yPos;
  this.DOWN = true;
  this.NOINPUT = false;
  
  this.LEFT = false;
  this.UP = false;
  this.RIGHT = false;
  this.FORWARDBOOST = false;

};

InputManager.prototype.chargeForward = function(xPos) {
var  extraBoost = 3;
  this.addToX += xPos*extraBoost/2 ;
  this.DOWN = false;
  this.NOINPUT = false;
  
  this.LEFT = false;
  this.UP = false;
  this.RIGHT = false;
  this.FORWARDBOOST = true;

};

InputManager.prototype.updatePos = function(Pos) {
  if (this.keyBoard.isDown(this.keyBoard.Controller.UP)) {this.moveUp(Pos)};
  if (this.keyBoard.isDown(this.keyBoard.Controller.LEFT)) this.moveLeft(Pos);
  if (this.keyBoard.isDown(this.keyBoard.Controller.DOWN)) this.moveDown(Pos);
  if (this.keyBoard.isDown(this.keyBoard.Controller.RIGHT)) this.moveRight(Pos);
  if (this.keyBoard.isDown(this.keyBoard.Controller.A)&&!this.alreadyPressed) {this.chargeForward(Pos); this.animCount--;};

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

