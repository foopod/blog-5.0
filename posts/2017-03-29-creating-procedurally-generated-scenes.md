---
layout: layouts/post.njk
title: Procedurally Generated Scenes
date: 2017-03-29
description: Using Math to generated cool pictures
tags:
    - post
    - procgen
---

This week I saw a totally rad twitter bot that posts procedurally generates mountain skylines.

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">2.47345°N, 99.24996°E <a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://twitter.com/hashtag/procedural?src=hash&amp;ref_src=twsrc%5Etfw">#procedural</a> <img src="/img/example.jpg"/><a href="https://twitter.com/hashtag/paperjs?src=hash&amp;ref_src=twsrc%5Etfw">#paperjs</a> <a href="https://t.co/wuFp32ye1h">pic.twitter.com/wuFp32ye1h</a></p>&mdash; muted mountains (@muted_mountains) <a href="https://twitter.com/muted_mountains/status/845908222389043201?ref_src=twsrc%5Etfw">March 26, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

I saw this and was jealous, mainly because last year I tried to make something similar that ended up looking like this...

<figure data-orig-width="500" data-orig-height="281" class="tmblr-full"><img src="/img/tumblr_inline_o8y3ibSfL61qil7jn_500.gif" alt="image" data-orig-width="500" data-orig-height="281"/></figure>

Mine is nice and animated but is not as nice as [@muted_mountains](http://twitter.com/muted_mountains) creations.

So I figured that I would go ahead and revamp mine to look a bit nicer.

Let's change those hills from generic looking curves(that kind of look like waves in the sea) to something that looks more like mountains.

In my original I use Perlin Noise to generate the mountain. Perlin Noise is an algorithm that generates random numbers that are close to each other, this means that you can create smooth transitions between numbers and generate all kinds of curves. If you want to know more about Perlin Noise, then I would highly recommend [this article](http://flafla2.github.io/2014/08/09/perlinnoise.html) by [adrian's soapbox](http://flafla2.github.io/index.html).

The issue I am facing now is that I am struggling to get both the big amplitudes of the rolling mountains as well as the finer details that mountains have, the cracks, crevices and smaller rocks. This can however be acheived by using multiple octaves of Perlin Noise. 

This essentially means adding multiple scales of Perlin noise together.

<img src="/img/perlin_octaves.png"/>

<img src="/img/perlin_combined.png"/>

Again, the above blogpost covers this really well and these images were taken from there too. I took the code straight from that article and changed the syntax to javascript, worked like a charm.

``` javascript
function octavePerlin(x, y, z, octaves, persistence) {
    var total = 0;
    var frequency = 1;
    var amplitude = 1;
    var maxValue = 0;  // Used for normalizing result to 0.0 - 1.0
    for(var i=0;i<octaves;i++) {
        total += perlin.noise(x * frequency, y * frequency, z * frequency) * amplitude;
        
        maxValue += amplitude;
        
        amplitude *= persistence;
        frequency *= 2;
    }
    
    return total/maxValue;
}
```

<img src="/img/mountains.png"/>

And bam! We have lovely looking mountains.

I was pretty happy with this and started showing people. My friend Ian([@dentudim](https://twitter.com/dentudim)) was pretty impressed (obviously) and showed me this picture that he was reminded of (courtesy of [chrischernewych](http://chrischernewych.deviantart.com/)).

<img src="https://pre10.deviantart.net/36a8/th/pre/i/2017/073/b/2/remote_location___framed_by_chrischernewych-db2c3ob.png">

Gorgeous! I wonder if I could make trees like that?

Lets just make a lovely sawtooth wave. 

Easy right? But how?

All my mountains are drawn using Perlin Noise, to do this all the functions take a horizontal location on the screen and spit out the height of that point.

I wanted to do the same thing for the trees, so essentially we need a mathematical function.

We want a line that goes up and down real pointy like. So I started with a sawtooth wave. I achieved this with the modulo function.

Something like `height = xPosition%100` and this gives us something that looks pretty deadly.

<img src="/img/sawtooth.png"/>

Next thing was making the waves symmetrical, this could be done by subtracting the modulo number from half of my frequency and aways taking the answer as a positive number. This gives me `height = Math.abs(50 - xPosition%100)`.

<img src="/img/pointy.png"/>

Sweet. Now just to get some variation, like the hills, because trees don't just magically float level, they are on something. For now I just combine the spikes with the mountain function and bam!

<img src="/img/trees.png"/>

And together with the mountains...

<img src="/img/mountain_trees.png"/>

And by the time I reached this point, Ian had already sent me another picture of a mountain with lovely low lying clouds.

So that was next, something fluffy to take away from the harsh pointy rigidity of the mountains and trees.

Once again Math to the rescue!

What is round and curvy?

A SINE WAVE!

`height = Math.sin(xPosition)`

<img src="/img/sine_cloud.png"/>

I guess it could be fluffier and less wave like. But what if we took the bottom bits and make them look more like top bits?

<img src="/img/absolute_sine.png">

Awesome!

<img src="/img/fluff.png"/>

And to add some variation I did the same that I did with the trees and pretended they were mountains.

<img src="/img/final_clouds.png"/>

Put it all together and wow!

<img src="/img/mountain_trees_clouds.png"/>

At this point I was super happy with it. I posted it to my local gamedev facebook page for screenshot saturday and got some awesome feedback.

<img src="/img/bob.jpg"/>

>Add gradients on the mountains!! Its like Bob Ross always says; "they are more distinct at the top than they are at the bottom." 
><br> [Sam Batty](https://twitter.com/SamBattz)

Thanks Sam! Now I had more work to do! And I was absolutely sure that this would be more difficult than the other components.

But no need to fear. I figured I could just reuse the exact same mountain, make it bit darker and offset it a bit depending where it is relative to the sun.

This looked better...

<img src="/img/mountain_shadow.png"/>

But not very realistic, the shadows on mountains aren't predictable and vary based on the mountains curves. Unfortunately my mountains are only two dimensional and it is impossible to predict how the shadows should fall.

So lets fake it, make it a bit random, and a little more realistic than the above pic.

Using bits and pieces I already had, I threw a sawtooth wave into the mix. I made its amplitude bigger than the trees and the frequency smaller, I also threw some more Perlin Noise in to help vary the sawtooth in the x axis.

And this gives me the final product (at the time of writing this post).

<img src="/img/final.png"/>

I have a live demo of it [here](https://foopod.github.io/sunset/) that you can check out. Yes I am sure you can find the source code in my github, but trust me it is not worth looking at.

I have ideas for a game that makes use of something like this, so maybe more of this in the future.