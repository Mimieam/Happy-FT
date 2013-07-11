    /**
	 *
	 * inspired by http://hakim.se/experiments/  - Thank you dude :)
	 */
function SpiningController(Sw, Sh , posX, posY) { // we pass the screen width and height and the position  (x, y) we want the controller to be at 
       'use strict';
    this.SCREEN_WIDTH = Sw;
    this.SCREEN_HEIGHT = Sh;
	
	this.RADIUS = 110;
	
	this.RADIUS_SCALE = 1;
	this.RADIUS_SCALE_MIN = 1;
	this.RADIUS_SCALE_MAX = 1.5;
	
	//The number of particles that are used to generate the trail
	this.QUANTITY = 45;

	this.canvas;
	this.context;
	this.particles;
	
	this.mouseX = this.SCREEN_WIDTH - this.RADIUS ; //(window.innerWidth - this.SCREEN_WIDTH);
	this.mouseY = this.SCREEN_HEIGHT - this.RADIUS ; //(window.innerHeight - SCREEN_HEIGHT);
    
    var px = posX,
        py = posY;
        
    this.posX = px||this.mouseX;
    this.posY = py|| this.mouseY;
    
	this.mouseIsDown = false;
    
    this.particles = [];
		
		for (var i = 0; i < this.QUANTITY; i++) {
			var particle = {
				position: { x: this.posX, y: this.posY },
				shift: { x: this.posX, y: this.posY },
				size: 1,
				angle: 0,
				speed: 0.07+Math.random()*0.11,
				targetSize: 1,
				fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
				orbit: this.RADIUS*0.5 + (this.RADIUS * 0.5 * Math.random())
			};
			
			this.particles.push( particle );
		}
  
};

SpiningController.prototype.draw = function(context) {
    
        // Fade out the lines slowly by drawing a rectangle over the entire canvas
      //context.fillStyle = 'rgba(0,0,0,0.05)';
   	  //context.fillRect(0, 0, context.canvas.width, context.canvas.height);
         
    for (i = 0, len = this.particles.length; i < len; i++) {
    		var particle = this.particles[i];
			
			var lp = { x: particle.position.x, y: particle.position.y };
			
			// Offset the angle to keep the spin going
			particle.angle += particle.speed;
			
			// Follow mouse with some lag
			particle.shift.x += ( this.posX - this.RADIUS - particle.shift.x) * (particle.speed);
			particle.shift.y += ( this.posY - this.RADIUS  - particle.shift.y) * (particle.speed);
          //console.log( mouseX +', '+mouseY )
			
			// Apply position
			particle.position.x = particle.shift.x + Math.cos(i + particle.angle) * (particle.orbit*this.RADIUS_SCALE);
			particle.position.y = particle.shift.y + Math.sin(i + particle.angle) * (particle.orbit*this.RADIUS_SCALE);
			
			// Limit to screen bounds
			particle.position.x = Math.max( Math.min( particle.position.x, this.SCREEN_WIDTH ), 0 );
			particle.position.y = Math.max( Math.min( particle.position.y, this.SCREEN_HEIGHT ), 0 );
			
			particle.size += ( particle.targetSize - particle.size ) * 0.05;
			
		    // If we're at the target size, set a new one. Think of it like a regular day at work.
			if( Math.round( particle.size ) == Math.round( particle.targetSize ) ) {
				particle.targetSize = 1 + Math.random() * 7;
			}
			
			context.beginPath();
			context.fillStyle = particle.fillColor;
			context.strokeStyle = particle.fillColor;
			context.lineWidth = particle.size;
			context.moveTo(lp.x, lp.y);
			context.lineTo(particle.position.x, particle.position.y);
			context.stroke();
			context.arc(particle.position.x, particle.position.y, particle.size/2, 0, Math.PI*2, true);
			context.fill();
		
	//	 this.mouseInDown = false;
		}
};

SpiningController.prototype.update = function() {
        
		if( this.mouseIsDown ) {
			// Scale upward to the max scale
			this.RADIUS_SCALE += ( this.RADIUS_SCALE_MAX - this.RADIUS_SCALE ) * (0.02);
           //  this.mouseInDown = false;
           
		}
		else {
			// Scale downward to the min scale
			this.RADIUS_SCALE -= ( this.RADIUS_SCALE - this.RADIUS_SCALE_MIN ) * (0.02);
		}
		
		this.RADIUS_SCALE = Math.min( this.RADIUS_SCALE, this.RADIUS_SCALE_MAX );
		
	
		
		
	};



SpiningController.prototype.touchCloud = function() {
   // if (this.mouseIsDown)
  //  this.mouseIsDown = false;
  //  else
     this.mouseInDown = true;
};


/*
	
	var SCREEN_WIDTH = 900;
	var SCREEN_HEIGHT = 600;
	
	var RADIUS = 110;
	
	var RADIUS_SCALE = 1;
	var RADIUS_SCALE_MIN = 1;
	var RADIUS_SCALE_MAX = 1.5;
	
	// The number of particles that are used to generate the trail
	var QUANTITY = 25;

	var canvas;
	var context;
	var particles;
	
//	var mouseX = (window.innerWidth - SCREEN_WIDTH);
//	var mouseY = (window.innerHeight - SCREEN_HEIGHT);
	var mouseIsDown = false;
	
	init();

	function init() {

		canvas = document.getElementById( 'viewport' );
		
		if (canvas && canvas.getContext) {
			context = canvas.getContext('2d');
			
			// Register event listeners
			document.addEventListener('mousemove', documentMouseMoveHandler, false);
			document.addEventListener('mousedown', documentMouseDownHandler, false);
			document.addEventListener('mouseup', documentMouseUpHandler, false);
			canvas.addEventListener('touchstart', canvasTouchStartHandler, false);
			canvas.addEventListener('touchmove', canvasTouchMoveHandler, false);
			window.addEventListener('resize', windowResizeHandler, false);
			
			createParticles();
			
			windowResizeHandler();
			
			setInterval( loop, 1000 / 60 );
		}
	}

	function createParticles() {
		particles = [];
		
		for (var i = 0; i < QUANTITY; i++) {
			var particle = {
				position: { x: mouseX, y: mouseY },
				shift: { x: mouseX, y: mouseY },
				size: 1,
				angle: 0,
				speed: 0.01+Math.random()*0.09,
				targetSize: 1,
				fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
				orbit: RADIUS*0.5 + (RADIUS * 0.5 * Math.random())
			};
			
			particles.push( particle );
		}
	}

	function documentMouseMoveHandler(event) {
		mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
		mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
	}
	
	function documentMouseDownHandler(event) {
		mouseIsDown = true;
	}
	
	function documentMouseUpHandler(event) {
		mouseIsDown = false;
	}

	function canvasTouchStartHandler(event) {
		if(event.touches.length == 1) {
			event.preventDefault();

			mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
			mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
		}
	}
	
	function canvasTouchMoveHandler(event) {
		if(event.touches.length == 1) {
			event.preventDefault();

			mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * 0.5;
			mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * 0.5;
		}
	}
	
	function windowResizeHandler() {
		//SCREEN_WIDTH = window.innerWidth;
		//SCREEN_HEIGHT = window.innerHeight;
		
		canvas.width = SCREEN_WIDTH;
		canvas.height = SCREEN_HEIGHT;
		
		canvas.style.position = 'absolute';
		canvas.style.left = (window.innerWidth - SCREEN_WIDTH) * 0.5 + 'px';
		canvas.style.top = (window.innerHeight - SCREEN_HEIGHT) * 0.5 + 'px';
	}

	function loop() {
    	
		if( this.mouseIsDown ) {
			// Scale upward to the max scale
			this.RADIUS_SCALE += ( this.RADIUS_SCALE_MAX - this.RADIUS_SCALE ) * (0.02);
		}
		else {
			// Scale downward to the min scale
			this.RADIUS_SCALE -= ( this.RADIUS_SCALE - this.RADIUS_SCALE_MIN ) * (0.02);
		}
		
		this.RADIUS_SCALE = Math.min( this.RADIUS_SCALE, this.RADIUS_SCALE_MAX );
		
		// Fade out the lines slowly by drawing a rectangle over the entire canvas
       // context.fillStyle = 'rgba(0,0,0,0.05)';
   		//context.fillRect(0, 0, context.canvas.width, context.canvas.height);
		
		for (i = 0, len = this.particles.length; i < len; i++) {
			var particle = this.particles[i];
			
			var lp = { x: particle.position.x, y: particle.position.y };
			
			// Offset the angle to keep the spin going
			particle.angle += particle.speed;
			
			// Follow mouse with some lag
			particle.shift.x += ( this.SCREEN_WIDTH - this.RADIUS - particle.shift.x) * (particle.speed);
			particle.shift.y += ( this.SCREEN_HEIGHT - this.RADIUS  - particle.shift.y) * (particle.speed);
          //console.log( mouseX +', '+mouseY )
			
			// Apply position
			particle.position.x = particle.shift.x + Math.cos(i + particle.angle) * (particle.orbit*this.RADIUS_SCALE);
			particle.position.y = particle.shift.y + Math.sin(i + particle.angle) * (particle.orbit*this.RADIUS_SCALE);
			
			// Limit to screen bounds
			particle.position.x = Math.max( Math.min( particle.position.x, this.SCREEN_WIDTH ), 0 );
			particle.position.y = Math.max( Math.min( particle.position.y, this.SCREEN_HEIGHT ), 0 );
			
			particle.size += ( particle.targetSize - particle.size ) * 0.05;
			
			// If we're at the target size, set a new one. Think of it like a regular day at work.
			if( Math.round( particle.size ) == Math.round( particle.targetSize ) ) {
				particle.targetSize = 1 + Math.random() * 7;
			}
			
			context.beginPath();
			context.fillStyle = particle.fillColor;
			context.strokeStyle = particle.fillColor;
			context.lineWidth = particle.size;
			context.moveTo(lp.x, lp.y);
			context.lineTo(particle.position.x, particle.position.y);
			context.stroke();
			context.arc(particle.position.x, particle.position.y, particle.size/2, 0, Math.PI*2, true);
			context.fill();
		}
	}
	
	*/
	