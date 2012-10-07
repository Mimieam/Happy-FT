var StartNow = function(){

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
   var i = 400;
   while (i--) Game.addCloud();
   
   //Add Happy the hero :D
   Game.addHero();
   
  /*  i = 5;
    while (i--)  Game.addFish();
 */	i=3
    while (i--)  Game.addEnemy();
  
   
   Game.addEventListener();
   
   
   
   Game.run = (function() {  // mainLOOP
     var loops = 0, skipTicks = 1000 / Game.fps,
         maxFrameSkip = 10,
         nextGameTick = (new Date).getTime();

     return function() {
       loops = 0;

       while ((new Date).getTime() > nextGameTick) {
         updateStats.update();
		// Game.checkCollision();
         Game.update();
         nextGameTick += skipTicks;
         loops++;
       }

       renderStats.update();
       Game.draw();
     };
   })();

 
   (function() {
     var onEachFrame;
     if (window.webkitRequestAnimationFrame) {
       onEachFrame = function(cb) {
         var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
         _cb();
       };
     } else if (window.mozRequestAnimationFrame) {
       onEachFrame = function(cb) {
         var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
         _cb();
       };
     } else {
       onEachFrame = function(cb) {
         setInterval(cb, 1000 / 60);
       }
     }
     
     window.onEachFrame = onEachFrame;
   })();

 onEachFrame(Game.run);	


};