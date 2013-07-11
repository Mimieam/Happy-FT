function Cloud() {
  this.radius =Math.floor(Math.random()*50);
  this.w = this.radius;
  this.h = this.radius;
  this.x = Math.floor(Math.random() * (Game.context.canvas.width - this.w));
  this.y = Math.floor(Math.random() * (Game.context.canvas.height - this.h));
  this.intensity = Math.random()/2;
  this.speed = Math.ceil(Math.random()/2 * 5) ;
  this.velocity = 1 ;  // move in only 1 direction :D
  
  this.touched = false;
  this.color = {
	one:255,
	two:255,
	trois:255,
	};
  
};

Cloud.prototype.draw = function(context) {
 //context.fillStyle = "red"; context.fillRect(this.x, this.y, this.w, this.h);
  context.fillStyle = 'rgba(' + this.color.one + ', ' + this.color.two + ', ' + this.color.trois + ', ' + this.intensity + ')';
  context.beginPath();
  context.arc(this.x, this.y,this.radius, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();  
 
};


Cloud.prototype.update = function() {
if(this.touched!= true){
  if (this.x < Game.context.canvas.width + this.w) {
    this.velocity =   this.speed ;    // now each cloud has his own speed :D
  } else if (this.x > Game.context.canvas.width + this.w) {
    this.x = 0 - this.radius;
      this.color = {
		one:255,
		two:255,
		trois:255,
		};
        // console.log(this.touched +" for touched");
  }
  this.x += this.velocity;
}else { // make the touched cloud follow the hero
  // this.x = Game.Hero[0].x + Game.Hero[0].w/2;
  // this.y = Game.Hero[0].y + Game.Hero[0].h/2;
  this.intensity = 0.1;
  
    this.y += (Math.sin((this.x + this.velocity) * 0.3)) + (Math.sin((this.y + this.velocity) * 0.5) );  
    this.x  += (Math.sin((this.x + this.velocity) * 0.3) + 1) * 2 + (Math.sin((this.y + this.velocity) * 0.5) + 1) * 2;
    // this.x  += 0.2;
  
}

};

/* Cloud.prototype.touchCloud = function() {
};
 */

Cloud.prototype.touchCloud = function() {

	this.touched = true;
		this.color = {
		one: Math.floor((Math.random()*255)),
		two: Math.floor((Math.random()*255)),
		trois: Math.floor((Math.random()*255)),
		};
	
};


