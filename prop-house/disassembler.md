# THE DISASSEMBLER

## Extracting Reusable Components from Completed Sessions

---

## WHAT THIS IS

The Disassembler reads a completed session transcript and breaks it into reusable components, filing each one in the appropriate Prop House subfolder. It turns played sessions into a library of parts that can be browsed, referenced, or fed back into the Session Builder for future sessions.

---

## HOW TO USE

Paste the following into an LLM along with a completed session file:

> Read disassembler.md and the attached session file. Extract all reusable components and output them as individual markdown files, organized by the Prop House categories below.

Or, if running in a tool like Claude Code:

> Read the session file at [path]. Apply the disassembler. Write extracted components to the appropriate prop-house/ subfolders.

---

## EXTRACTION CATEGORIES

For each category, extract components that are **worth reusing** — not everything, just the good parts. Quality filter: would you want to encounter this again in a future session? Would it make a future session richer?

### 1. Characters (`prop-house/characters/`)

Extract character snapshots for characters who were interesting, surprising, or well-developed during the session. This is NOT a copy of the character card — it's a snapshot of who they became during play.

```markdown
# [CHARACTER NAME]

**Type:** Character Snapshot
**Source:** [session filename]
**Date extracted:** [date]
**Original source text:** [the literary work they come from]

## Who They Were
[1-2 sentences from their original card — the starting point]

## Who They Became
[2-3 sentences describing how they evolved during the session — what emerged, what surprised, what changed]

## Notable Moments
- [Moment 1: what happened, why it mattered]
- [Moment 2]

## Reuse Notes
[When would you want this character again? What kind of session would they be good for? What dynamics do they create?]

## Tags
[archetype], [era], [tone], [notable traits]
```

**Extract if:** The character surprised the simulation, had a memorable arc, or revealed an interesting dynamic worth reproducing.

**Don't extract:** Characters who were generic, flat, or didn't contribute anything distinctive.

### 2. Settings (`prop-house/settings/`)

Extract environments that worked well — places that felt alive, that exerted narrative pressure, that the characters responded to.

```markdown
# [SETTING NAME]

**Type:** Setting
**Source:** [session filename]
**Date extracted:** [date]

## Description
[3-5 sentences of sensory detail. What it looks like, sounds like, smells like, feels like to be there.]

## Narrative Function
[What role did this setting play? Recruiting backdrop? Shopping venue? Mission environment? What kind of scenes does it enable?]

## Tags
[indoor/outdoor], [tone], [era], [function]

## Usage Notes
[What worked about this setting? What kinds of scenes does it support? Any warnings about what it doesn't work for?]
```

### 3. Complications (`prop-house/complications/`)

Extract plot complications that created genuine tension, forced interesting choices, or produced unexpected consequences.

```markdown
# [COMPLICATION NAME]

**Type:** Complication
**Source:** [session filename]
**Date extracted:** [date]

## The Complication
[2-3 sentences describing what went wrong, what got complicated, what forced a choice]

## How It Played Out
[What happened when this complication hit the session? How did the characters respond? What did it reveal?]

## Tags
[mission/social/environmental], [severity: minor/major/catastrophic], [resolution type]

## Reuse Notes
[What makes this complication worth reusing? What kind of team does it test? What does it reveal about characters?]
```

### 4. Set Pieces (`prop-house/set-pieces/`)

Extract scenes or moments that were architecturally strong — well-designed encounters, memorable confrontations, or sequences that just worked.

```markdown
# [SET PIECE NAME]

**Type:** Set Piece
**Source:** [session filename]
**Date extracted:** [date]

## The Scene
[3-5 sentences describing what happened, where, and why it mattered]

## Mechanics
[How was it resolved? d20? Narrative? Thematic? What skills fired? What conditions activated?]

## Why It Worked
[What made this set piece land? Was it the character collision? The environment? The stakes? The resolution?]

## Tags
[combat/social/puzzle/moral], [tone], [scale: intimate/epic]

## Reuse Notes
[How could this set piece be adapted for a different session? What would need to change? What should stay the same?]
```

### 5. Artifacts (`prop-house/artifacts/`)

Extract objects that had narrative or mechanical weight — items that mattered, that changed hands, that altered outcomes.

```markdown
# [ARTIFACT NAME]

**Type:** Artifact
**Source:** [session filename]
**Date extracted:** [date]
**Provenance:** [where it came from — which book, which world]

## Description
[What is it? What does it look like? What does it feel like to hold?]

## Mechanical Effect
[What does it do when bound? What's the cost or risk?]

## Narrative Weight
[Why does it matter to the story? What did it mean to the character who carried it?]

## Tags
[type: weapon/tool/key/curiosity], [era], [power level]
```

### 6. Dialogue (`prop-house/dialogue/`)

Extract exchanges that were sharp, revealing, or tonally distinctive — conversations worth studying or echoing.

```markdown
# [DIALOGUE TITLE]

**Type:** Dialogue Exchange
**Source:** [session filename]
**Date extracted:** [date]
**Characters:** [who was involved]

## The Exchange
[Quote or close paraphrase of the dialogue — enough to capture the rhythm and content]

## Why It Matters
[What made this exchange work? What did it reveal? What dynamic did it crystallize?]

## Tags
[confrontation/bonding/negotiation/revelation], [tone], [character types involved]
```

### 7. NPCs (`prop-house/npcs/`)

Extract non-player characters who were interesting enough to encounter again.

```markdown
# [NPC NAME]

**Type:** NPC
**Source:** [session filename]
**Date extracted:** [date]
**Affiliation:** [organization or independent]

## Description
[Who are they? What do they want? How do they present?]

## Role
[What function did they serve in the session? Merchant? Informant? Obstacle? Wild card?]

## Tags
[role], [affiliation], [tone], [power level]

## Reuse Notes
[Where else could this NPC appear? What sessions would they fit into?]
```

### 8. Plot Devices (`prop-house/plot-devices/`)

Extract structural moves — twists, reveals, escalations, or narrative mechanics that changed the session's direction.

```markdown
# [PLOT DEVICE NAME]

**Type:** Plot Device
**Source:** [session filename]
**Date extracted:** [date]

## The Device
[What happened? How was it deployed? When did it fire?]

## Setup
[How was it foreshadowed? What clues existed before the reveal?]

## Impact
[What changed after this device fired? How did it reshape the session?]

## Tags
[twist/reveal/escalation/reversal], [timing: early/mid/late], [scope: personal/team/world]

## Reuse Notes
[Is this device reusable as-is, or does it need adaptation? What kind of session does it fit?]
```

### 9. Moments (`prop-house/moments/`)

Extract emergent moments — things that weren't planned, weren't designed, but happened because specific characters collided in a specific context. These are the magic.

```markdown
# [MOMENT TITLE]

**Type:** Emergent Moment
**Source:** [session filename]
**Date extracted:** [date]
**Characters:** [who was involved]

## What Happened
[3-5 sentences describing the moment]

## Why It Mattered
[What made this moment special? Was it the character collision? The timing? The context? The surprise?]

## Could It Be Reproduced?
[Is this moment repeatable with different characters, or was it unique to this specific combination? What conditions made it possible?]

## Tags
[emotional register], [character types], [phase where it occurred]
```

---

## EXTRACTION RULES

1. **Quality over quantity.** Not everything gets extracted. Only components that would genuinely improve a future session.
2. **Name things well.** Component names should be evocative and memorable — "The Flickering Fluorescent" not "Setting 3."
3. **Tag consistently.** Tags enable browsing and searching. Use lowercase, keep them concrete.
4. **Credit the source.** Every component tracks which session it came from.
5. **Note reusability.** Some components are directly reusable. Some need adaptation. Some are one-of-a-kind moments that can't be reproduced but are worth remembering. Be honest about which is which.
6. **File naming.** Use kebab-case: `the-flickering-fluorescent.md`, `suns-wukongs-circlet.md`, `the-vote-rig.md`.

---

## OUTPUT

After extraction, produce:

1. Individual .md files in the appropriate `prop-house/` subfolders
2. A summary of what was extracted:
   - Count by category
   - Highlights (the 2-3 most interesting extractions)
   - Anything from the session that was considered but NOT extracted, and why
