# Guttenberg — Organizational Rules

This document defines the conventions for how content is organized in the Guttenberg project. Claude reads this file to know how to organize, create, and manage files by default.

---

## Core Design Principal

**We architect in markdown and render in HTML/CSS.**

When asked to "make a character," "add a field," "change this," or any similar instruction — unless the conversation is specifically about an HTML sheet — assume the target is the underlying `.md` profile. This keeps markdown as the source of truth and prevents the two formats from drifting out of sync.

---

## Taxonomy

| Term | Format | Description |
|------|--------|-------------|
| **Character Profile** | `.md` | The source-of-truth markdown file for a character. Contains all mechanical and narrative data. |
| **Character Sheet** | `.html` | The rendered HTML presentation of a character, built from the profile using `styles/guttenberg.css`. |
| **NPC Profile** | `.md` | Same as Character Profile but for non-player characters. |
| **NPC Sheet** | `.html` | Same as Character Sheet but for NPCs. |

---

## Folder Structure

```
characters/
├── _template.md              # Character profile template
├── sample/                   # Canonical example characters (Ginsfeld-era standard)
│   ├── profiles/             # .md character profiles
│   └── sheets/               # .html character sheets
├── experimental/             # Work-in-progress or variant builds
│   ├── profiles/
│   └── sheets/
└── scenario/                 # Characters created for specific scenarios/playtests
    ├── profiles/
    └── sheets/

npcs/
├── _template.md              # NPC profile template
├── sample/
│   ├── profiles/
│   └── sheets/
├── experimental/
│   ├── profiles/
│   └── sheets/
└── scenario/
    ├── profiles/
    └── sheets/
```

---

## Required Fields

Every character profile (and by extension, every sheet) must include:

- **Character Type**: One of `sample`, `experimental`, `scenario` — must match the folder the file lives in.
- **Source Text**: The literary work the character originates from. If the text is available on Project Gutenberg, this must be a hyperlink to its Project Gutenberg page (in HTML sheets) or a markdown link (in profiles).
- **Team**: The character's faction/team affiliation (e.g., Descenders, Unsilenced).

---

## Default Workflow: Character Creation

1. **Generate a markdown profile first.** Use `_template.md` as the starting point.
2. **Place it in the correct folder** based on its character type (`sample/`, `experimental/`, or `scenario/`), in the `profiles/` subfolder.
3. **Auto-create a TODO item** in `TODO.md` under a "Sheet Generation" section for the HTML sheet to be generated later.
4. **HTML sheets are generated in bulk** by periodically checking for TODO items that track pending sheet generation, then building sheets from their corresponding profiles using the design system in `styles/guttenberg.css`.

The same workflow applies to NPCs.

---

## True-Up Process

When new fields, paradigms, or structural changes are added to the profile template or the design system:

1. Update `_template.md` with the new fields.
2. Update existing profiles to include the new fields.
3. Regenerate HTML sheets from the updated profiles.
4. This can be triggered manually or flagged as a batch TODO.

---

## File Naming Conventions

- **Profiles**: `kebab-case.md` (e.g., `faust.md`, `scheherazade.md`, `sei-shonagon.md`)
- **Sheets**: `kebab-case-sheet.html` (e.g., `faust-sheet.html`, `scheherazade-sheet.html`)
- **Portraits/Assets**: `kebab-case-portrait.jpg` (stored alongside the sheet in `sheets/`)

---

## Existing Content Locations

| Content | Location |
|---------|----------|
| Card catalog visualization | `cards/catalog.html` |
| Design system stylesheet | `styles/guttenberg.css` |
| Style guide reference | `styleguide.html` |
| Game design document | `DESIGN.md` |
| Playtests | `playtests/` |
| Scenarios | `scenarios/` |
| Session notes | `sessions/` |
