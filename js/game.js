var Game = {};

Game.fps = 50;



//game.context = current canvas

Game.initialize = function() {
  this.entities = [];  // everything goes here except the hero
  this.Hero =[];
  this.CurrentHero;
  this.context = document.getElementById("viewport").getContext("2d");
  this.collision = new ColDwall();
  this.spriteDB = new SpriteDB();
  this.score = 0;
};

Game.draw = function() {
  this.context.fillStyle = '#d0e7f9';  // draw the background color
  this.context.fillRect(0, 0, Game.context.canvas.width, Game.context.canvas.height);
  
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
  

  this.Hero[0].draw(this.context);
  Game.addWave();
  Game.getScore();
  
  
};

Game.update = function() {
	Game.checkCollision();
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
  this.Hero[0].update();
  


};

Game.addEventListener = function() {
    window.addEventListener('keyup', function(event) { Game.CurrentHero.Movement.keyBoard.onKeyup(event); }, false);  //ugly ... cloud be better .. Optimize later
    window.addEventListener('keydown', function(event) { Game.CurrentHero.Movement.keyBoard.onKeydown(event); }, false);
};

Game.addCloud = function() {
  Game.entities.push(new Cloud());
};

Game.addHero = function() {
  Game.Hero.push(new Happy());
    this.CurrentHero = this.Hero[0];
};

Game.addFish = function() {
  Game.entities.push(new Fish());
};

Game.addEnemy = function() {
  Game.entities.push(new Enemy());
};

Game.addWave = function(){
  this.context.fillStyle = '#1C6BA0';  // draw the sky color
  this.context.fillRect(0, Game.context.canvas.height - 75, 1000 , 300 );
 	
}


Game.checkCollision = function(){
	for (var i=0; i < this.Hero.length; i++) {
           for (var j=0; j < this.entities.length; j++)  {
              if( this.collision.areColliding(this.Hero[i], this.entities[j])) {
					this.entities[j].touchCloud();
               
              }
            };
          };
};

Game.getScore = function () 
{
	this.context.fillStyle = "black";
	this.context.font = "24px Helvetica";
	this.context.textAlign = "left";
	this.context.textBaseline = "top";
	this.context.fillText("Score : " + this.score, 850, 30);
};
