---
title: "Visualizing STL files instide the terminal"
description: "Visual projection options and cool maths behind it"
category: "Educational"
date: 2026-06-22
status: "in-progress"
# github: "https://github.com/elsehtz/"
draft: false
---

<span class="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">In Progress</span>

## Introduction
I was watching a cool video discussing perspective projection and how understanding the simple math behind it can provide useful intuition when dealing with 3-dimensional visualization. 

Simoultaneiously, I've been transitioning my workflow out of VS code, progresively transitioning into a keyboard-centric workflow. It occured to me that it proably wouldn't take long to create a low-effort 3D model viewer for STL files, given their inherint bare-bones methodology. As an avid user of my 3D printer, I also have a bunch of stl files and I thought it would be a fun little idea to tinker with and see what if there were any aesthetic visuals that could come of it. 

![stl-render screenshot](https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/terminal-stl-render.gif)


## Scoping: Parallel Projection vs Perspective Projection
Immediately, we have to disntinguish between two main methods for propogating 3 dimensional information into a 2 dimensional view. I realized most tools dont actually use perspective projection (undestanably). I wanted to replicate the more ubniquotous Parralel (aka Orthographic) projection first to see how the math and visuals differed inside the terminal.

### Visualizing the vectors
Before I began working out the math, I had to consider how I was going to print the vectors to screen. I really wanted to focus on keeping the stereotypical-coder-vibe so that meant figuring out which ASCII characters I'd be using. Lacking the vision and artsitry of an ioccc participant, I chose to compose the results from the ascii braille set; with the hopes of maximizing detail.





[Here's the repo for it](https://github.com/elsehtz/g-drive-editor-theme-extension) It's as it sounds, a chrome extension to add a less-intense color theme for fellow dark-mode enthusiasts
