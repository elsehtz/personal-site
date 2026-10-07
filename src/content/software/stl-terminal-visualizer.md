---
title: "Visualizing STL files inside the terminal"
description: "Visual projection options and cool maths behind it"
category: "Educational"
date: 2026-06-23
order: 2
status: "in-progress"
# github: "https://github.com/elsehtz/"
draft: false
---

<span class="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">In Progress</span>

## Topics & Tags
Lambert Shading
Perspective Projection Math
LaTeX
Manim(?)
Generating basic vector shapes (torus + cube) in python
C coding

## Pseudocode/Math
You're going to need the following c functions: 
[vector subtraction, vector cross product, vector dot product, vector norm/magnitude]



## Introduction/Context 
I was watching a great video trying to simplify perspective projection and how understanding the simple math behind it can provide useful intuition when dealing with 3-dimensional visualization. 


Simultaneously, I've been transitioning my workflow out of VS code, progressively transitioning into a keyboard-centric workflow. It occurred to me that it probably wouldn't take long to create a low-effort 3D model viewer for STL files, given their inherent bare-bones methodology. As an avid user of my 3D printer, I also have a bunch of STL files and I thought it would be a fun little idea to tinker with and see what if there were any aesthetic visuals that could come of it. 


![STL-render screenshot](https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/terminal-stl-render.gif)
<i>Example torus</i>

<!-- <div style="background:white">
![Orthographic Projection](https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/Axonometric_projection.svg)
</div> -->
<img src="https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/Axonometric_projection.svg" class="invert" />
<img src="https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/Various_projections_of_cube_above_plane.svg" class="invert" />

Getting into the math, we want to look at how we can express
$\begin{bmatrix}
   a & 0 & 0\\
   0 & b & 0\\
   0 & 0 & c
\end{bmatrix}$
## Scoping: Parallel Projection vs Perspective Projection
Immediately, we have to distinguish between two main methods for propagating 3-dimensional information into a 2-dimensional view. I realized most tools don't actually use perspective projection (understandably). I wanted to replicate the more ubiquitous Parallel (aka Orthographic) projection first to see how the math and visuals differed inside the terminal.


### Visualizing the vectors
Before I began working out the math, I had to consider how I was going to print the vectors to screen. I really wanted to focus on keeping the stereotypical-coder-vibe so that meant figuring out which ASCII characters I'd be using. Lacking the vision and artistry of an ioccc participant, I chose to compose the results from the ascii braille set; with the hopes of maximizing detail.

