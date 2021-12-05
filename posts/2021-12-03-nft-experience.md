---
layout: layouts/post.njk
title: Why I stopped making NFTs
description: My short experience with NFTs, why I stopped and what I would do differently next time.
date: 2021-12-03
eleventyExcludeFromCollections: true
tags: 
    - post
---

## What is an NFT?

Non Fungible Token. A token (small piece of data) that can't be changed. This achieved using blockchain technology. Most NFT's are made using smart contracts on the Ethereum (a cryptocurrency) network.

This datum is replicated along with a public key across thousands of computers around the world. They all agree that the person who owns the public key also owns the data. This replication proves irrefutably the ownership of this tiny pieces of information.

This information is available for all to see. The data itself however is usually something fairly insignificant, usually a URL or a hash of a larger file. This is because ethereum (and other cryptocurrencies) are built to be a transaction ledger, not a store of information.

These links or hashes normally pair to an image, video or other piece of media.

## Why did I make an NFT?

In early 2021 I quit my job in IT to travel around NZ. Things didn't quite go to plan however, a breakdown and some covid lockdowns later and we were looking to supplement our savings to make our trip last as long as possible.

I had seen a lot of NFTs and was curious in the process. Less so the smart contract part, but the usually procedurally generated assets.

It seemed like it was something that was low risk with a potential for high reward (don't ask me about similarly motivated bout on redbubble.com).

## How did I make an NFT?

As I said earlier I wasn't all too curious in the smart contract side of things, so after some (very) quick searching I decided that OpenSea was probably the best for me. Easy set up, an api available and a low start up cost.

Then all I had to do was generate some pretty pictures and bam. Easy.

I will linger here, because honestly this was the most fun part.

A while ago I made a little tool with Three.js to randomly generate islands. You can play with it [here](https://foopod.github.io/island/) and read a short post I wrote about it [here](https://jonoshields.com/post/island/).

Long story short. They looked like this...

![](/img/island5.png)

Which is okay... nah, it is pretty shit. So I decided to style them up a bit more. Recently I had also been playing around with SpriteStack.io making pixel art renders of voxel models. They look like this..

![](/img/van_3d.gif)

I figured I could make a tool to generate the island in voxels. One problem though. After some research it seems like most voxel formats are proprietry or unnecessarily complicated (from the point of view of this project). I decided to instead use png images and made a set of images where each was a different layer of the 3d object.

This also happens to be one of the 2 formats that SpriteStack.io accepts. Go figure.

With not much tweaking I got this thing done...

![](/img/island01.gif)

Islands like this because part of gen0, the first generation of islands to test my nfts. The plan was to launch a small batch of these and build a waiting list for the next generation.

I listed them for free and they all got snapped up in 10 minutes.

That's a good sign.

I decided that for gen1 I should add some definable landmarks. These had boats, piers, huts and some even had lighthouses or sea monsters.

![](/img/0047.gif)

These also sold out very quickly. Even the really cool looking 3 or 4 that I had put a price on.

My next goal was to make the islands more interactive. This was something I had always planned from the beginning. In my mind the best NFTs were ones that had purpose, ones that you could use.

I wanted it to feel like you actually owned the Island. Becuase who doesn't want their very own Island. So I decided to use my three.js knowledge and create an in browser interactive app. The idea being that you can interact with your Island and down the road I can add other features to it.

![](island-app.png)

I ended up with two versions, one that used the [voxels directly](https://island.engineer/example) and another that tried to [scale and smooth](https://island.engineer/example_v2) them out. Click those links to have a play around if you like.

And this is basically where I got up to. The plan was release another generation, but that came and went.

## Why did I stop?

There were a few reasons I stopped. The one that stands out the most is because *I got bored*. Once the generation was done I was just tweaking the algorithm. And it turns out that making NFTs is way more about marketing and community management than about actually making NFTs.

There were other reasons too though. The more I got into the more I realised how shallow and vapid it all was. A lot of people shilling their token and trying to make a quick buck. I know the whole community isn't like this, but it is hard to ignore when this is all you see on Twitter and Reddit.

## What would I have done differently?

A lot. I probably wouldn't have used OpenSea's contract, I would have rolled my own. Primarily so that I can make the data model more centric to my NFT. But also because with OpenSea you end up sharing a contract with other sellers, this makes it hard to track your NFTs outside of OpenSeas ecosystem.

I would also put more effort into hosting my site and NFT assets using IPFS, again so that they can stand the test of time.

## Would I do it again?

Yeah. Probably.
