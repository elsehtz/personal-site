---
title: "Custom MCP for my assist env"
description: ""
category: ""
date: 2026-09-08
order: 4
status: "planned"
draft: false

---

## Not another shoehorned-MCP-fluff project
I use the Astro framework for my personal site. It's quick, self-organized, well-developed for vercel, and still alike react in enough ways where I don't feel like I lose too much skill on FE development. As it becomes a larger and larger hub for my notes and progress on various endeavors, I've had to add a lot of supporting material. 

With that in mind, I've wanted an MCP server to help manage content. For personal comprehension I will go through integrating Cloudflare's prebuilt MCP server, understanding that it is far more feature-rich than I presently need. Then I will create my own server and host in on Cloudflare. I hope to build onto my self-built server as we explore more use-cases in the future

## The Task

It kills the chore of manually managing and aligning my content with my buckets. It's good practice, and it absolves me of a monotonous task. Plain and simple.

## The What

A site content & asset MCP server. This supports agentic content management 

## Directly effected resources

- Resumes: I habitually upload a resume once a month. It's generic and bare-bones, but it allows me to experiment with presentation and still provide a small calling card
- Visual assets: gifs, mp3/4, diagrams, and the like need a place to be stored and called

## SDK vs. native R2 bindings

Contrast ```resume-url.ts``` with the Worker version


## Building a remote MCP that manages its own site


## Approach #2: Bare-bones w/ Railway

## Approach #3: Python & the official MCP python-sdk
[source](https://github.com/modelcontextprotocol/python-sdk)
While scoping out the javascript mcp sdk I thought it would be worthwhile to deployment with available python resources. 

Additionally, while further exploring the official repo for MCP sdk developement, I wanted to use their inspector and track my impressions of their official visual testing tool for MCP servers