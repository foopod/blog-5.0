---
layout: layouts/post.njk
title: Jono has a Plan
description: If you don't have a plan then how can you know when something didn't go to plan? Making a plan, improving my character sprites and a talk about performance in Butano
date: 2021-05-21
tags:
    - post
    - gamejam
    - gbagamejam2021
---

>
## GBAGameJam2021 | Making a game for the Gameboy Advance

### Day 44

I read a really good post-mortem the other day. One of my key takeaways was simply to have a plan. Not so that you can stick to it, you update it as you go. But so that when things go wrong you can look back and try to figure out why. Like "oh, I shouldn't have left the music till the last week" ~ probably Jono in a month.

So now there is a trello board...

[https://trello.com/b/qI5XiEns](https://trello.com/b/qI5XiEns)

### Performance

Oh my goodness performance.

I started noticing visible lag in the game once I had like 10+ enemies in a level. Also I haven't been thinking about performance at all during this gamejam. So I haven't optimised anything yet. I was expecting this to happen at some point.

The first thing to do was turn on some debugging in Butano...

```cpp
// init
bn::fixed max_cpu_usage;
int counter = 1;

// game loop
max_cpu_usage = bn::max(max_cpu_usage, bn::core::last_cpu_usage());
--counter;
if(! counter)
{
    BN_LOG("cpu:" + bn::to_string<32>((max_cpu_usage * 100).right_shift_integer()));
    max_cpu_usage = 0;
    counter = 60;
}
```

This lets me print my current cpu usage to the GBA Debugger (remember to launch mgba with the `-l 4` parameter).

I turned this on for all my scenes. Lo and behold my scene with enemies is chocking the cpu up over 100%, meaning that it doesn't have time to complete the game loop before the next frame draw.

Now I already knew of two things that would hugely help this. Yes. Let's stop doing all the updates for the sprites when they are off the screen.

This wouldn't be so bad if their update loop was simpler, but I am doing collisions and all kinds of stuff in there.

```cpp
for(Enemy& enemy : enemies){
    if(bn::abs(enemy.pos().x() - camera.x()) < 300){
        if(bn::abs(enemy.pos().y() - camera.y()) < 200){
            enemy.update();
        }
    }
}
```

Note the 300 & 200 pixel values, these are fairly rough approximations for when I stop caring about them. If I wanted them to freeze in mid air the moment they hit the edge of the screen then the numbers would be 120 & 80.

So yep. No updates unless we can see em. Secondly. And probably something I should have already done. No updates. After. They. Die.

Yeah, so I just made the sprite invisible when they die. But that is fixed now with a simple `bool _dead` flag.

### More Detail

Slowly I have been adding more details to the sprites. Today I redid two of my favs.

Mr. Police Officer Tortoise goes from 16x16 to 32x32.

![Sprites of a tortoise with a SWAT helmet, I think its cute](/img/tortoise.png)


And then next was trying to make my Golem sprite better. This was interesting, because half way through I decided I also wanted it to be twice as big physically, so this one went from 8x16 to 32x64.

![Sprites of three golem, each made from stone and overgrown with moss and vines](/img/golem_progression.png)

### Health

I have been thinking about how to show health for a while now, in lieu of coming up with something more immersive, I decided to put in a classic health bar.

I didn't just want a simple bar though or a row of hearts. So I decided to play on the well known fact that cats have 9 lives.

I quickly made 9 different cat sprites.

![moving image of 9 different cat sprites flashing in quick succession](/img/healthbar-cats.gif)

And combined them to make the health bar..

![a row of 9 cats each different, some small, some big, some lying down, others standing](/img/healthbar.gif)

What do you think? Too tacky? Too gimmicky? Not intuitive?

### Hints

Lastly I have been looking for a good way to give the player tips right when they need. I don't want to overload the player right at the start like some games do.

This solution is pretty simple and really just stolen from the NPCs I have made. It simply activates when the player is in range and can be dismissed by pressing 'a'.

![text pops up along the bottom of the screen to explain an action](/img/tooltip.gif)

Thanks for reading! As usual .gba and source code below...

[tag for day-40](https://github.com/foopod/gbaGamejam2021/releases/tag/day-44) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-44/feline-day44.gba)

