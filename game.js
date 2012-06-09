var Game = {};

Game.fps = 50;

//game.context = current canvas

Game.initialize = function() {
  this.entities = [];
  this.Hero =[];
   this.CurrentHero;
  this.context = document.getElementById("viewport").getContext("2d");
};

Game.draw = function() {
  this.context.fillStyle = '#d0e7f9';
  this.context.fillRect(0, 0, Game.context.canvas.width, Game.context.canvas.height);
  
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
  this.Hero[0].draw(this.context);
};

Game.update = function() {
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

