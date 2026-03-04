# The Prop House

A component library for the World of Guttenberg. Reusable parts extracted from completed sessions, organized by type, available for browsing or feeding back into the Session Builder.

## How It Works

1. Play a session (via the Session Builder or the standalone engines)
2. Run the **Disassembler** (`disassembler.md`) against the completed session
3. The Disassembler extracts reusable components and files them here
4. Browse the library when building future sessions
5. The Session Builder can reference Prop House components during configuration

## Folder Structure

```
prop-house/
├── README.md           ← you are here
├── disassembler.md     ← the extraction tool
├── characters/         ← character snapshots from sessions
├── settings/           ← locations, atmospheres, environments
├── complications/      ← plot complications that worked well
├── set-pieces/         ← memorable scenes or encounters
├── artifacts/          ← objects with narrative/mechanical weight
├── dialogue/           ← sharp exchanges worth studying
├── npcs/               ← interesting non-player characters
├── plot-devices/       ← twists, reveals, structural moves
└── moments/            ← emergent moments — the magic
```

## Using Components

**Browsing:** Read the .md files in any subfolder. Each component has a description, source attribution, tags, and reuse notes.

**In the Session Builder:** When the Session Builder asks about settings, complications, NPCs, artifacts, or set pieces, you can point it at Prop House files:

- "Use the setting from `prop-house/settings/the-flickering-fluorescent.md`"
- "Pull complications from `prop-house/complications/`"
- "Include the NPC from `prop-house/npcs/the-lamplighter-informant.md`"

**Seeding the library:** Run the Disassembler against existing sessions in `playtests/The Ginsfeld Sessions/` and `playtests/The Kade Sessions/` to build initial inventory.

## Quality Standard

Not everything goes in the Prop House. Components are extracted only if they'd genuinely improve a future session. The Disassembler applies a quality filter — if you wouldn't want to encounter it again, it doesn't get filed.
