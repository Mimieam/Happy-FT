http://www.iguanademos.com/Jare/docs/html5/Lessons/Lesson5/
function Enemy() {
    'use strict';
	this.img = new Image();
	this.img.src = 'img/iliisy.png';
	this.Self = new player(this.img);
	this.Self.animUpdate = 30;
	this.w = 40;
	this.h = 40;
	this.x = (Game.context.canvas.width - this.w);
	this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	
	this.eps = 10;
	this.velocity = 1.5  ; 
	this.RegisterAnimations();
	this.animPlayer = new SpriteManager(this.Self.animSet.FORWARD);  //default animation


};
Enemy.prototype.RegisterAnimations = function(){
	this.Self.addAnimation( 'FORWARD', 	 
	new AnimationData(Game.spriteDB.base['Enemie1_FORWARD'],
			{
			  repeats: true,
			  keyframe: 0
			}
		)	
	);


	this.Self.addAnimation( 'BACKWARD', 
	 new AnimationData(Game.spriteDB.base['Enemie1_BACKWARD']
			,
			{
			  repeats: true,
			  keyframe: 0
			}
		  )	
	);
}

Enemy.prototype.chooseAnimation = function() {
	
};


Enemy.prototype.draw = function(context) {
    'use strict';
	//this.chooseAnimation();
	context.drawImage(this.img, this.animPlayer.frame.x, this.animPlayer.frame.y , this.animPlayer.frame.w ,this.animPlayer.frame.h, this.x,this.y,this.animPlayer.frame.w ,this.animPlayer.frame.h );
		
	/* 	context.fillStyle = "blue"; 
		context.fillRect(this.animPlayer.frame.x, this.animPlayer.frame.y, this.animPlayer.frame.w, this.animPlayer.frame.h);
		 */

};

Enemy.prototype.update = function(){	
		this.animPlayer.update(60);	
		this.updatePos();
};


Enemy.prototype.touchCloud = function() {
		console.log("an enemie has been touched");
		Game.score ++;

			
	this.x = (Game.context.canvas.width - this.w);
	this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
	
};


Enemy.prototype.updatePos = function(){
	var biz = 5

	if (this.x<Game.Hero[0].x) {
	this.x += this.velocity ;
	this.animPlayer.SetCurrentAnimation(this.Self.animSet.BACKWARD);
	}; 
	
	if (this.x>Game.Hero[0].x) {
	this.x -= this.velocity;
	this.animPlayer.SetCurrentAnimation(this.Self.animSet.FORWARD);
	}
	
	
	if (this.y<Game.Hero[0].y) {this.y += this.velocity };
	if (this.y>Game.Hero[0].y) {this.y -= this.velocity};
	
		if ( this.y < (Game.Hero[0].y + this.eps ) || this.y <(Game.Hero[0].y - this.eps ) ) {
		this.y += (Math.random() > 0.5 ) ? biz*this.velocity : -biz*this.velocity ;       // oscillation of the enemy
		this.x += (Math.random() > 0.5 ) ? biz*this.velocity : -biz*this.velocity ; 
		}
		
	if ( this.x < (Game.Hero[0].x + this.eps ) || this.x < (Game.Hero[0].x - this.eps ) ) {
		this.x += (Math.random() > 0.5 ) ? biz*this.velocity : -biz * this.velocity ;
		this.y += (Math.random() > 0.5 ) ? biz*this.velocity : -biz*this.velocity ;  
		}

 };

