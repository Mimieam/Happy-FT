var Game = {};

Game.fps = 60;



//game.context = current canvas

Game.initialize = function() {
  this.entities = [];  // everything goes here except the hero
  this.Hero =[];
  this.CurrentHero;
  this.context = document.getElementById("viewport").getContext("2d");
  this.collision = new ColDwall();  // collision detection engine -> will need to be improved later
  this.spriteDB = new SpriteDB();  // sprite sheet manager
  this.score = 0;
  this.isPaused = false;
};

Game.draw = function() {
      //  console.log("pause in Game.draw: "+ this.isPaused);
        if (false == this.isPaused){
  
  this.context.fillStyle = '#d0e7f9';  // draw the background color
  this.context.fillRect(0, 0, Game.context.canvas.width, Game.context.canvas.height);
  
   
  
  for (var i=0; i < this.entities.length ; i++) {
    this.entities[i].draw(this.context);
  }
  
  
   // this. context.fillStyle = 'rgba(208,231,249,0.05)';
   // this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    //this.entities[410].draw(this.context);

  this.Hero[0].draw(this.context);
  Game.addWave();
  Game.getScore();
        
    }
  
};

Game.update = function() {
    // console.log("pause in Game.update: "+ this.isPaused);
    if (false == this.isPaused){
       
    	Game.checkCollision();
      for (var i=0; i < this.entities.length; i++) {
        this.entities[i].update();
      }
      this.Hero[0].update();
    }


};

Game.addEventListener = function() {
    window.addEventListener('keyup', function(event) { event.preventDefault(); Game.CurrentHero.Movement.keyBoard.onKeyup(event); }, false);  //ugly ... cloud be better .. Optimize later
    window.addEventListener('keydown', function(event) { event.preventDefault(); Game.CurrentHero.Movement.keyBoard.onKeydown(event);  }, false);
  
   jQuery('#viewport').bind('taptwo',function(event) {   // mobile pausing
     console.log('test test shake');
     event.preventDefault();
   
        if ( false == Game.isPaused )
                Game.isPaused = true;       
        else
             Game.isPaused = false;      
         
    });
    
   $(document).keyup(function(e) {
        e.preventDefault();
          console.log('esc pressed '+Game.isPaused );
    if (e.keyCode == 27) {//esc
        if ( false == Game.isPaused )
            Game.isPaused = true;       
    else
         Game.isPaused = false;      
      
     }
     
  });
  
 jQuery('#viewport').bind('tapone',function(event) {
     console.log('test test test');
     event.preventDefault();
       Game.context.fillStyle = '#ffffff';  // draw the background color
        Game.context.fillRect(0, 0, Game.context.canvas.width, Game.context.canvas.height);
        
         for (var j=0; j < Game.entities.length; j++)  {
            
    				Game.entities[j].touchCloud();

            };
       
       
    });
    
 jQuery('#viewport').bind('shake',function(event) {
     console.log('test test shake');
     event.preventDefault();

         for (var j=0; j < Game.entities.length; j++)  {
            
        			Game.entities[j].color = {  one:255,two:255,trois:255};

            };
       
       
    });

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
//  this.context.fillStyle = '#1C6BA0';  // draw the sky color
//  this.context.fillRect(0, Game.context.canvas.height - 75, 1000 , 300 );
 	
}

Game.addFancyController = function(x,y){
    Game.entities.push(new SpiningController(Game.context.canvas.width, Game.context.canvas.height, x,y));    
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
