# Glen's AI Progress Report — For Dustin
**Compiled: March 4, 2026**
**Method:** Claude audited Glen's workspace, git history, Google Drive, and connected tools to reconstruct everything he's built and explored over the past few weeks.

---

## The Headline

Glen didn't learn a tool. He architected a system. Over roughly two weeks, he went from "exploring AI" to running a version-controlled, CI/CD-pipelined, multi-tool creative project with custom AI commands, a self-improving editorial review system, and a component reuse architecture — all in service of an original game design that is, itself, about what happens when an LLM becomes a game engine.

The project is called **World of Guttenberg**. More on that below. But the project is almost secondary to what it reveals about the velocity and sophistication of adoption.

---

## The Project: World of Guttenberg

An LLM-powered card game / TTRPG set in the literary web of Project Gutenberg's 70,000+ public domain texts. Players extract characters, artifacts, and ideas from real books. The LLM is the game master. The battlefield is human literature.

This isn't a toy. The design document alone is 63KB of rigorously structured game mechanics. Here's what exists:

### Core Design Artifacts

- **DESIGN.md** — A comprehensive game design document (63KB) with card taxonomy (8 Actors / 8 Artifacts / 8 Ideas), D&D-style ability scores, Game Traits, Conditions with metadata (duration, visibility, observability), Roll Skills with d20 mechanics, Filters ("personality as weather"), Reputations, faction systems, and a full battle resolution framework. This is a real GDD, not a sketch.

- **PITCH.md** — A polished pitch document written in a voice that knows what it's selling. Scheherazade fights with unfinished sentences. The Voynich Manuscript makes every other card doubt its own legibility. The Sublime scales to its opponent. This is the work of someone who understands that the pitch IS the product demo for a game about language.

- **GUTENBERG_ENGINE.md** — A vision document for a persistent, DM-less campaign platform. Babbage + Gutenberg as founding metaphor. The engine catches everything that would otherwise die when you close the window — character histories, faction territories, literary web discoveries. Lays out creator roles (Plot Architects, Web Cartographers, Lore Keepers) and a community-driven content economy.

- **LLM Copyright Analysis** — A structured legal analysis walking through the copyright gradient from "player names a character BilboFromBagEnd" to "industrial-scale AI fan fiction." Serious thinking about where lines get fuzzy and why public domain source material matters.

### Characters Built

Two fully realized sample characters with complete mechanical profiles:

- **Faust** — with Roll Skills like "Read the Contract" (the more he decodes, the more texts lock him out — ironic cost), full ability scores, conditions, reputations, and a Filter
- **Scheherazade** — "The Unfinished Sentence" condition that mechanically prevents her from delivering information cleanly, forcing information asymmetry in every encounter

Each character exists as a markdown profile (source of truth) AND a rendered HTML character sheet, following a formal template system.

### Playtests Completed

Multiple named playtest sessions across two operators (campaign styles):

- **The Ginsfeld Sessions** — 3 Wednesday group sessions (Dr. Donald Ginsfeld recruits through intimacy — fake group therapy, basement under a library, bad coffee)
- **The Kade Sessions** — Tuesday group sessions (Lisle Kade recruits through spectacle — YouTube show, chaotic filter, expendable recruits)
- Battle playtests, extraction runs, archon scenarios, full session runs
- A **Session Builder** — a meta-prompt wizard that walks you through configuring a complete game session with three phases (Recruiting → Shopping Trip → Big Show), a configurable depth dial (Quick Start / Standard / Full Control), randomization tables for settings, complications, opposition, mission targets, and information asymmetry

### Key Design Insight from Playtesting

The February 28 playtest session produced concrete mechanical revisions: the battle structure evolved from a 3-round format to a 5-phase structure (Hands Drawn → Arena → Battle → Victory/Loss → Aftermath). The "graphic novel constraint" emerged — write like you have a page count. These aren't theoretical — they came from running the system and watching what worked.

---

## The Tooling: This Is Where It Gets Interesting for You

Glen isn't just using Claude as a chatbot. He's built a toolchain.

### 1. The Script Doctor (Custom Claude Code Command Suite)

A self-improving editorial review system with three commands:

- `/script-doctor [file]` — Classifies content, scans against a living flag library, reports findings, proposes new flags, offers fixes. Never overwrites originals. Produces versioned outputs.
- `/script-doctor-compare [file] "section"` — Generates three alternative versions of content (Tighter / Richer / Wilder) for comparison.
- `/script-doctor-flags` — Manages the flag library (list, search, add, remove, stats).

The flag library currently contains **13 red flags** and **8 green flags**, all with concrete examples and resolution strategies. Red flags include things like "Beating a Dead Horse" (circling without advancing), "Knowledge Bleed" (characters knowing things from outside their source text), "LLM Sympathy Bias" (conflicts resolving too easily), and "Instruction Forward-Leak" (the LLM reading ahead and shaping "random" outputs). Green flags include "Emergent Filter Interaction," "Moment Surprises the Designer," and "Single Sentence Carries a Scene."

**Why this matters:** The flag library grows with each review. Every time the Script Doctor runs, it can propose new flags discovered in the content. The system gets smarter over time. This is a self-improving QA tool built on top of an LLM.

### 2. The Prop House + Disassembler

A component reuse architecture:

- **Prop House** — A library with 9 categories (characters, settings, complications, set pieces, artifacts, dialogue, NPCs, plot devices, moments) for storing extracted components from completed sessions
- **Disassembler** — A tool that reads completed session transcripts and extracts reusable parts with quality filters, filing them into the Prop House with source attribution and reuse notes

This is a content pipeline. Play sessions → Disassembler → Prop House → Session Builder → New sessions. The system feeds itself.

### 3. Version Control & CI/CD

- **GitHub repository** with 10+ pull requests merged in 3 days (March 2–4)
- **GitHub Actions CI/CD pipeline** that validates character profiles against the template schema on every PR touching character/NPC files
- **Node.js validation scripts** (markdown-parser.js, profile-rules.js, reporter.js) that check structural compliance
- **Git worktrees** for isolated development branches via Claude Code

Glen went from "learn git" (it's literally on his TODO list) to running a CI/CD pipeline validating game content on pull requests. In days.

### 4. Formal Architecture

- **ORGANIZATION.md** — Codified rules for file organization, naming conventions, folder structure, and default workflows. "We architect in markdown and render in HTML/CSS." Markdown is source of truth; HTML sheets are generated from profiles.
- **Taxonomy system** — Reserved game terms with canonical definitions. Plans for a taxonomy linter and auto-linking in HTML documents.
- **Test Coverage Analysis** — A systematic audit (done March 4) identifying what should be tested, organized by priority, with effort estimates. Character profile schema validation, HTML↔markdown sync checks, folder structure compliance, CSS class coverage, cross-document reference integrity.

### 5. Two Design Systems

- **guttenberg.css** — The core visual identity (parchment aesthetic)
- **terminally-online.css** — An alternative theme
- Full HTML style guides for both
- An **"Introducing the Guttenberg Engine"** landing page with classical imagery and links to playtest sessions

### 6. Interactive Visualizations

- **Six Degrees of Separation** — An HTML visualization showing literary connections between canonical texts
- **Card Catalog** — An HTML visualization of the card system

---

## Beyond Guttenberg: GIAC Certification Tools

Separately from the game project, Glen built (or had built) two custom **Cowork skills** for GIAC security certification prep:

- **take-exam** — Simulates a low-knowledge student taking an open-book practice exam, relying entirely on a physical index to find answers in course textbooks. The real purpose is auditing index quality — every wrong answer reveals an index gap. Enforces strict rules: index-first/index-only, no outside knowledge, max 4 lookups per question.

- **print-index** — Transforms a GIAC index spreadsheet into print-ready two-column portrait PDFs, one per course book, with color-coded section headers, bold landmarks, alphabetized terms, and alternating row banding. Designed to be tucked into physical books for exam day.

These are purpose-built tools for a specific workflow — not generic prompts but structured skills with rules, constraints, and output formats.

---

## What This Adds Up To

### Volume (March 2–4, 2026 — 3 days of git activity)
- 40+ commits across 10+ pull requests
- ~250KB of structured game design content
- 3 custom Claude Code commands
- 2 custom Cowork skills
- 1 CI/CD pipeline
- 1 GitHub repository
- Multiple HTML pages, visualizations, and style systems
- A self-improving review tool with a 500+ line flag library

### Sophistication
- **Source-of-truth architecture** — markdown files are canonical; everything else is derived
- **Self-improving systems** — the Script Doctor's flag library grows with each review
- **Component reuse pipelines** — sessions feed the Prop House, which feeds the Session Builder
- **Formal version control** — never overwrite, always version, originals are sacred
- **Test-driven thinking** — coverage analysis before tests exist, validation on PRs
- **LLM-aware design** — documented gotchas (knowledge bleed, forward-leak, sympathy bias) with mitigation strategies

### The Meta-Level

The game Glen is building is ABOUT the collision of ideas in a literary space navigated by an LLM. The tools Glen is using to build it are LLMs. The design documents are prompts. The playtests are conversations. The characters are markdown files that accumulate history through AI interactions. The flag library is a knowledge base that the AI improves by reviewing AI-generated content.

Glen is not using AI to build a thing. He is building a thing that is made of AI, using AI, and the thing itself is about the relationship between human ideas and machine pattern-recognition. The tool and the product and the process are the same material.

---

## Where Dustin Might Point Next

These are observations, not prescriptions — Dustin will know better. But based on what's here:

1. **The Session Builder is the product.** The game design is rich, but the Session Builder wizard — the meta-prompt that generates playable sessions from configuration — is the thing that makes the game reproducible and shareable. If Glen hasn't already, running the Builder through its paces and refining the output quality is the highest-leverage work.

2. **The Script Doctor pattern is generalizable.** A self-improving review tool with a living flag library, versioned outputs, and a "never overwrite" philosophy is a pattern that works for ANY content domain, not just game design. Dustin might see applications elsewhere.

3. **The Prop House pipeline is underutilized.** The architecture exists. The Disassembler is written. But the library is empty — no sessions have been disassembled yet. Running the Disassembler against the existing Ginsfeld and Kade sessions would populate it and prove the loop.

4. **The CI/CD pipeline could expand.** Right now it validates character profiles. The Test Coverage Analysis identifies a dozen more validation targets. The infrastructure exists to add them.

5. **The "Headless Session" concept is unexplored.** It's in the taxonomy as a defined term — automated sessions that run without human intervention. That's a frontier.

6. **The copyright analysis is the moat.** If Guttenberg ever becomes a real product, the structured legal thinking Glen has already done — the gradient model, the platform vs. creator distinction, the public domain foundation — is the kind of first-principles analysis that most AI projects never do.

---

*This report was generated by Claude from an audit of Glen's workspace, git history, project files, and connected services. Dustin — Glen's been busy.*
