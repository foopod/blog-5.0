---
layout: layouts/post.njk
title: Feline - Finishing Touches
description: Adding New Levels, New Enemies, Polishing and adding more content
date: 2021-07-07
tags:
    - post
    - gbagamejam2021
---

>
## GBAGameJam2021 | Making a game for the Gameboy Advance

### Day 88

It is the last week of the jam and I am cramming like a high school student before exams.

## A New Level

I really had to get my a** into g.

So I took my dungeon tile sheet, added a filter or three and threw some rocks in there.

![](/img/tilemap_other.bmp)

Throw in a background and...

![](/img/feline-2.png)

## And a New Enemy

I don't want to share too much about the story behind this enemy. But I wanted to make something that was a step up in difficulty from the slimes and bats.

So this guy has a few cool features...

+ If you land a hit on him he teleports away
+ When they signal a teleport attack, they are invulnerable and lock onto your current position
+ Then they teleport inside you

![](/img/feline-enemy.gif)

To up the variety I also made a variation on my slime from earlier. I call it the bouncy slime.

When you hit it you get pushed back a bunch, I also placed a couple in places you would get pushed off of your platform (maniacal laughter).

![](/img/slime-bounce.gif)

## A new ability

Now that we have some cool new enemies, our teleporting dude being a psuedo boss, it is worthwhile rewarding the player.

The plan from the beginning was to give the player powers that related to the pink glow that keeps popping up everywhere.

So this new ability comes directly from another enemy imbued in pink.

Teleporting.

![](/img/teleport.gif)

It took a bit of work to make it feel as good as it does. Also math. Lots of math so you don't glitch through walls.

## New Screens

I added a couple of intro screens and a screen that shows if you die.

![](/img/feline-4.png)

![](/img/feline-5.png)

![](/img/feline-3.png)

## Sound Effects

I also finally got around to adding sound effects. Honestly this totally made the game for me. Once they were I felt so much better about how the game looked and felt.

Full disclosure - they were entirely made with my mouth.

**Swipe**
> <audio controls><source src="/img/swipe.wav" type="audio/wav"></audio>

**Slime**
> <audio controls><source src="/img/slime2.wav" type="audio/wav"></audio>

**Teleport**
> <audio controls><source src="/img/teleport.wav" type="audio/wav"></audio>

**Talking**
> <audio controls><source src="/img/hello.wav" type="audio/wav"></audio>

Play the game to hear more of my mouth sounds.

## Trailer

I put together a little trailer to show it all off. My 10 year old thinkpad struggled to render this, like it crashed a lot. I had to render as .pngs and stitch it together with ffmpeg afterward because it keeped crashing so often.

<video controls>
<source src="/img/trailer_smol.mp4" type="video/mp4"/>
Your browser does not support HTML5 video.
</video>

## Summary

Would I make a GBA game again with Butano? Yes! It was a pleasure to use such a modern set of tools for developing for a console that is nearly 20 years old. The community supporting GBA development is awesome, I highly recommend checking out [gbadev.net](https://gbadev.net/) for more info.

In saying that there is a lot that would do differently. I feel like now I have a much better grasp of c++ and lower level concepts. I am no longer afraid of pointers and will be using them a lot more in the future 😅

Grab the final game [here on itch.io](https://foopod.itch.io/feline).

And thanks a lot for following me on this adventure!

![](/img/gif.gif)

[tag for day-88](https://github.com/foopod/gbaGamejam2021/releases/tag/day-88) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-88/feline-day88.gba)

[Previous Post](/post/title-screen)