

	var mouseX = 0, mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
            
            
            
function particle(){
    'use strict';
    this.x = 0;
	this.y = 0;
    this.size = 0; //scale
    this.material = {

    				color: 0xffffff,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 1, 0, Math.PI * 2, true );
						context.fill();

					}

				};
}

function particles(){
    'use strict';
    this.Arr = new Array(); 
    this.separation = 100;
    this.amountx =50 ;
    this.amounty = 50;
}

particles.prototype.setup = function(){
	var i = 0;

	for ( var ix = 0; ix < this.amountx; ix ++ ) {

		for ( var iy = 0; iy <  this.amounty; iy ++ ) {
			this.Arr[i].x = ix * this.separation - ( ( this.amountx * this.separation ) / 2 );
			this.Arr[i].y = iy * this.separation - ( ( this.amountx * this.separation ) / 2 );
		}

	}

}

function render() {

camera.position.x += ( mouseX - camera.position.x ) * .05;
camera.position.y += ( - mouseY - camera.position.y ) * .05;
camera.lookAt( scene.position );

var i = 0;

for ( var ix = 0; ix < 50; ix ++ ) {

for ( var iy = 0; iy < 50; iy ++ ) {

particle = particles[ i++ ];
particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
}
}

renderer.render( scene, camera );
count += 0.1;

}