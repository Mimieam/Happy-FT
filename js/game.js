var Game = {};

Game.fps = 60;



//game.context = current canvas

Game.initialize = function() {
  this.entities = [];  // every game object goes here except the hero
  this.Hero =[];
  this.Controllers = [];
  this.CurrentHero;
  this.context = document.getElementById("viewport").getContext("2d");
  this.collision = new ColDwall();  // collision detection engine -> will need to be improved later
  this.spriteDB = new SpriteDB();  // sprite sheet manager
  this.score = 0;
  this.isPaused = false;
  this.GameIsOver = false;
};

Game.reset = function(){
    this.initialize();
};

Game.draw = function() {
      //  console.log("pause in Game.draw: "+ this.isPaused);
        if (false == this.isPaused){
          
          //regular mode 
              this.context.fillStyle = '#d0e7f9';  // draw the background color
              // this.context.fillRect(0, 0, Game.context.canvas.width, Game.context.canvas.height);
               
               // uncomment the 2 following line to go in the X dimension (or Xmode)  - rgba(208,231,249,0.05)'
              // this. context.fillStyle = 'rgba(0,0,0/,0.05)';
              this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
               
              
              for (var i=0; i < this.entities.length ; i++) {
                this.entities[i].draw(this.context);
              }
               
                var x=this.entities.length -1; 
                this. context.fillStyle = 'rgba(208,231,249,0.08)';
                this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                //this.entities[x].draw(this.context);
            for (var i = 0; i < this.Hero.length; i++) {
                this.Hero[i].draw(this.context);   
            }
             
              // Game.addWave(); // dont put that here... cause memory leak ^^
              
             for (var i=0; i < this.Controllers.length ; i++) {  // draw all controller - only one so far... 
                Game.Controllers[i].draw(this.context);
             }
             
              Game.getScore();
              Game.gameover();
        
    }
  
};

Game.update = function() {
    // console.log("pause in Game.update: "+ this.isPaused);
    if (false == this.isPaused){
       
    	Game.checkCollision();
      for (var i=0; i < this.entities.length; i++) {
        this.entities[i].update();
      }
      
      for (var i = 0; i < this.Hero.length; i++) {
            this.Hero[i].update();   
       }
      
     // this.Hero[0].update();
      
      for (var i=0; i < this.Controllers.length; i++) {
        this.Controllers[i].update();
      }
    }


};

Game.addEventListener = function() {
    window.addEventListener('keyup', function(event) { event.preventDefault();
    
    for (var i = 0; i < Game.Hero.length; i++) {
        Game.Hero[i].Movement.keyBoard.onKeyup(event);
    }
    //Game.CurrentHero.Movement.keyBoard.onKeyup(event);
    
    }, false);  //ugly ... cloud be better .. Optimize later
    window.addEventListener('keydown', function(event) { event.preventDefault();
    
    for (var i = 0; i < Game.Hero.length; i++) {
        Game.Hero[i].Movement.keyBoard.onKeydown(event);
    }
    //Game.CurrentHero.Movement.keyBoard.onKeydown(event); 
    
    }, false);
  
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
            
    			//	Game.entities[j].touchCloud();

            };
       
      
         for (var j=0; j < Game.Controllers.length; j++)  {
            
        			Game.Controllers[j].touchCloud();

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
  $(window).focus(function(){ Game.isPaused  = false;});
    $(window).blur(function(){ Game.isPaused  = true;});
    
function handleVisibilityChange() {
    if (document.hidden) {
        Game.isPaused = true; console.log(document.hidden); }     
    else
         Game.isPaused = false;      
      
}
document.addEventListener("visibilitychange", handleVisibilityChange, false);

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
  // this.context.fillStyle = '#1C6BA0';  // draw the waves color
  // this.context.fillRect(0, Game.context.canvas.height - 75, 1000 , 300 );
  // 
  // console.log(new Wave());
 Game.entities.push(new Wave());
// weird square
  // this.context.fillRect(25,25,100,100);
  // this.context.clearRect(45,45,60,60);
  // this.context.strokeRect(50,50,50,50);
  
  
 //  this.context.beginPath();
 //  this.context.arc(75,75,50,0,Math.PI*2,true); // Outer circle
 //  this.context.moveTo(110,75);
 //  this.context.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
 //  this.context.moveTo(65,65);
 //  this.context.arc(60,65,5,0,Math.PI*2,true);  // Left eye
 //  this.context.moveTo(95,65);
 //  this.context.arc(90,65,5,0,Math.PI*2,true);  // Right eye
 //  this.context.stroke();
 //  
 //  
 //    for(var i=0;i<4;i++){
 //    for(var j=0;j<3;j++){
 //      this.context.beginPath();
 //      var x              = 25+j*50;               // x coordinate
 //      var y              = 25+i*50;               // y coordinate
 //      var radius         = 20;                    // Arc radius
 //      var startAngle     = 0;                     // Starting point on circle
 //      var endAngle       = Math.PI+(Math.PI*j)/2; // End point on circle
 //      var anticlockwise  = i%2==0 ? false : true; // clockwise or anticlockwise
 // 
 //      this.context.arc(x,y,radius,startAngle,endAngle, anticlockwise);
 // 
 //      if (i>1){
 //        this.context.fill();
 //      } else {
 //        this.context.stroke();
 //      }
 //    }
 //  }
 //  
  
 	
}

Game.addFancyController = function(x,y){
    Game.Controllers.push(new SpiningController(Game.context.canvas.width, Game.context.canvas.height, x,y));    
}


Game.checkCollision = function(){
	for (var i=0; i < this.Hero.length; i++) {
           for (var j=0; j < this.entities.length; j++)  {
              if( this.collision.areColliding(this.Hero[i], this.entities[j])) {
					this.entities[j].touchCloud();
               
              }
            }
          }
};

Game.gameover = function(){
    if(this.score < -20)
    {
        
    if (window.onEachFrame) {
       window.cancelAnimationFrame(window.onEachFrame);
               window.onEachFrame = undefined;
            }
        
        console.log('*************************gAME OVER*****************************************');
        this.context.fillStyle = "black";
    	this.context.font = "24px Helvetica";
    	this.context.textAlign = "left";
    	this.context.textBaseline = "top";
        this.context.fillText("Game Over : " + this.score, 0, 0);
        // $('#reset').fadeIn();
       // this.reset();
       this.GameIsOver = true;
        return true;
    }
    else 
        return false;
    
};

Game.getScore = function () 
{
	this.context.fillStyle = "black";
	this.context.font = "24px Helvetica";
	this.context.textAlign = "left";
	this.context.textBaseline = "top";
	this.context.fillText("Score : " + this.score, 850, 30);
};
