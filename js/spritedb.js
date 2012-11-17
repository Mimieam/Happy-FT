//Sprite DB - 
SpriteDB = (function () 
{
    
	this.base = []
	
	this.base['Happy_FORWARD'] =[
		  { x: 13, y: 21, w: 56, h: 48, length: 160 },
		  { x: 69, y: 21, w: 56, h: 48, length: 160 },
		  { x: 125, y: 21, w: 56, h: 48, length: 160 },
		  { x: 181, y: 21, w: 56, h: 48, length: 160 },
		  { x: 237, y: 21, w: 56, h: 48, length: 160 },
		  { x: 293, y: 21, w: 56, h: 48, length: 160 }
		]
									
	this.base['Happy_BACKWARD'] = [
          { x: 10, y: 105, w: 56, h: 48, length: 160 },
          { x: 66, y: 105, w: 56, h: 48, length: 160 },
          { x: 122, y: 105, w: 56, h: 48, length: 160 },
          { x: 178, y: 105, w: 56, h: 48, length: 160 },
          { x: 234, y: 105, w: 56, h: 48, length: 160 },
          { x: 290, y: 105, w: 56, h: 48, length: 160 },
          { x: 346, y: 105, w: 56, h: 48, length: 160 }
        ]
	this.base['Happy_FASTFORWARD'] =  [
          { x: 0, y: 160, w: 60, h: 60, length: 160 },
          { x: 60, y: 160, w: 60, h: 60, length: 160 },
          { x: 120, y: 160, w: 60, h: 60, length: 160 },
          { x: 180, y: 160, w: 60, h: 60, length: 160 },
          { x: 240, y: 160, w: 60, h: 60, length: 160 },
          { x: 300, y: 160, w: 60, h: 60, length: 160 },
          { x: 360, y: 160, w: 60, h: 60, length: 160 },
          { x: 420, y: 160, w: 60, h: 60, length: 160 }
        ] 
 	this.base['Fish_THROW'] = [
		  { x: 0,   y: 0, w: 40, h: 40, length: 160 },
          { x: 40,  y: 0, w: 40, h: 40, length: 160 },
          { x: 80,  y: 0, w: 40, h: 40, length: 160 },
          { x: 120, y: 0, w: 40, h: 40, length: 160 },
          { x: 160, y: 0, w: 40, h: 40, length: 160 },
          { x: 200, y: 0, w: 40, h: 40, length: 160 },
          { x: 240, y: 0, w: 40, h: 40, length: 160 },       
          { x: 280, y: 0, w: 40, h: 40, length: 160 },
          { x: 320, y: 0, w: 40, h: 40, length: 160 },
          { x: 360, y: 0, w: 40, h: 40, length: 160 },      
          { x: 400, y: 0, w: 40, h: 40, length: 160 },
          { x: 440, y: 0, w: 40, h: 40, length: 160 },
          { x: 480, y: 0, w: 40, h: 40, length: 160 },
          { x: 520, y: 0, w: 40, h: 40, length: 160 },
          { x: 560, y: 0, w: 40, h: 40, length: 160 },
          { x: 600, y: 0, w: 40, h: 40, length: 160 }
	
	]
	this.base['Enemie1_FORWARD'] = [
		  { x: 0,   y: 0, w: 40, h: 40, length: 160 },
          { x: 40,  y: 0, w: 40, h: 40, length: 160 },
          { x: 80,  y: 0, w: 40, h: 40, length: 160 }
		]
	this.base['Enemie1_BACKWARD'] = [
		  { x: 115,   y: 0, w: 40, h: 40, length: 160 },
          { x: 155,  y: 0, w: 40, h: 40, length: 160 },
          { x: 195,  y: 0, w: 40, h: 40, length: 160 }
        ]
         
		
	/*this.base['Fish']  */
});


/*an Animation is a set of frames*/
/*  
function Animation(){
	this.frames = [];
}

Animation.prototype.addFrame = function (newFrame){
	this.frames.push(newFrame);
};

 */