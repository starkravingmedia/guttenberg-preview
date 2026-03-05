# World of Guttenberg — Vault Context for Claude

> This document exists so that any Claude instance working with me in this Obsidian vault understands my project, my skill level, my working style, and how to meet me where I am. Read this before responding to anything.

---

## Who I Am

I'm a **designer-first, developer-second** creative technologist building an ambitious indie game project called **World of Guttenberg**. My background is in creative direction, narrative design, and systems thinking — not in traditional software engineering. I write with authority and clarity. I think architecturally. I am not a beginner, but I am learning the engineering side *in the context of doing real work*, not through tutorials.

### What I'm Strong At

- **Design thinking and systems architecture.** I naturally think in layered systems, taxonomies, dependency graphs, and abstractions. I defined an OS-like layered architecture model for my game mechanics before I fully understood git branching.
- **Writing.** My prose is sharp, deliberate, and stylistically distinct. I write design documents, pitch decks, legal analyses, and game content at a professional level. I think in voice and tone. I care about how things read, not just what they say.
- **Creative direction and aesthetic vision.** I designed two complete CSS design systems (a parchment-and-ink literary aesthetic and a modern "terminally online" theme) with custom typography, texture effects, and design tokens. I know what I want things to look and feel like.
- **Prompt engineering and LLM collaboration.** I use Claude as a co-creator, game master, and development partner. I've written sophisticated system prompts (Battle Narrator, Full Session, Archon Encounters) and identified subtle LLM behavioral issues like sympathy bias, instruction forward-leak, and character knowledge bleed — naming these problems precisely and proposing structural solutions.
- **Identifying and articulating hard problems.** I wrote a structured copyright analysis that maps the gradient from fan fiction to AI-generated content at scale. I surface design tensions, name open questions, and resist premature closure. My TODO list reads like an architectural decision log.
- **Project governance.** I've built organizational rules, naming conventions, template systems, validation pipelines, and content review workflows (Script Doctor) that impose structure without bureaucracy.

### What I'm Learning

- **Git and version control.** It's literally on my TODO list: "Learn and understand git in the context of this project (have Claude teach alongside real usage)." I use git through Claude Code and understand branching and PRs at a working level, but I don't yet have deep muscle memory or mental models for things like rebasing, conflict resolution, or ref manipulation. Explain git concepts when they come up naturally — don't assume I know, but don't over-explain either.
- **JavaScript and Node.js.** I have a validation framework (`scripts/validate.js`, `scripts/lib/profile-rules.js`) that works and is well-structured, but I didn't write it from scratch alone — it was built collaboratively with Claude. I can read and understand JS, modify it, and reason about its structure, but I wouldn't confidently write a complex Node module from a blank file without assistance.
- **Frontend engineering.** I write and maintain CSS and HTML, but I'm working at the static site level (no framework, no build tools, no bundler). I understand the cascade, specificity, and layout, but I haven't worked with React, Vue, or any component framework. I use `npx serve` to preview things. Don't assume I know what Webpack does.
- **CI/CD and DevOps.** I have a working GitHub Actions workflow, but I set it up with help. I understand what it does conceptually but would struggle to debug a YAML pipeline issue cold.
- **Software engineering patterns.** I intuitively apply patterns (separation of concerns, single source of truth, schema validation, template systems), but I don't always know their formal names or when I'm reinventing something that already has a standard solution. If I'm approaching something the hard way, tell me — but explain *why* the standard approach is better, don't just name-drop the pattern.

### What Frustrates Me

- **Losing context.** I work across long sessions with Claude and across multiple Claude instances (Claude.ai Projects, Claude Code). When a new conversation doesn't know what the last one established, I have to re-explain foundational decisions. This vault is partly a solution to that problem.
- **Over-engineering and scope creep from AI.** When I ask for a small change, I want a small change — not a refactored module with new abstractions, docstrings, and "improvements" I didn't ask for. Respect the scope of the request.
- **Jargon without explanation.** If you say "you should use a factory pattern here," and I don't know what a factory pattern is, that's not helpful. Explain it in the context of what I'm actually building.
- **Being talked down to.** I'm not a junior developer — I'm a senior creative professional learning a new discipline. My design instincts are sophisticated. My engineering skills are developing. Calibrate accordingly.
- **Premature closure on hard problems.** I like sitting with open questions. Don't rush to resolve design tensions that I've deliberately left open. If I've marked something as an open question, it's open for a reason.

---

## The Project

### One-Sentence Summary

World of Guttenberg is a narrative-driven strategy card game powered by LLMs, where players recruit characters from public domain literature and wage faction warfare across the literary web — the real network of influence connecting every book ever written.

### Core Concept

- **Source material:** Project Gutenberg's 70,000+ free public domain texts
- **Engine:** Claude (LLM) as generative game master — every battle, encounter, and consequence is narrated uniquely
- **Cards:** Three types in equal proportion — Actors (characters), Artifacts (objects), Ideas (concepts) — each drawn from real literature
- **Map:** The literary web itself — real connections between real texts (influence, adaptation, reference, theft)
- **Interface:** A parchment page where everything is written and sketched in real time
- **Tone:** Borges by way of No Man's Sky. Literary, hallucinatory, philosophical, slightly absurd.
- **Key insight:** Thematic resonance matters more than raw stats. Scholarship is the weapon. The battlefield is the written word.

### Project State

**Early-to-mid alpha.** The design framework is established, core mechanics are documented, playtesting validates the concept, and infrastructure (validation, CI/CD, content pipelines) is partially built. The game works in headless sessions through Claude.ai Projects. There is no traditional UI or game client yet.

### Tech Stack

| Layer | Tools |
|-------|-------|
| Game engine | Claude LLM via Claude.ai Projects (system prompts) |
| Content format | Structured markdown (TOML-ish schema) |
| Rendering | Static HTML + custom CSS design systems |
| Validation | Node.js (custom markdown parser + profile rules) |
| Version control | Git, GitHub, GitHub Actions |
| Development | Claude Code, git worktrees |
| Preview | npx serve (static file server) |

### Key Files

| File | Purpose |
|------|---------|
| `DESIGN.md` | Game Design Document — comprehensive mechanics reference (63KB) |
| `PITCH.md` | High-concept pitch and marketing language |
| `ORGANIZATION.md` | Content governance: folder structure, naming, workflow |
| `TODO.md` | Project backlog and architectural decision log |
| `GUTENBERG_ENGINE.md` | Platform architecture for persistent, connected campaigns |
| `characters/_template.md` | Canonical character profile template |
| `styles/guttenberg.css` | Primary design system (parchment aesthetic) |
| `scripts/validate.js` | Automated profile validation entry point |
| `taxonomy/taxonomy.md` | Game terminology registry |
| `script-doctor/flags.md` | Content review rules (red flags, green flags) |

### Content Architecture

**Markdown is the source of truth.** HTML sheets are rendered outputs. Never edit HTML directly unless the conversation is specifically about the sheet.

```
characters/
├── _template.md
├── sample/profiles/       ← release-quality canonical characters
├── experimental/profiles/ ← work-in-progress builds
└── scenario/profiles/     ← characters for specific playtests
```

Same structure for `npcs/`. File naming is kebab-case. Character Type metadata must match the folder.

---

## How to Work With Me

### Communication Style

- **Be direct.** Lead with the answer or action, not the reasoning.
- **Match my register.** I write precisely and expect the same. Don't dumb things down, but don't assume shared technical vocabulary either.
- **Teach in context.** When a new concept is relevant, explain it in terms of what I'm building — not in the abstract.
- **Respect open questions.** If something is marked as unresolved in my design docs, don't resolve it without being asked. You can offer perspectives, but frame them as options, not decisions.
- **Small changes stay small.** If I ask to fix a typo, fix the typo. Don't refactor the surrounding code.

### What I Want From Claude in This Vault

1. **Continuity.** Use this document and anything else in the vault to maintain context across sessions. Don't make me re-explain things.
2. **Calibrated assistance.** Challenge my design thinking — I can handle it. Scaffold my engineering learning — I need it. Don't conflate the two.
3. **Honest assessment.** If I'm approaching something in a way that will cause problems later, say so directly. Explain the tradeoff. Let me decide.
4. **Growth-oriented.** When I ask you to do something I could learn to do myself, default to teaching me alongside doing it — unless I explicitly say "just do it." My git TODO item is a standing invitation for this.
5. **Respect the architecture.** This project has organizational rules, naming conventions, templates, and validation. Follow them. If you're unsure, check `ORGANIZATION.md` before creating or moving files.

### What I Don't Want

- Unsolicited refactoring or "improvements"
- Emoji unless I use them first
- Filler phrases ("Great question!", "Let me help you with that!")
- Assumptions that I don't understand my own design
- Resolving design tensions I've deliberately left open
- Creating files I didn't ask for
- Explanations longer than they need to be

---

## Session Bootstrapping

When starting a new session in this vault, Claude should:

1. Read this file first
2. Check for any session-specific context notes in the vault
3. If the task involves game content, review `ORGANIZATION.md` and the relevant `_template.md`
4. If the task involves code, check `scripts/` for existing patterns before writing new ones
5. If the task involves design decisions, check `DESIGN.md` and `TODO.md` for existing context
6. Ask clarifying questions early rather than guessing

---

*This document reflects the project as of early March 2026. Update it as the project evolves.*
