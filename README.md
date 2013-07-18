#Happy-FT

Just a little game to explore the cool HTML5 canvas

The goal is simple, avoid the bees and get the fishes 
Use the Arrows for directions and 'A' for extra boost ( other commands are still being added ^^ )

### yay :D ^^

The Testing Version is available [here](https://c9.io/mimieam/happy-ft/workspace/Happy-FT.html)
![ScreenShot](https://raw.github.com/Mimieam/Happy-FT/master/img/HappyGT.PNG)





<pre>
    File structure
                                                                                  main
                                                                                   +
                                                                                   |
                                                                                   v
                                                            +------------------+  Game  +--------------------++---------------+
                                                            |                      +                          |               |
                                                            |                      |                          |               |
                                                            |                      |                          |               |
                                                            v                      v                          |               |
                                                 +------+Happy+----+            entities                      v               v
                                                 |        +        |           +       +                   collision       spriteDB
                                                 |        |        |           |       |
                                                 |        |        |           v       v
                                                 |        v        |          fish  clouds
                                                 |     player      |           +
                                                 |                 |           |
                                                 |                 |           |
                                                 |                 |           |
                                                 |                 |           |
                                                 |                 |           |
                                                 |                 v           v
                                                 v
                                                InputManager       SpriteManager
                                                     +
                                                     |
                                                     v
                                              KeyboardManger

                                                                                           </pre>
