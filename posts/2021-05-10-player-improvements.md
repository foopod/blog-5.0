---
layout: layouts/post.njk
title: Animation, Camera and Movement Improvements
description: Redoing the cat animation from reference images, improving how the camera follows our cat hero and introducing a new movement mechanic
date: 2021-05-10
tags:
    - post
    - gbagamejam2021
---

>
## GBAGameJam - Days 28-32

### Camera Movement

Last time I posted an update on the GBA Dev Discord I was recommended [an article about camera movement](https://www.gamasutra.com/blogs/ItayKeren/20150511/243083/Scroll_Back_The_Theory_and_Practice_of_Cameras_in_SideScrollers.php?print=1). And I can highly recommend this to anyone making any sort of 2d game. It made me think for a lot about how the camera should move in my game.

When I started the easiest thing was just to set the camera's position to the player. This way the player was always in the centre of the screen. This is called position-locking, and while better than nothing, sometimes it isn't the best experience for the player.

But at least the programming is super simple.

``` cpp
_camera.set_position(_pos);
```

![](/img/position-locking.gif)

I added the white squares to help show the cameras position compared to the player. My first idea was to just smooth out the camera's movement, so I began lerping (using linear interpolation) the camera to where it needed to be.

You can propably already tell that this was a massive improvement. And the code isn't too much more complicated.

``` cpp
_camera.set_x(_camera.x()+ (_pos.x() -_camera.x() ) /lerp);
_camera.set_y(_camera.y()+ (_pos.y() -_camera.y() ) /lerp);
```

Here we just move the camera by the distance between the player and the camera over some kind of constant. I think here I went with 10. So each frame the camera moves one tenth of the distance towards the player, it still locks on the player, but now moving a lot smoother to do so.

![](/img/lerp-position-lock.gif)

From looking through the examples in the link at the top, I liked the idea of having the character always being forward facing. This way you can see further in front of you than behind you. I figured I would try that on to see if it fit.

And this only took a small tweak of checking the direction I was facing and adding or subtracting an offset to my desired location...

``` cpp
if(_sprite.horizontal_flip()){
    _camera.set_x(_camera.x()+ (_pos.x() - 30 - _camera.x() ) /lerp);
} else {
    _camera.set_x(_camera.x()+ (_pos.x() + 30 - _camera.x() ) /lerp);
} 
_camera.set_y(_camera.y()+ (_pos.y() -_camera.y() ) /lerp);
``` 
> 30px is just the value that seemed to feel right for me.

![](/img/lerp-forward-facing.gif)

I really like this. Still two problems though. When I start running the lerping camera fails to keep up with the forward facing position. And I wish the camera was higher up so you can see more of the room. Hmmmm.

This was a little bit trickier. I figured that I could offset the lerping by adding my _dx (delta x - horizontal distance moved per frame). The interesting part is that the lerp is several frames behind. So you can tweak the multiplier on _dx to make the camera keep up or even overtake the lerp.

``` cpp
if(_sprite.horizontal_flip()){
    _camera.set_x(_camera.x()+ (_pos.x() - 30 - _camera.x() + _dx*10) / lerp);
} else {
    _camera.set_x(_camera.x()+ (_pos.x() + 30 - _camera.x() + _dx*10) / lerp);
}
_camera.set_y(_camera.y()+ (_pos.y() - 10 - _camera.y() ) / lerp);
``` 

![](/img/forward-facing-momentum.gif)

That will do for now. It still feels a bit odd jumping down objects on other maps, even with such a modest 10 pixel elevation change. And I may need to revisit this in the future to make downwards navigation easier.

### Animation

You also might have noticed a new cat sprite in the above gifs. When I made the original sprite for this cat I used a reference sheet like below.

![](/img/cat-reference.jpg)

> Try as I might I have not been able to find the original source for this.


But now that I have twice the pixel density moving from Pico8 (I was using 64x64 pixels) to the Gameboy Advance (240x160), I want make the most of it.

Using the above sheet as a guide I remade the sprite and animations, it took some trial and error, also half a day. But I think the new sprite was definitely worth it.

![](/img/cat-animation.gif)

> Note : It is slowed down a bit because the old animation (right) has less frames.

And in the game..

![](/img/cat-new-animation.gif)

### Cat Wall Running

I had been trying to think of some interesting mechanics that could be specific to cats. I wanted to toy with the idea of wall running. 

My first idea was "Hey! Let's just turn off gravity while you are touching a wall".

But turns out I don't use friction on the y axis, so if you are touching a wall when you jump you get to keep all the jump speed till you hit the top. Basically I lock the momentum in the y axis when you touch a wall. Yep. It is bad.

![](/img/wall-run-1.gif)

But lets continue, I add a `_wall_running` flag to my jump detection so that you can jump only while grounded on wall running.

Yes it is glitchy, but also super awesome! If I hadn't been able to glitch through everything I might have left it like this.

![](/img/wall-run-2.gif)

But I wanted to try something else too, I had about three different implementation ideas, I wanted to try them all out before refining them. The next is a straigh vertical run up the wall.

I also had to add a shitty animation to really sell it. I kind of love it,  I just wonder how interesting and fun it will be to actually play with it.

![](/img/wall-run-4.gif)

Lastly was wall running like in Titan Fall and other 3d action games.

There are actually almost no code changes between this and the last, just changed the speed you climb at, swapped out the animation for the running one and scaled (squashing vertically) to make it look like it was side on.

![](/img/wall-run-5.gif)

This is probably my favourite and gives me a few ideas about how I can design levels to be make the most of the ability.

There are a few things I would still have to fix though...

+ Implement falling when you stop running
+ Only let you run for a short amount of time
+ Block chaining wall running and jumping to run infinitely

Or would that be less fun?

[tag for day-32](https://github.com/foopod/gbaGamejam2021/releases/tag/day-32) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-32/feline-day32.gba)


[Previous Post](/post/day-27)
[Next Post](/post/player-attacking)