---
title: "El Dahih Player — Egyptian Arabic Media Practice Tool"
description: "Watch El Dahih (الدحيح) episodes with the Arabic transcript and English translation side by side, synced to the video."
tags: ["Python", "JavaScript", "Language Learning", "YouTube"]
github: "https://github.com/elsehtz/Translated-Media-Lang-Practice-Tool"
date: 2026-10-06
order: 1
---

## Overview

A small local tool for practicing Egyptian Arabic through real media. It currently targets El Dahih (الدحيح): every episode is listed in a library, and opening one plays the video alongside the Arabic transcript and its English counterpart, with the current line following along as the video plays.

## How it works

- **Episode library**: built from the channels listed in `sources.json` (the original Da7ee7 channel, AJ+ Kibreet, and New Media Academy). It refreshes itself every few days, or on demand.
- **Transcripts**: pulled from YouTube captions when an episode is opened. Arabic comes from the official captions, falling back to auto-generated ones. English comes from YouTube's translation of the Arabic, or official English captions when available (toggle between "Translated" and "Official EN").
- **Caching**: each transcript is cached locally after the first load.
- **Stack**: a Python server (`yt-dlp` + `youtube-transcript-api`) with a plain HTML/CSS/JS front end, launched with a single double-click `start.command` that sets itself up on first run.

## Using the player

| | |
|---|---|
| Click a line | jump the video there |
| Scroll the transcript | pauses follow-along; "Jump to current line" resumes |
| Space / K | play or pause |
| ← / → | previous / next line |
| F | toggle follow-along |
| / | search episodes |
| Esc | back to the library |

⇄ swaps the Arabic and English columns, and A− / A+ changes the text size.

## What's next

The player is built around El Dahih for now, but the goal is a general translated-media practice tool: any channel or show with Arabic captions, side by side with English.
