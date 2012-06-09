function KbManager ()
{
	this.pressedKey = {}; // hold the key pressed
	this.Controller = {		 'UP': 38,
							 'DOWN': 40, 
							 'LEFT': 37, 
							 'RIGHT': 39,
						  	 'PAUSE': 16 }; 
							 
};
        
KbManager.prototype.reset = function ()
{
	this.keysDown = {};
};

KbManager.prototype.isDown = function(keyCode) 
{
    return this.pressedKey[keyCode];
};

KbManager.prototype.onKeydown = function(event) 
{
    this.pressedKey[event.keyCode] = true;
};

KbManager.prototype.onKeyup = function(event) 
{
    delete this.pressedKey[event.keyCode];
};
