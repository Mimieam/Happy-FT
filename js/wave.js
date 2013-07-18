// thank you hakim :) http://hakim.se/experiments/html5/wave/03/

function Wave() {
    'use strict';
    /** The current dimensions of the screen (updated on resize) */
    this.WIDTH = window.innerWidth;
    this.HEIGHT = 1100;

    /** Wave settings */
    this.DENSITY = 0.75;
    this.FRICTION = 1.14;
    this.MOUSE_PULL = 0.09; // The strength at which the mouse pulls particles within the AOE
    this.AOE = 200; // Area of effect for mouse pull
    this.DETAIL = Math.round(this.WIDTH / 60); // The number of particles used to build up the wave
    this.WATER_DENSITY = 1.07;
    this.AIR_DENSITY = 1.02;
    this.TWITCH_INTERVAL = 2000; // The interval between random impulses being inserted into the wave to keep it movin

    this.mouseIsDown, this.isDownloadingTweets = false;
    this.ms = {
        x: 0,
        y: 0
    }; // Mouse speed
    this.mp = {
        x: 0,
        y: 0
    }; // Mouse position

    this.canvas, this.particles;

    this.timeUpdateInterval;


    this.particles = [];

    // Generate our wave particles
    for (var i = 0; i < this.DETAIL + 1; i++) {
        this.particles.push({
            x: this.WIDTH / (this.DETAIL - 4) * (i - 2), // Pad by two particles on each side
            y: this.HEIGHT * .5,
            original: {
                x: 0,
                y: this.HEIGHT * .5
            },
            velocity: {
                x: 0,
                y: Math.random() * 3
            }, // Random for some initial movement in the wave
            force: {
                x: 0,
                y: 0
            },
            mass: 10
        });
    }
}



Wave.prototype.draw = function(context) {
    if (!Game.pause)
        this.drawWave(context);
};

Wave.prototype.update = function() {
    if (this.touched != true) {
        this.updatePoint();
    }
    else {

    }
};


Wave.prototype.touchCloud = function() {
    

};


/**
 * Inserts a random impulse to keep the wave moving.
 * Impulses are only inserted if the mouse is not making
 * quick movements.
 */
Wave.prototype.Twitch = function() {
    if (this.ms.x < 6 || this.ms.y < 6) {
        var forceRange = 10; // -value to +value - change the height of the waves
        this.InsertImpulse(Math.random() * this.WIDTH, (Math.random() * (forceRange * 2) - forceRange));
    }
}

/**
 * Inserts an impulse in the wave at a specific position.
 * 
 * @param positionX the x coordinate where the impulse
 * should be inserted
 * @param forceY the force to insert
 */
Wave.prototype.InsertImpulse = function(positionX, forceY) {
    var particle = this.particles[Math.round(positionX / this.WIDTH * this.particles.length)];

    if (particle) {
        particle.force.y += forceY;
    }
}

/**
 * 
 */
Wave.prototype.drawWave = function(context) {

    var gradientFill = context.createLinearGradient(this.WIDTH * .5, this.HEIGHT * .2, this.WIDTH * .5, this.HEIGHT);
    gradientFill.addColorStop(0, '#00AABB');
    gradientFill.addColorStop(1, 'rgba(0,200,250,0)');

    // context.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    context.fillStyle = gradientFill;
    context.beginPath();
    context.moveTo(this.particles[0].x, this.particles[0].y);

    var len = this.particles.length;
    var i;

    var current, previous, next;

    for (i = 0; i < len; i++) {
        current = this.particles[i];
        previous = this.particles[i - 1];
        next = this.particles[i + 1];

        if (previous && next) {

            var forceY = 0;

            forceY += -this.DENSITY * (previous.y - current.y);
            forceY += this.DENSITY * (current.y - next.y);
            forceY += this.DENSITY / 15 * (current.y - current.original.y);

            current.velocity.y += -(forceY / current.mass) + current.force.y;
            current.velocity.y /= this.FRICTION;
            current.force.y /= this.FRICTION;
            current.y += current.velocity.y;

            var distance = this.DistanceBetween(this.mp, current);

            if (distance < this.AOE) {
                var distance = this.DistanceBetween(this.mp, {
                    x: current.original.x,
                    y: current.original.y
                });

                this.ms.x = this.ms.x * .98;
                this.ms.y = this.ms.y * .98;

                current.force.y += (this.MOUSE_PULL * (1 - (distance / this.AOE))) * this.ms.y;
            }

            // cx, cy, ax, ay
            context.quadraticCurveTo(previous.x, previous.y, previous.x + (current.x - previous.x) / 2, previous.y + (current.y - previous.y) / 2);
        }

    }

    context.lineTo(this.particles[this.particles.length - 1].x, this.particles[this.particles.length - 1].y);
    context.lineTo(this.WIDTH, this.HEIGHT);
    context.lineTo(0, this.HEIGHT);
    context.lineTo(this.particles[0].x, this.particles[0].y);

    context.fill();

}	

Wave.prototype.updatePoint = function(e) {
    this.Twitch();

    for (var i = 0; i < this.DETAIL + 1; i++) {
        this.particles[i].x = this.WIDTH / (this.DETAIL - 4) * (i - 2);
        this.particles[i].y = this.HEIGHT * .5;

        this.particles[i].original.x = this.particles[i].x;
        this.particles[i].original.y = this.particles[i].y;
    }
}

/**
 * 
 */
Wave.prototype.DistanceBetween = function(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
