function Cloud() {
  this.x = Math.floor(Math.random() * (640 - 30));;
  this.y = Math.floor(Math.random() * (480 - 30));;
  this.velocity = Math.random() > 0.5 ? -1 : 1;
};

Cloud.prototype.draw = function(context) {
  context.fillRect(this.x, this.y, 30, 30);
};

Cloud.prototype.update = function() {
  if (this.x < 0) {
    this.velocity = 1;
  } else if (this.x > 450) {
    this.velocity = -1;
  }
  
  this.x += this.velocity;
};