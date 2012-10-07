function Happy() {
    'use strict';
	this.img = new Image();
	this.img.src = 'img/HappyF.png';
	this.Self = new player(this.img);
	this.Self.animUpdate = 30;
	this.w = 56;
	this.h = 48;
	this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
	this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	this.intensity = Math.random()/2;
	this.velocity = 1 ;  // move in only 1 direction :D
 
	this.RegisterAnimations();

	this.Movement = new InputManager();

	this.animPlayer = new SpriteManager(this.Self.animSet.FORWARD);  //default animation


};
Happy.prototype.RegisterAnimations = function(){
	this.Self.addAnimation( 'FORWARD', 	 
	new AnimationData(Game.spriteDB.base['Happy_FORWARD'],
		{
		  repeats: true,
		  keyframe: 0
		}
	)	
);


this.Self.addAnimation( 'BACKWARD', 
 new AnimationData(Game.spriteDB.base['Happy_BACKWARD']
        ,
        {
          repeats: true,
          keyframe: 0
        }
      )	
);

this.Self.addAnimation( 'FASTFORWARD', 
 new AnimationData(Game.spriteDB.base['Happy_FASTFORWARD']
,
        {
          repeats: false,
          keyframe: 0
        }
      )	
);
}

Happy.prototype.chooseAnimation = function() {
	 /* bind a movement to an animation*/
	 if ( this.Movement.NOINPUT  == true)
	 {
			this.animPlayer.SetCurrentAnimation(this.Self.animSet.FORWARD);
			this.Self.animUpdate = 30;
	 }
	 else if(this.Movement.RIGHT  ) 
	{
		this.Self.animUpdate = 30;
		this.animPlayer.SetCurrentAnimation(this.Self.animSet.FORWARD);

		// console.log("Debug Moving right: "+ this.Movement.RIGHT);
	}		 
	else if(this.Movement.DOWN)
	{
			this.Self.animUpdate = 30;
		console.log("Debug Moving Down: "+ this.Movement.DOWN);
	}	
	else if(this.Movement.LEFT == true)
	{
			this.Self.animUpdate = 30;
		this.animPlayer.SetCurrentAnimation(this.Self.animSet.BACKWARD);

		// console.log("Debug Moving Left: "+ this.Movement.LEFT);
	}
	else if(this.Movement.UP == true)
	{
			this.Self.animUpdate = 30;
		console.log("Debug Moving Up: "+ this.Movement.UP);
	}	
	else if(this.Movement.FORWARDBOOST == true)
	{
		this.Self.animUpdate = 30;
		this.animPlayer.SetCurrentAnimation(this.Self.animSet.FASTFORWARD); 
		//this.animPlayer.SetCurrentAnimation(this.animPlayer.defaultAnim); 
		
	this.Movement.FORWARDBOOST = false;  // stop the animation - the default one will kicked in
	

	}	
};


Happy.prototype.draw = function(context) {
    'use strict';
	//this.chooseAnimation();
	context.drawImage(this.img, this.animPlayer.frame.x, this.animPlayer.frame.y , this.animPlayer.frame.w ,this.animPlayer.frame.h, this.x,this.y,this.animPlayer.frame.w ,this.animPlayer.frame.h );
		
	/* 	context.fillStyle = "green"; 
		context.fillRect(this.animPlayer.frame.x, this.animPlayer.frame.y, this.animPlayer.frame.w, this.animPlayer.frame.h);
		
 */
};

Happy.prototype.update = function(){	
		this.chooseAnimation();
		this.animPlayer.update(this.Self.animUpdate);
		
			if (this.x < Game.context.canvas.width + this.w) {
			this.velocity = 1;
		  } else if (this.x > Game.context.canvas.width + this.w) {
			this.x  = 0 - this.w ;
		  }
		  this.x = this.Movement.updateXpos(this.x,2);
		  this.y = this.Movement.updateYpos(this.y,1);
		  this.Movement.reset();
			
};

