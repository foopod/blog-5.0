---
layout: layouts/post.njk
title: GBA Winter Jam
description: Making a sliding block puzzle game for the GBA
date: 2021-12-08
tags: 
    - post
    - gamejam
---

## Another GameJam

Following on from the success of the GBAJam21, the GBAdev community has decided to wrap up the year with a relaxed winter game jam. The optional theme is Frozen.

Check it out on Itch.io [here](https://itch.io/jam/gba-winter-jam-2021).

## Scope

Based on the last GBAJam that I did, I knew I had to reel in the scope. There were two games that I kind of had in mind.

1. A space shoot 'em up, similar to [Uridium](https://en.wikipedia.org/wiki/Uridium) for C64. I could render 3d models to sprites and make some cool rolling animations.
2. A [rush hour](https://en.wikipedia.org/wiki/Rush_Hour_(puzzle)) clone, an awesome sliding block puzzle game.

## No Internet, Even less power

This summer (NZ) we are on the road travelling around New Zealand in our little car SoyBean. This means that while I have been able to recharge my phone and look at the jam page, I haven't been able to do any programming.

![](/img/soybean.jpg)

So instead I write code, data structures and come up with ideas the old fashioned way.

![](/img/lro-1.jpg)

![](/img/lro-2.jpg)

I thought it might be interesting to compare one of the functions I wrote psuedocode for, with the implementation code.

### Psuedocode

``` js
gridPosToScreenPos(x,y){
    sx = -100
    sy = -50

    sx+= x * 20
    sy+= y * 20

    if(horizontal){
        sx += (length * 20) / 2
    }

    if(vertical){
        sy += (length * 20) / 2
    }

    return sx, sy
}
```

### Implementation

``` cpp
[[nodiscard]] bn::fixed_point gridToScreen(bn::fixed_point gridPos, lro::Orientation orientation, int length)
{
    // screen offset
    bn::fixed sx = -100;
    bn::fixed sy = -50;

    // add gridposition
    sx += gridPos.x() * 20;
    sy += gridPos.y() * 20;

    // horizontal luggage's grid pos is at left end
    if(orientation == lro::Orientation::Horizontal) {
        sx += (length * 20) / 2;
    }

    // vertical luggage's grid pos is at top end
    if(orientation == lro::Orientation::Vertical) {
        sy += (length * 20) / 2 - 10;
        sx += 10;
    }

    return bn::fixed_point(sx, sy);
}
```

Very similar, the only thing I missed was offsetting the width after rotation of the vertical luggage. Neat.

The plan is to keep this up and only turn my laptop on when I absolutely need it.

## So how far have we got?

Well. I have the following working...

+ grid layout
+ basic sprites
+ checking completion
+ tabbing through and moving luggage
+ collision logic

![](/img/example.gif)

The idea is that you are an expertly trained Luggage Retrieval Officer, maneuver luggage in tight spaces to remove misplaced items from the aircraft before take off.

I also made a pretty neat title screen.

![](/img/title.png)

## What is next?

Ranked in order of importance..

1. Level Select Screens - 50+ puzzles and to select between (4 or 5 difficulty levels).
2. Different Suitcase select - having a cursor to select the item you want to move instead of tabbing through the suitcases will be a lot easier for most players.
3. Success Animation - making it more obvious when you have completed a puzzle, rather than just loading the next one.
4. Tutorial - how to play
5. Save Progress - puzzle unlocking
6. More Puzzles
7. Sliding animations of luggage
8. Dialog screens

## Story

> As a newly hired Luggage Retreival Officer you will have to climb through the ranks, start off retreiving low risk luggage. But eventually you will have to take on bigger more demanding challenges, retrieving misplaced FBI evidence or handling bomb threats in the cargo hold.

Are you up for the challenge?

## WIP

Play through the bugs and featureless game, first 10 puzzles included.

### Find more below

+ Github - [https://github.com/foopod/lro](https://github.com/foopod/lro)
+ Git Tag - [https://github.com/foopod/lro/releases/tag/20211208](https://github.com/foopod/lro/releases/tag/20211208)
+ ROM  - [https://github.com/foopod/lro/releases/download/20211208/lro.gba](https://github.com/foopod/lro/releases/download/20211208/lro.gba)