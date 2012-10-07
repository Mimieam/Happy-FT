Happy-FT
========

Just a little game to explore the cool canvas in HTML5

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