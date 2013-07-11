var mouseX = 0,
    mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;



function particle() {
    'use strict';
    this.x = 0;
    this.y = 0;
    this.size = 0; //scale
    this.material = {

        color: 0xffffff,
        program: function(context) {

            context.beginPath();
            context.arc(0, 0, 1, 0, Math.PI * 2, true);
            context.fill();

        }

    };
}

function particles() {
    'use strict';
    this.Arr = new Array();
    this.separation = 100;
    this.amountx = 50;
    this.amounty = 50;
}

particles.prototype.setup = function() {
    var i = 0;

    for (var ix = 0; ix < this.amountx; ix++) {

        for (var iy = 0; iy < this.amounty; iy++) {
            this.Arr[i].x = ix * this.separation - ((this.amountx * this.separation) / 2);
            this.Arr[i].y = iy * this.separation - ((this.amountx * this.separation) / 2);
        }

    }

}

function render() {

    var i = 0;

    for (var ix = 0; ix < 50; ix++) {

        for (var iy = 0; iy < 50; iy++) {

            particle = particles[i++];
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
    }

    // renderer.render(scene, camera);
    count += 0.1;

}


Cloud.prototype.draw = function(context) {

};


Cloud.prototype.update = function() {
    if (this.touched != true) {
        if (this.x < Game.context.canvas.width + this.w) {
            this.velocity = this.speed; // now each cloud has his own speed :D
        }
        else if (this.x > Game.context.canvas.width + this.w) {
            this.x = 0 - this.radius;
            this.color = {
                one: 255,
                two: 255,
                trois: 255,
            };
            // console.log(this.touched +" for touched");
        }
        this.x += this.velocity;
    }
    else { // make the touched cloud follow the hero
        this.x = Game.Hero[0].x + Game.Hero[0].w / 2;
        this.y = Game.Hero[0].y + Game.Hero[0].h / 2;
        this.intensity = 0.1;
    }

};


Cloud.prototype.touchCloud = function() {

};




