function KbManager ()
{
	this.pressedKey = {}; // hold the key pressed
	this.lastKeyPressed = null;
	this.Controller = {		 'UP': 38,
							 'DOWN': 40, 
							 'LEFT': 37, 
							 'RIGHT': 39,
							 'A': 65,
						  	 'PAUSE': 16 }; 
							 
    this.TouchScreen = new TEvManager()
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
	this.lastKeyPressed = event.keyCode;
/* 		if (event.keyCode != 116 && event.keyCode != 122) // F5 and F11
		{
			event.stopPropagation();
			event.preventDefault();
		} */
		
};

KbManager.prototype.onKeyup = function(event) 
{
    delete this.pressedKey[event.keyCode];
	this.lastKeyPressed = event.keyCode;
/* 		if (event.keyCode != 116 && event.keyCode != 122) // F5 and F11
		{
			event.stopPropagation();
			event.preventDefault();
		} */
};
