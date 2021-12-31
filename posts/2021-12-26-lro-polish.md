---
layout: layouts/post.njk
title: Polishing LRO
description: The most important design decisions I made in the last week of the GBA Winter GameJam, dialog for narrative, more puzzles and measuring success.
date: 2022-01-01
tags: 
    - post
    - gamejam
---

Carrying on from the previous post I wanted to talk about further design decisions I made in the last couple of weeks.

## Using Dialog to create a narrative element 

At this point the game works. You can complete levels and progress through the rank system from Trainee -> Expert -> Officer. And while the puzzles get harder to help show the progression, there is little else.

Can I get away with this? Absolutely. Most classic puzzles games don't offer more than this at all, just take a look at the likes of Dr. Mario and Bust-A-Move.

But people expect more from games these days. Also add the fact that during development I kept having witty ideas of what could be in these suitcases.

What is so important that we need to train a specific role to retrieve it? 

![](/img/lro2.png)

![](/img/lro3.png)

The possibilities are endless. There were also unanswered questions, like why are we always trying to get the red ones?

![](/img/lro4.png)

They could also be used to help along a beginning player.

![](/img/lro1.png)

This character, by the way, is your boss, a veteran Luggage Retrieval Officer that guides you as you progress through the ranks.

![](/img/lro5.png)

The first time play testing this was night and day, hearing the odd little chuckle from someone every now and then made adding the dialog so worthwhile. And I think that this is the single best thing I have done to make the game more memorable for people.

## More Levels for better replayability

I have been play testing the game throughout building it, not anything serious, just family and friends that happen to be nearby after I add new features.

One player though baffled me. They breezed through the first 20 something levels 15 minutes, in less than 2 hours they had finished the 50 levels and were asking for more. It wasn't just that though, they wanted to know how efficiently they were solving them. Could the levels have been solved faster?

And yes, this person is smart, but not like crazy mathematician with degrees by the time they were 12 smart. I figured that if in my 5 or 6 people there was one outlier, then there was bound to be more.

So I started hunting. Not just for more puzzles, but for how I could gauge the fastest possible time for solving them.

Enter [Michael Fogleman](https://www.michaelfogleman.com/rush/). This man procedurally generated 287+ billion 6x6 sliding block puzzles. He didn't stop there though, he calculated every state each puzzle could be in and mapped them to find the shortest path. AKA, the smallest number of moves needed to solve the puzzle.

Thank you [Michael Fogleman](https://www.michaelfogleman.com/rush/). Thank you, thank you, thank you.

My prayers had been answered. Better yet, not only is all his code open source, but he also made a database available with 2,577,412 puzzles.

How is that for replayability?

And could I actually fit that many puzzles in a standard GBA cartridge? It turns out yes. The puzzles themselves take up very little space actually. This is one here `GBBoLoGHIoLMGHIAAMCCCKoMooJKDDEEJFFo`.

I instead landed on 500. Enough that there is plenty of replayability for those that want it and hopefully not too many to scare off the casual players. I made the menu system differently for Arcade Mode, specifically so you wouldn't see how high it went unless you went looking for it.

## Move Counting and high scores

Through play testing it appeared immediately that there were different levels of player skill. Some people struggled and didn't get passed 10 levels, others flew through all of them.

The other interesting part was just watching how they played, how they attempted to solve the puzzles.

Some randomly moved about pieces hoping that enough jiggling would free the suitcase.

Others had a clear strategy of starting with the pieces that blocked the red car and moving backwards through the pieces blocking those pieces until they found something that they could move. And this strategy works, but only up until a certain point. After this, some revert to randomly moving pieces, others pause to play out different moves in their heads.

Eventually to solve the harder puzzles the player really needs to assess the board as a whole.

![](/img/rush-solution.gif)

To me it felt weird to incentivise players to try to get the smallest number of moves possible. It encourages players to either think out a puzzle in its entirety as much as they can before moving anything, or playing it multiple times memorising the pattern.

But again my play tester (rush hour genius) proved me wrong. And this blew me away. He sat down and on his first go solved a hard puzzle in a few minutes only 2 moves over the best.




The other reason why I went with a smaller number is because I wanted to maintain save states for each individual puzzle. This way I could grade players based on their performance.

![](/img/lro-grade.png)

## Other stuff

There has been a lot of other stuff that has come together this last week to really push the game to be a lot better than it was.

The first is some amazing music from [Tempest](https://soundcloud.com/janne-suni), I won't spoil it here though, you will have to play the game to listen.

Secondly some fantastic title art from [Vent](https://csdb.dk/scener/?id=1073)

![](/img/lro-intro.gif)

I redid a lot of backgrounds and added shading to all of the luggage sprites.

![](/img/lro-select.gif)

![](/img/gameplay-lro.gif)

## Release

But alas the 2021 GBA Winter GameJam has come to an end. The final game is now live on itch.io.

<iframe src="https://itch.io/embed/1335146" width="552" height="167" frameborder="0"><a href="https://foopod.itch.io/lro">LRO - Luggage Retrieval Officer by Jono Shields</a></iframe>

Source available on [Github](https://github.com/foopod/lro).