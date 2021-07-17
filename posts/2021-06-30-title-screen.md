---
layout: layouts/post.njk
title: Using HBlank to add Parallax
description: Adding a title screen to my GBA Game Feline using HBlank Effects on Affine BGs
date: 2021-06-30
tags:
    - post
    - gbagamejam2021
---

>
## GBAGameJam2021 | Making a game for the Gameboy Advance

### Day 81

At first I thought that adding a title screen would be boring, but not when you discover how to use HBlank effects.

> What is an HBlank Effect? Well, when the gba draws to the screen it draws in rows, starting at the top and going down. We can make code run in between these rows. Find more detailed info [here](https://www.coranac.com/tonc/text/video.htm#sec-blanks) (this is genuinely very much worth the read if you plan to develop for GBA).

Using HBlank intervals we can come up with some very interesting effects. FYI these are mostly pulled from the Butano examples, you can check them out [here](https://github.com/GValiente/butano/tree/master/examples).

You can use move rows of an image back and forth using a sin wave, creating a distorted look to the image like this..

![](/img/hblank.gif)

You can swap the palettes at hblank intervals, this shading effect has been used in a lot of games...

![](/img/hblank-swap.gif)

But today we are going to be trying to create a parallax effect from a single image. To do that we want to draw different parts of the image in different places on the screen.

![](/img/hblank-parallax.gif)

We can even do some quite cool stuff, like making different lines move at different speeds.

And thank goodness we are using [Butano](https://github.com/GValiente/butano), it makes it super easy to create these effects.

1. Firstly we make an array to hold the position of each row of the screen.

``` cpp
bn::array<bn::fixed, bn::display::height()> horizontal_deltas;
```

2. We also make a `affine_bg_pivot_position_hbe_ptr` to do all of the heavy loading for us. It uses our `horizontal_deltas` array to update the hblank positions.

``` cpp
bn::affine_bg_pivot_position_hbe_ptr horizontal_hbe = bn::affine_bg_pivot_position_hbe_ptr::create_horizontal(bg, horizontal_deltas);
```

3. Update `horizontal_deltas` each frame based on whatever effect you are trying to create. Because I wanted to create a parallax effect, I made some variables to help me look after different layers.

``` cpp
bn::fixed layer_1 = 0;
bn::fixed layer_2 = 0;
bn::fixed layer_3 = 0;
bn::fixed layer_4 = 0;
```

Then we increment each of these based on how fast they should be going...
``` cpp
// if you want to loop this, these should reset if they go over the width of the bg
layer_1 += 0.3;
layer_2 += 0.2;
layer_3 += 0.1;
layer_4 += 0.5;
```

Then we loop through each line in the screen and set each frames position. In the example below anything in the bottom 20px (140px-160px) of the screen moves as part of layer_1, so on so forth.

``` cpp
for(int index = 0, limit = bn::display::height(); index < limit; ++index)
{
    if( index > 140){
        horizontal_deltas[index] = layer_1;
    } 
    else if(index > 127)
    {
        horizontal_deltas[index] = layer_2;
    }
    else if(index > 118)
    {
        horizontal_deltas[index] = layer_3;
    }
    else
    {
        horizontal_deltas[index] = layer_4;
    }
}
```

So now we can turn this image...

![](/img/title.bmp)

Into this on the GBA...

![](/img/parallax.gif)

Now just to add some minor other enhancements and my title screen is complete.

![](/img/title-screen.gif)

[tag for day-81](https://github.com/foopod/gbaGamejam2021/releases/tag/day-81) [.gba](https://github.com/foopod/gbaGamejam2021/releases/download/day-81/feline-day81.gba)
