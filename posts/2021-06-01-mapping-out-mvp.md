---
layout: layouts/post.njk
title: Mapping out an MVP for Feline
description: Creating a map of the bare essentials of the game to display as much of it as possible, but for as little effort as possible
date: 2021-06-01
tags:
    - post
    - gbagamejam2021
---

>
## GBAGameJam2021 | Making a game for the Gameboy Advance

### Day 52

In a previous post I talked a little about how important it is to make a plan. You may be thinking "well if I don't have a plan, it is impossible for things to not go as planned".

Well yes. Technically this statement is correct. But it also means that when things don't work, it is hard to pinpoint why. Plans do much more than that though, they create focus and help you to make decisions.

My last plan was pretty poo, now I am replanning.

I like the GROW model, it is great for personal development, but in general it is perfect for making a plan.

## GROW

+ **G**oal - What is the goal here? What are we trying to achieve?
+ **R**eality - What is the reality? Where are we at?
+ **O**ptions - What could we do? What are the opportunities?
+ **W**hat now? - What is the plan? What is first? 

Here we are..

+ **G**oal - Make an awesome game with Castlevania vibes that seems to have a lot of depth to it?
+ **R**eality - Half finished game. Code quality questionable. But definitely progress.
+ **O**ptions - Continue making the badass game - but there are sooo many things to do. Maybe change tact and work on something much smaller scoped.
+ **W**hat now? - Keep going. But lets be more specific...

We need to prioritise.

## Priority

MoSCoW is a way of prioritising by categorising features into..

+ **M**ust have
+ **S**hould have
+ **C**ould have
+ **W**on't have

For me, this lets me prioritize the top features for Feline.

### Must Haves

+ Take Damage from enemies
+ A way to capture progress (not even save game, just so you don't get the same help prompts each time you pass through an area). A way to keep state beyond a scene.

### Should Haves

+ A boss fight
+ Pickups of some sort (maybe health)
+ Learning a new skill/attack
+ At least 2 or 3 levels
+ Healthbar animation

### Could Haves

+ More pickups to unlock new things
+ Unlockable doors
+ Choices in NPC dialog
+ Kitten Rescue

### Won't Have

+ Weapons
+ Destructible environment
+ Pretty much everything not listed above

> So Jono. It has been like a week and we haven't seen an update. What is going on?

Ok. So I haven't been super motivated to work on my gbaGameJam2021 entry lately. But that is also why I made this plan. Now I know that to get something playable, I only have a few things left to do.

## Take that Damage!

This is pretty crucial. There is no point in having enemies in a game if they pose no threat to you. First though, lets break it down. I like to do this sometimes, kind of plan out how I am going to implement something.

1. Add Collision Detection for player and enemy classes.
2. Subtract hp from player when it collides with an enemy.
3. Knock back player for effect, but also so they don't just get hit again.
4. Add invulnerability to player so they have some time to rethink the action that just got them hurt.
5. Flash when invulnerable - staple across games everywhere.
6. Update healthbar with new hp.

So it may seem like a lot, but really it isn't that bad.

Halfway through I realised that I wasn't really a fan of the old healthbar though. So I decided to swap it out.

> Before
![](/img/before_health.png)

> After
![](/img/after_health.png)

I feel like this does a better job of illustrating the whole cats have 9 lives thing. But also it is pretty darn satisfying when you get low and go back up to 9.

![](/img/ouch.gif)

You might have also noticed something else in that screenshot.

That is right.

It is HD.

No. Not the GIF.

The Map.

I have been spending a lot of time making my sprites a lot more detailed, one of the last things was the map. So with that out of the way, here is a comparison of my GBA game a few weeks ago vs now.

> Before
![](/img/dungeon.gif)

> After
![](/img/ouch.gif)

I also took the time to go and redo the level, this time focussing on building it so that the player can more naturally discover how to play the game. And at the same time, not introducing too many mechanics.

I wanted the player to learn...

1. Where the attack button was and how to attack enemies.
2. That they can get hurt by letting enemies get to close to them.
3. How to wall run to get to places that they otherwise couldn't.
4. How to interact with objects and npcs.

I don't want to give too much away, so here is a sneak peak...

![](/img/dungeon-2x.png)

> Yes! I am still putting tiles at the top of the map to tag them as walls, floor, etc.

## Other benefits of Planning

Sitting down and going through the motions of planning on pen and paper made me realise that I care a lot more about the narrative than the gameplay.

I want to add more lore to my game, I love other games that do and it can add a real sense of wonder.

![](/img/wonder.gif)

My idea is to add these mystical tablets around the world where the player can use them to discover forgotten secrets of this dungeon.

I am also toying with a couple of ideas for them.

1. It would be cool if they were in another language and took up the whole screen, maybe have a minigame to translate the language. Or maybe just 'press select to translate' and an animation.
2. Maybe make these also be hidden save points, so if you die you would go back to the last one you touched. But not tell the player, it can be like a little fun thing to discover and then use if they need to.

[tag for day-52](https://github.com/foopod/gbaGamejam2021/releases/tag/day-52) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-52/feline-day52.gba)

[Previous Post](/post/boids-on-gba)