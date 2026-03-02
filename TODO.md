# Guttenberg — TODO

## Migration & Cleanup

- [ ] Migrate legacy Gutenberg content into new project
  - [ ] Create a filter/vetting process: no redundancy, no ephemeral garbage, no logically superseded content, correctly named, tighter and stricter

## Game Design Document (GDD)

- [ ] Create a formal taxonomy of game terms (skills, abilities, powers, talents, conditions, filters, etc.) — lives in the GDD
- [ ] Define fixed entities that exist between book worlds and their functions
- [ ] Separate and define meta-story-level elements — tease out from existing docs (The Marginalia, etc.)
- [ ] Define design patterns for minigames and how they get used by the engine
- [ ] Add cooldown timer mechanic for certain skills/abilities
- [ ] Architect templates for scenarios/encounters (note: these terms also need taxonomic precision)
- [ ] Resolve player vs. character identity model — is the player a distinct entity behind the characters (MTG model: player takes damage, isn't a card) or does the player exist only through their characters (Baldur's Gate model: no "you" outside the party)? This is architecturally foundational.
- [ ] Define and firm up the types of traversable connections between books — what kinds of links exist, how they're triggered, what makes them traversable vs. locked, one-way vs. two-way, etc.
- [ ] Design fast travel — two distinct flavors: (1) abbreviated traversal through connected works (skipping the mundane parts but still "traveling the path") and (2) teleportation via in-game mechanisms (bypassing the path entirely). Define what enables each, costs, limitations, and which game mechanics gate them.
- [ ] Define "montage mode" as a broader design pattern — applies to fast travel but also to other systems like faction turns at the strategic level being summarized. Identify all the places where montage mode applies and formalize the pattern.
- [ ] Flesh out the mechanics behind a book's immune system — how does a book world detect, resist, or respond to foreign elements/players/intrusions?
- [ ] Define party size / how many characters can go on a mission. Also clarify the taxonomy of mission vs. quest vs. other structured goal types — what distinguishes them mechanically and narratively?

## Architecture & Design Philosophy

- [ ] Formally define the distinction between Design Philosophy and Design Practice:
  - **Design Philosophy**: abstract north stars that guide decisions (e.g., "fun over tedium," "keep the story moving")
  - **Design Practice**: concrete mechanisms, patterns, and processes that implement the philosophy (e.g., "this is how we build encounters," "this is how we measure tedium," "this is how we set up test iterations")
- [ ] Define the layered architecture model — OS-like layers of game functionality where each layer depends on layers below it. Changing something at layer N means you know layers N+1 and above might break. Formalize which mechanics live at which layers, what the dependency rules are, and what testing is required when a layer is modified.
  - [ ] Find and consolidate the existing chat discussion on this topic

## Player's Guide

- [ ] Build Player's Guide as a separate document, developed synchronously with the GDD

## Visualizations

- [ ] Create better visual representations of the map/graphs showing how books are connected to each other

## Playtesting

- [ ] Explore computer-assisted tabletop RPG mode (little/no DM setup required)
- [ ] Design scenarios for in-person playtesting
- [ ] Design scenarios where playtesting can be simulated and summarized

## Art & Style

- [ ] Research Claude-friendly art engine integration (Midjourney, etc.) for on-the-fly generation
- [ ] Create fixed style instructions so generated art stays within a consistent design philosophy (documentation, encounters, scene settings)

## Research & Exploration

- [ ] Explore downloading texts from Project Gutenberg and processing them with a local model — assess utility for the game (content sourcing, world-building raw material, NLP pipelines, etc.)

## Taxonomy Enforcement

- [ ] Build a taxonomy linter — a system that checks all content going into the game against the taxonomy, flags reserved words used incorrectly, and prompts for verification
- [ ] Auto-link taxonomy terms in HTML game documents — any taxonomically reserved word should be automatically underlined and linked to its taxonomy reference entry
- [ ] Make the taxonomy easily extensible — ability to add new terms at any point during development
- [ ] Create a taxonomy cheat sheet / quick-reference card for working sessions

## Learning & Tooling

- [ ] Learn and understand git in the context of this project (have Claude teach alongside real usage)

## Claire Deliverables

- [ ] Find the design patterns discussion from chats with Claire
- [ ] Create a document from that discussion
- [ ] Show Claire examples of styleguide creation
- [ ] Show Claire Obsidian tricks
