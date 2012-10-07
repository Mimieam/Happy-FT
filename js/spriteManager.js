/* modified version of http://gamedev.stackexchange.com/a/1436 */
/**
  A simple animation object.
*/
function AnimationData(frames, options) {
  this.frames = frames || [{ x: 0, y: 0, w: 0, h: 0, length: 0 }];
  this.options = options || {
    repeats: false,
    keyframe: 0
  };
}

/**
  Each object would have one of these to play any animation back.
*/
function SpriteManager(animation) {
  var ani = animation || new AnimationData();
  this.defaultAnim = new AnimationData(Game.spriteDB.base['Happy_FORWARD'],
		{
		  repeats: true,
		  keyframe: 0
		}
	);	

  this.length = 0;
  this.frame = undefined;
  this.index = 0;
  this.elapsed = 0;

  this.setAnimation(ani);
  this.reset();
}
SpriteManager.prototype.SetCurrentAnimation = function(animation)
{
	this.setAnimation(animation);
};

SpriteManager.prototype.reset = function() {
  this.elapsed = 0;
  this.index = 0;
  this.frame = this.animation.frames[this.index];
};

SpriteManager.prototype.update = function(dt) {
  this.elapsed = this.elapsed + dt;

  if(this.elapsed >= this.frame.length) {
    this.index++;
    this.elapsed = this.elapsed - this.frame.length;
  }
  this.frame = this.animation.frames[this.index];
  if(this.index >= this.length) {
    if(this.animation.options.repeats) {
      this.index = this.animation.options.keyframe;
		this.frame = this.animation.frames[this.index];
    } else {
	  this.setAnimation(this.defaultAnim);
	  this.index = 0;
	   this.frame = this.defaultAnim.frames[0];
	  //this.index--;
	//	this.reset();
	}
  }


};

SpriteManager.prototype.setAnimation = function(animation, reset) {
  this.animation = animation;
  this.length = this.animation.frames.length;
};

 