var StartNow = function() {

    var renderStats = new Stats();
    renderStats.domElement.style.position = 'absolute';
    renderStats.domElement.style.top = '0px';
    renderStats.domElement.style.zIndex = 100;
    document.body.appendChild(renderStats.domElement);

    var updateStats = new Stats();
    updateStats.domElement.style.position = 'absolute';
    updateStats.domElement.style.top = '50px';
    updateStats.domElement.style.zIndex = 100;
    document.body.appendChild(updateStats.domElement);



    Game.initialize();

    // Add some moving Clouds
    var i = 200;
    while (i--) Game.addCloud();

    Game.addWave();
    Game.addWave();
    Game.addWave();
    //Add Happy the hero :D
    Game.addHero();
    // Game.addHero();
    // Game.addHero();
    // Game.addHero();

    i = 7;
    while (i--) Game.addFish(); // Add some fishes

    i = 3
    while (i--) Game.addEnemy(); // and some bees

// they look useless... so remove them for now
    //Game.addFancyController(110 * 2, Game.context.canvas.height); // my spinning controller 
    //Game.addFancyController(Game.context.canvas.width, Game.context.canvas.height); // my spinning controller 

    Game.addEventListener();

    Game.run = (function() {
        var loops = 0,
            skipTicks = 1000 / Game.fps,
            maxFrameSkip = 10,
            nextGameTick = (new Date).getTime(),
            lastGameTick;
                // renderStats.begin();
                // updateStats.begin();
        return function() {
            loops = 0;
            

            while ((new Date).getTime() > nextGameTick) {
                Game.update();
                nextGameTick += skipTicks;
                loops++;
                

                
            }

            if (!loops) {
                Game.draw((nextGameTick - (new Date).getTime()) / skipTicks);
            }
            else {
                Game.draw(0);
            }
        };
    })();

    (function() {
        var onEachFrame;
        if (window.webkitRequestAnimationFrame) {
            onEachFrame = function(cb) {
                var _cb = function() {
                    cb();
                    webkitRequestAnimationFrame(_cb);
                }
                _cb();
            };
        }
        else if (window.mozRequestAnimationFrame) {
            onEachFrame = function(cb) {
                var _cb = function() {
                    cb();
                    mozRequestAnimationFrame(_cb);
                }
                _cb();
            };
        }
        else {
            onEachFrame = function(cb) {
                setInterval(cb, 1000 / 60);
            }
        }

        window.onEachFrame = onEachFrame;
    })();


    //   if ( true == Game.isPaused )
    //  setTimeout( function () { onEachFrame(Game.run);   },200);
    // else     
    onEachFrame(Game.run);




};
