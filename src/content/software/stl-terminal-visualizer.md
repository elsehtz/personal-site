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

## Introduction/Context
I was watching a great video trying to simplify perspective projection and how understanding the simple math behind it can provide useful intuition when dealing with 3-dimensional visualization. 

Simultaneously, I've been transitioning my workflow out of VS code, progressively transitioning into a keyboard-centric workflow. It occurred to me that it probably wouldn't take long to create a low-effort 3D model viewer for STL files, given their inherent bare-bones methodology. As an avid user of my 3D printer, I also have a bunch of STL files and I thought it would be a fun little idea to tinker with and see what if there were any aesthetic visuals that could come of it. 

![STL-render screenshot](https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/terminal-stl-render.gif)
<i>Example torus</i>

The whole thing ended up as a single C file (`stlview.c`) that only depends on libc and libm:

```bash
cc -O2 -o stlview stlview.c -lm
./stlview model.stl
```

## Scoping: Parallel Projection vs Perspective Projection

<img src="https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/Axonometric_projection.svg" class="invert" />
<img src="https://pub-dfc737778c9d4773ab7532cdb428abd1.r2.dev/site-assets/Various_projections_of_cube_above_plane.svg" class="invert" />

Immediately, we have to distinguish between two main methods for propagating 3-dimensional information into a 2-dimensional view. I realized most tools don't actually use perspective projection (understandably). I wanted to replicate the more ubiquitous Parallel (aka Orthographic) projection first to see how the math and visuals differed inside the terminal.

### Visualizing the vectors
Before I began working out the math, I had to consider how I was going to print the vectors to screen. I really wanted to focus on keeping the stereotypical-coder-vibe so that meant figuring out which ASCII characters I'd be using. Lacking the vision and artistry of an ioccc participant, I chose to compose the results from the ascii braille set; with the hopes of maximizing detail.

That braille wireframe ended up being one of two render modes (toggle with `w`). The default is a solid, shaded mode built from the upper-half-block character `▀`, more on both below.

## The pipeline at a glance

Every frame, every triangle goes through the same handful of steps:

```text
load STL  →  normalize to unit sphere
loop every frame:
    read keys, advance rotation angle
    for each triangle:
        rotate its 3 vertices          (model space → view space)
        project to 2D                  (orthographic or perspective)
        solid mode:  shade + rasterize with a z-buffer
        wire  mode:  draw its 3 edges as braille dots
    encode the pixel grid as terminal escape codes
    write the whole frame in one syscall, sleep to hold the frame rate
```

## Step 1: Loading and normalizing the mesh

An STL file is just a list of triangles, no shared vertices, no materials. There are two flavours: ASCII (`vertex x y z` lines) and binary. The neat trick for telling them apart is that a binary STL is *exactly* $84 + 50n$ bytes long, where $n$ is the triangle count stored at byte 80. Checking the leading `solid` keyword is unreliable since some binary exporters write it too.

```text
function load_stl(path):
    read the first 84 bytes; n ← uint32 at offset 80
    if file_size == 84 + 50·n:                  # binary
        for each of n 50-byte records:
            skip the 12-byte stored normal      # recomputed later anyway
            copy the 9 floats (3 vertices)
    else:                                       # ASCII
        scan the text for every "vertex a b c"
        group them in threes into triangles
```

Models come in every size and offset imaginable, so before rendering they get squeezed into a unit sphere centred at the origin. With bounding box corners $\mathbf{lo}$ and $\mathbf{hi}$:

$$
\mathbf{c} = \frac{\mathbf{lo} + \mathbf{hi}}{2},
\qquad
r = \max_i \lVert \mathbf{v}_i - \mathbf{c} \rVert,
\qquad
\mathbf{v}_i' = \frac{\mathbf{v}_i - \mathbf{c}}{r}
$$

Using the bounding *sphere* radius instead of the box means no vertex can ever leave radius 1, so the model never clips no matter how it spins.

## Step 2: Rotation

The view spins around the vertical axis by $\theta_y$ (auto-rotation plus the left/right arrows) and tilts around the horizontal axis by $\theta_x$ (up/down arrows). Applying $Y$ first, then $X$:

$$
\mathbf{v}_{\text{view}} = R_x(\theta_x)\, R_y(\theta_y)\, \mathbf{v}
$$

$$
R_y(\theta) =
\begin{bmatrix}
\cos\theta & 0 & \sin\theta \\
0 & 1 & 0 \\
-\sin\theta & 0 & \cos\theta
\end{bmatrix},
\qquad
R_x(\theta) =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos\theta & -\sin\theta \\
0 & \sin\theta & \cos\theta
\end{bmatrix}
$$

In code there are no matrices at all, just the multiplied-out rows. The four sines and cosines are computed once per frame and reused for every vertex:

```text
function rotate(v, sin_y, cos_y, sin_x, cos_x):
    x1 ←  v.x·cos_y + v.z·sin_y        # spin about Y
    z1 ← −v.x·sin_y + v.z·cos_y
    y2 ←  v.y·cos_x − z1·sin_x         # tilt about X
    z2 ←  v.y·sin_x + z1·cos_x
    return (x1, y2, z2)
```

## Step 3: Projection

Now the interesting part. After rotation, each point $(x, y, z)$ needs to land on a 2D pixel $(s_x, s_y)$. Let $(o_x, o_y)$ be the centre of the pixel grid and $k$ a scale factor that maps the unit sphere to 45% of the shorter screen dimension:

$$
k = 0.45 \cdot \min(w, h) \cdot \text{zoom}
$$

### Orthographic (parallel)

Just drop $z$. Every projection ray is parallel, so distance has no effect on size:

$$
s_x = o_x + k\,x,
\qquad
s_y = o_y - k\,y
$$

The minus sign is because terminal rows count *downward* while $+y$ in model space points up.

### Perspective

Put a pinhole camera on the $z$-axis at distance $d$, looking back toward the origin (toward $-z$). A point at height $y$ sits a depth of $z_c = d - z$ in front of the camera. Draw the ray from the point to the pinhole and you get two similar triangles: one with legs $(y,\ z_c)$, and the one on the image plane at focal length $f$ with legs $(y',\ f)$. Matching ratios:

$$
\frac{y'}{f} = \frac{y}{z_c}
\quad\Longrightarrow\quad
y' = \frac{f}{z_c}\,y
$$

That division by depth *is* perspective, and it's the whole trick. Things farther away (bigger $z_c$) get smaller.

In `stlview` the focal length is set equal to the camera distance, $f = d$, which gives the projection:

$$
s_x = o_x + k \cdot \frac{d}{d - z} \cdot x,
\qquad
s_y = o_y - k \cdot \frac{d}{d - z} \cdot y
$$

Choosing $f = d$ has a nice property: at the model's centre ($z = 0$) the factor is exactly $1$, so the middle of the model is the same size as in orthographic mode. Perspective only *bends* the geometry in front of and behind that plane, and toggling `p` doesn't make the model jump in size.

It also makes the relationship between the two projections obvious. Expand the factor for a far-away camera:

$$
\frac{d}{d - z} = \frac{1}{1 - z/d} = 1 + \frac{z}{d} + \frac{z^2}{d^2} + \cdots
\;\xrightarrow{\;d \to \infty\;}\; 1
$$

Orthographic projection is just perspective projection with the camera infinitely far away. The `[` and `]` keys move $d$ between $1.5$ and $20$. Since $f$ moves with it, the centre stays fixed while the edges stretch, which is basically a [dolly zoom](https://en.wikipedia.org/wiki/Dolly_zoom).

One guard is needed: if $z_c \to 0$ the division blows up, so depth is clamped to $z_c \geq 0.05$. With the model inside the unit sphere and $d \geq 1.5$, this only matters as a safety net.

```text
function project(p, origin, k, perspective, d):
    if perspective:
        zc  ← max(d − p.z, 0.05)       # depth in front of the camera
        fac ← d / zc                   # = 1 at the model's centre
    else:
        fac ← 1
    sx ← origin.x + p.x · fac · k
    sy ← origin.y − p.y · fac · k     # screen y grows downward
    return (sx, sy)
```

For the matrix-minded, the same thing in homogeneous coordinates, where the GPU-style "divide by $w$" does the perspective step:

$$
\begin{bmatrix} x_h \\ y_h \\ w \end{bmatrix}
=
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -\tfrac{1}{d}
\end{bmatrix}
\begin{bmatrix} x \\ y \\ z \end{bmatrix}
+
\begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix},
\qquad
(x', y') = \left(\frac{x_h}{w},\ \frac{y_h}{w}\right)
$$

Here $w = 1 - z/d = z_c / d$, so dividing by $w$ multiplies by $d / z_c$, the same factor as above.

## Step 4: Shading

Each triangle gets one flat colour. The face normal comes from the cross product of two edges, and brightness from Lambert's cosine law against a fixed light direction $\hat{\mathbf{L}}$:

$$
\hat{\mathbf{n}} = \frac{(\mathbf{v}_1 - \mathbf{v}_0) \times (\mathbf{v}_2 - \mathbf{v}_0)}{\lVert (\mathbf{v}_1 - \mathbf{v}_0) \times (\mathbf{v}_2 - \mathbf{v}_0) \rVert}
$$

$$
I = a + (1 - a)\,\lvert \hat{\mathbf{n}} \cdot \hat{\mathbf{L}} \rvert,
\qquad a = 0.18
$$

$$
\text{colour} = I \cdot (232,\ 150,\ 64)
$$

$a$ is an ambient floor so faces turned away from the light don't go pitch black, and the base colour is a warm 3D-print orange. The absolute value makes the lighting *two-sided*: STL files from random sources are notorious for inconsistent triangle winding, and ignoring the sign of the normal means a flipped triangle still shades correctly. The normal is recomputed from the rotated vertices because the light is fixed in view space while the model turns underneath it.

## Step 5: Rasterizing with a z-buffer

To fill a triangle, every pixel in its bounding box is tested with *edge functions*. For screen-space vertices $\mathbf{a}_0, \mathbf{a}_1, \mathbf{a}_2$, twice the signed area is:

$$
A = (x_1 - x_0)(y_2 - y_0) - (x_2 - x_0)(y_1 - y_0)
$$

For a pixel centre $\mathbf{p}$, the barycentric weights are the areas of the sub-triangles opposite each vertex, divided by the whole:

$$
w_0 = \frac{(x_1 - p_x)(y_2 - p_y) - (x_2 - p_x)(y_1 - p_y)}{A},
\quad
w_1 = \frac{(x_2 - p_x)(y_0 - p_y) - (x_0 - p_x)(y_2 - p_y)}{A},
\quad
w_2 = 1 - w_0 - w_1
$$

The pixel is inside the triangle exactly when $w_0, w_1, w_2 \geq 0$. Dividing by $A$ normalizes the sign, so this works for either winding. The same weights interpolate depth:

$$
z_{\mathbf{p}} = w_0 z_0 + w_1 z_1 + w_2 z_2
$$

A depth buffer stores the nearest $z$ seen so far at each pixel. Since the camera looks toward $-z$, *bigger* $z$ means closer, so a pixel is only overwritten when the new $z$ is larger. Perspective doesn't change depth ordering, so the same test works in both projection modes.

```text
function render_solid(mesh, angles, zoom, perspective, d):
    clear framebuffer; fill z-buffer with −∞
    for each triangle (v0, v1, v2):
        r0, r1, r2 ← rotate each vertex
        colour     ← shade(normal(r0, r1, r2))
        a0, a1, a2 ← project each vertex to screen
        A ← signed_area(a0, a1, a2)
        if |A| ≈ 0: skip                       # degenerate / edge-on
        for each pixel p in bounding box (clipped to screen):
            w0, w1, w2 ← barycentric(p) / A
            if any w < 0: continue             # outside the triangle
            z ← w0·r0.z + w1·r1.z + w2·r2.z
            if z > zbuffer[p]:                 # nearer than what's there
                zbuffer[p] ← z
                framebuffer[p] ← colour
```

One honest caveat: interpolating $z$ linearly in screen space is only exact for orthographic projection. Under perspective, the quantity that is actually linear across the screen is $1/z_c$, and interpolating $z$ directly can mis-sort where two large triangles intersect. At terminal resolution I haven't noticed it, but it's on the list.

## Step 6: Getting pixels into a terminal

### Solid mode: half blocks

A terminal cell is roughly twice as tall as it is wide. The upper-half-block glyph `▀` (U+2580) paints the top half of the cell in the *foreground* colour and leaves the bottom half showing the *background* colour. With 24-bit "truecolor" escape codes, each cell becomes two vertically stacked, nearly square pixels:

```text
for each terminal row y:
    for each column x:
        top    ← pixel(x, 2y)      or background colour
        bottom ← pixel(x, 2y + 1)  or background colour
        if top changed:    emit ESC[38;2;R;G;Bm      # foreground
        if bottom changed: emit ESC[48;2;R;G;Bm      # background
        emit "▀"
```

Colour codes are only emitted when they change from the previous cell, which cuts the output a lot across flat-shaded faces.

### Wireframe mode: braille

The braille block (U+2800 to U+28FF) has 256 glyphs covering every combination of a 2×4 dot grid, so each cell holds 8 sub-pixels. Each dot maps to one bit, and the glyph is just $\texttt{0x2800} + \text{bits}$:

$$
\begin{matrix}
\texttt{0x01} & \texttt{0x08} \\
\texttt{0x02} & \texttt{0x10} \\
\texttt{0x04} & \texttt{0x20} \\
\texttt{0x40} & \texttt{0x80}
\end{matrix}
$$

(The odd bottom row is historical: braille started with 6 dots, and the last two were bolted on later.) The edges are drawn into the dot grid with Bresenham's line algorithm, using only integer adds and compares:

```text
function render_wire(mesh, ...):
    clear dot grid (2W × 4H)
    for each triangle:
        project its 3 rotated vertices, round to integer dot coordinates
        bresenham(p0, p1); bresenham(p1, p2); bresenham(p2, p0)

function emit_wire():
    for each cell (x, y):
        bits ← 0
        for each of the 8 dots (dx, dy) in the cell:
            if dot is set: bits |= BIT[dy][dx]
        emit the UTF-8 encoding of codepoint 0x2800 + bits
```

There's no depth test here, so hidden edges show through. For line art, that's kind of the point.

## Step 7: The main loop

The terminal is put into raw mode (no echo, no line buffering, non-blocking reads) and switched to the alternate screen so your scrollback is untouched when you quit. `SIGWINCH` flags a resize and `SIGINT`/`SIGTERM` flag a clean exit. The terminal is always restored on the way out, including through `atexit`.

```text
main:
    mesh ← load_stl(path); normalize(mesh)
    enter raw mode + alternate screen; install signal handlers
    while running:
        if resized: query size, reallocate buffers
        while a key is pending: handle it        # q, space, arrows, +/-, w, p, [ ], r
        dt ← now − previous_frame_time
        if not paused: θy += 0.7 rad/s · dt      # frame-rate independent spin
        render (solid or wire) into the buffers
        encode into one output buffer
        write(stdout, buffer)                    # single syscall = no tearing
        sleep(target_frame_time − time_spent)
    restore terminal
```

Two details matter more than they look. Rotation is scaled by the real elapsed time $\Delta t$, so the spin speed doesn't depend on the frame rate. And the entire frame is built in memory and written with one `write()` call. Printing cell-by-cell makes the terminal redraw mid-frame and flicker badly.

## Controls

| Key | Action |
|---|---|
| `q` / `Ctrl-C` | quit |
| `space` | pause / resume rotation |
| arrows | nudge rotation |
| `+` / `-` | zoom |
| `w` | toggle solid / braille wireframe |
| `p` | toggle orthographic / perspective |
| `[` / `]` | shorter / longer focal length |
| `r` | reset view |
