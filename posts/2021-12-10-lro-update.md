---
layout: layouts/post.njk
title: More features in Luggage Retrieval Officer
description: Adding more features to Luggage Retrieval Officer
date: 2021-12-10
tags: 
    - post
    - gamejam
---

## The Todo List

At the end of the last post I left a todo list with a bunch of features for me to add to the game.

1. ✔️ Level Select Screens - 40 puzzles and to select between (4 difficulty levels).
2. ✔️ New Suitcase select - having a cursor to select the item you want to move instead of tabbing through the suitcases will be a lot easier for most players.
3. ✔️ Success Animation - making it more obvious when you have completed a puzzle, rather than just loading the next one.
4. ✔️ Tutorial - how to play
5. ✔️ Save Progress - puzzle unlocking
6. ✔️ More Puzzles
7. ✔️ Sliding animations of luggage
8. ❌ Dialog screens
9. ✔️ Lock harder ranks until easier ranks are completed
10. ❌ Levels 41-50


Pretty good. Pretty, pretty, pretty goooood.

## Adding 40 levels

I set up the game to work off a list of Luggage objects. Each of my levels looks a little like this...

``` cpp
luggage_list.push_back(lro::Luggage(bn::fixed_point(1, 2), true));
luggage_list.push_back(lro::Luggage(bn::fixed_point(0, 1), lro::Orientation::Vertical, 3, 0));
luggage_list.push_back(lro::Luggage(bn::fixed_point(0, 0), lro::Orientation::Horizontal, 2, 0));
luggage_list.push_back(lro::Luggage(bn::fixed_point(3, 1), lro::Orientation::Vertical, 3, 1));
luggage_list.push_back(lro::Luggage(bn::fixed_point(2, 5), lro::Orientation::Horizontal, 3, 2));
luggage_list.push_back(lro::Luggage(bn::fixed_point(0, 4), lro::Orientation::Vertical, 2, 1));
luggage_list.push_back(lro::Luggage(bn::fixed_point(4, 4), lro::Orientation::Horizontal, 2, 2));
luggage_list.push_back(lro::Luggage(bn::fixed_point(5, 0), lro::Orientation::Vertical, 3, 3));
return luggage_list;
```

Each line describes a suitcase, how long it is and whether it is horizontal/vertical. The very last is the sprite used, this way we can alternate what they look like.

But this is all very tedious, especially to make 40 levels.

Luckily enough there is a [website](http://mathsonline.org/game/jam.html?2) that has all the original puzzles and uses a javascript API. A short python script later and I am turning all of their puzzles from this format...

``` js
vehicle[1] = new car("redcarEW.gif",(fTop+2*72),(fLeft+0*72));
vehicle[2] = new car("AcarNS.gif",(fTop+0*72),(fLeft+0*72));
vehicle[3] = new car("QlorryEW.gif",(fTop+3*72),(fLeft+0*72));
vehicle[4] = new car("FcarEW.gif",(fTop+5*72),(fLeft+0*72));
vehicle[5] = new car("DcarNS.gif",(fTop+4*72),(fLeft+2*72));
vehicle[6] = new car("OlorryEW.gif",(fTop+0*72),(fLeft+3*72));
vehicle[7] = new car("BcarNS.gif",(fTop+1*72),(fLeft+3*72));
vehicle[8] = new car("CcarNS.gif",(fTop+2*72),(fLeft+4*72));
vehicle[9] = new car("EcarEW.gif",(fTop+4*72),(fLeft+4*72));
vehicle[10] = new car("GcarEW.gif",(fTop+5*72),(fLeft+3*72));
vehicle[11] = new car("PlorryNS.gif",(fTop+1*72),(fLeft+5*72));
```

Into my C++ code. If you are curious you can see the python3 script [here](https://gist.github.com/foopod/98decff452319b69dea170f626a78f32). 

## Level Select

And now with 40 puzzles I need some way to select between them. The original game had 4 difficulty levels, so I figure I can do the same and seperate things out that way.

![](/img/level-select.gif)


## New Suitcase Select

Previously a player would have to use L and R to tab between suitcases to choose which to move. This is not too bad in the beginning, but as the suitcases move around, the list becomes less and less useful.

So the idea was to make a cursor you move around to select your luggage to move.

![](/img/lro-select.gif)

And wow. I thought it would be a better, but it is a lot more usable and makes solving puzzles a lot faster.

You might also have noticed I added a nice new ending animation.

## Helping the Player

I didn't want to include a text heavy tutorial, but I wanted to include enough information to make it as easy as possible for someone new to sliding block puzzles to pick up.

The first thing I wanted to do was make it more obvious that the red suitcase was the one you need to retrieve. To solve this I added a spinning red suitcase to the menu screen.

To add to this I made a mini tutorial to help new players get started. It takes you through it when you launch the game (if you haven't completed any levels). And can also be accessed anytime through the main menu.

![](/img/help.gif)


## The little things

There are also a bunch of little things that make the game better.

+ Suitcases now slide smoothly, rather than jumping to their new position.
+ More variety of suitcases means less repetition.
+ Font consistency - now everything is either part of an 8x8 or 16x16 font (except the title logo).
+ Refactoring scenes - previously each level was a scene, now I just have a factory (kinda) class that makes the puzzles.
+ Saving - My first time using SRAM to save to internal memory. Butano made this so easy, in particular the [SRAM example](https://github.com/GValiente/butano/tree/master/examples/sram) that I pretty much copied my implementation from.

### Download the ROM [here](https://github.com/foopod/lro/releases/download/20211210/lro.gba)


### Find more below

+ Github - [https://github.com/foopod/lro](https://github.com/foopod/lro)
+ Git Tag - [https://github.com/foopod/lro/releases/tag/20211210](https://github.com/foopod/lro/releases/tag/20211210)