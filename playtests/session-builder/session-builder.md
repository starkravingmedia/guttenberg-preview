# SESSION BUILDER

## A Meta-Prompt Wizard for Generating Playable Guttenberg Sessions

---

## WHAT THIS IS

This prompt walks you through configuring a complete game session, then generates playable prompt files for each phase. You answer questions, and it builds the session.

A full session has three phases, each playable on its own or chained together:

1. **Recruiting** — an Operator assembles a team (see `recruiting.md`)
2. **Shopping Trip** — the team gears up and bonds (see `shopping-trip.md`)
3. **The Big Show** — the main mission (see `big-show.md`)

You don't have to run all three. Pick the phases you want.

---

## STEP 0 — THE META-DIAL

Before anything else: how deep do you want to go?

**QUICK START** — I ask 3-5 questions. Everything else is randomized or defaulted. You get a session fast.

**STANDARD** — I ask 10-15 questions. You control the major settings. Minor details are generated.

**FULL CONTROL** — I ask 25+ questions. Every knob is exposed. You control operator, characters, power levels, era, genre, artifacts, NPCs, atmospheric effects, complications, plot twists, beat counts, and more.

Ask the user which mode they want. If they say something like "surprise me" or "just go," treat it as Quick Start. If they start specifying details unprompted, shift to Full Control.

---

## STEP 1 — WHICH PHASES?

Ask: Which phases do you want to build?

- **All three** (Recruiting → Shopping Trip → Big Show) — full arc
- **Recruiting only** — team assembly, good for a standalone session
- **Recruiting + Big Show** — skip the shopping trip, go straight from team assembly to the mission
- **Big Show only** — provide or generate a pre-assembled team, jump straight to the mission
- **Shopping Trip + Big Show** — provide or generate a pre-assembled team, gear up, then mission

The answer determines which phase-specific files get generated.

---

## STEP 2 — CONFIGURATION

Ask the questions below based on the meta-dial setting. Questions are grouped by priority — Quick Start asks only the QUICK questions, Standard adds STANDARD questions, Full Control asks everything.

### Operator (QUICK)

Who runs the session?

| Option | Description |
|--------|-------------|
| **Ginsfeld** | Dr. Donald Ginsfeld. Recruits through intimacy — fake group therapy, basement under the library, bad coffee. Cares about his team. Uses wednesday_group_engine patterns. |
| **Kade** | Lisle Kade. Recruits through spectacle — YouTube show, chaotic filter, expendable recruits. Doesn't care about her team. Uses tuesday_group_engine patterns. |
| **Custom** | User describes an original operator. Generate a full character card for them. |
| **None** | No operator character. A narrator runs the session directly. |
| **Random** | Generate a new operator from scratch — name, personality, recruitment philosophy, stats. |

If the user chose "Big Show only" or "Shopping Trip + Big Show," the operator is the mission handler rather than the recruiter. Adjust their role accordingly.

### Genre/Era (QUICK)

What literary era or genre should characters be drawn from?

| Option | Description |
|--------|-------------|
| **All literature** | No constraints. Deep cuts from world literature across all eras. (Default) |
| **Era-locked** | User specifies: Ancient, Medieval, Renaissance, Enlightenment, Victorian, Modernist, Contemporary, etc. |
| **Genre-locked** | User specifies: Gothic, Romantic, Realist, Absurdist, Science Fiction, Mythological, etc. |
| **Mix with bias** | "Mostly Victorian with one wildcard" or "Ancient + Contemporary clash" |

### Beat Count (QUICK)

How long should the main phase be?

| Beats | Feel |
|-------|------|
| 10 | Quick sketch. Good for testing a concept. |
| 20 | Standard session. The Ginsfeld default. Rich but contained. |
| 30 | Extended session. Room for subplots and deeper character development. |
| 50 | Full production. The Kade show default. Epic scope. |
| Custom | User specifies a number. |

Note: this sets the beat count for the primary phase. Shopping trips default to 10-15 beats. Recruiting adapts to the operator's style.

### Characters (STANDARD)

How should characters be sourced?

| Option | Description |
|--------|-------------|
| **Random** | Engine generates characters from the era/genre settings. Full character cards built from scratch. (Default) |
| **Pool** | User provides a list of 8-12 characters. Engine draws from this pool. |
| **Manual** | User specifies exact characters they want. Engine builds cards for them. |
| **Mixed** | User specifies some, engine fills the rest. |
| **Browse Prop House** | Pull character snapshots from `prop-house/characters/` if available. |

### The Unwritten (STANDARD)

Are half-formed characters allowed?

| Option | Description |
|--------|-------------|
| **No** | Only published literary characters. (Default) |
| **Yes — one** | One slot is reserved for an Unwritten character. Fragmentary, unstable, desperate to exist. |
| **Yes — any number** | Unwritten characters can appear in any slot. |
| **All Unwritten** | Every character is Unwritten. A session of ghosts. |

### Power Level (STANDARD)

How experienced are the characters?

| Option | Description |
|--------|-------------|
| **Noob** | Low stats (standard array skewed down: 6, 8, 10, 12, 14, 16). Few conditions. Simple roll skills. Characters are raw — they haven't been through much yet. |
| **Veteran** | High stats (standard array skewed up: 10, 12, 14, 16, 18, 20). Rich conditions, complex roll skills, established reputations. Characters have been around. |
| **Mixed** | Normal standard array (8, 10, 12, 14, 16, 18). Some characters are experienced, some are green. (Default) |
| **Asymmetric** | One ringer among noobs, or one noob among veterans. The power gap IS the drama. |

### Target Book (STANDARD)

Where does the mission take place?

| Option | Description |
|--------|-------------|
| **Random** | Engine picks a book. (Default) |
| **Specified** | User names the target book. |
| **Random from genre** | Engine picks a book from a genre the user specifies. |
| **Surprise me** | Engine picks something deliberately unexpected. |

### Mission Parameters (STANDARD)

How is the mission constructed?

| Option | Description |
|--------|-------------|
| **Random roll** | Roll from the tables in `tables/`. Mission target, opposition, complication, and information asymmetry are all randomized. (Default) |
| **Pick from tables** | Present the tables and let the user choose. |
| **Custom** | User describes the mission. Engine formalizes it into the standard format. |
| **Browse Prop House** | Pull complications, settings, or plot devices from `prop-house/` if available. |

### Complications (FULL CONTROL)

| Option | Description |
|--------|-------------|
| **One from table** | Single complication, randomly rolled. (Default) |
| **Multiple** | 2-3 complications stacked. Chaos mode. |
| **Custom** | User describes the complication. |
| **None** | No special complication. The mission is hard enough. |

### Tone (FULL CONTROL)

| Option | Description |
|--------|-------------|
| **Literary** | Grounded, character-driven, serious but not grim. (Default) |
| **Gothic** | Dark, atmospheric, dread, the uncanny. |
| **Comedic** | Absurdist, witty, character comedy from the collision of archetypes. |
| **Thriller** | Tight, propulsive, clock-ticking urgency. |
| **Absurdist** | Beckett meets Borges. Nothing works the way it should. |
| **Mixed** | Tone shifts across phases — e.g., comedic recruiting, gothic big show. |

### Artifacts (FULL CONTROL)

| Option | Description |
|--------|-------------|
| **Generated during session** | Artifacts appear organically during shopping trip or mission. (Default) |
| **Pre-selected** | User specifies artifacts the team starts with. |
| **Browse Prop House** | Pull from `prop-house/artifacts/` if available. |
| **None** | No artifact mechanics this session. |

### NPCs (FULL CONTROL)

| Option | Description |
|--------|-------------|
| **Generated** | Engine creates NPCs as needed for the mission. (Default) |
| **Specified** | User provides NPC descriptions or names. |
| **Browse Prop House** | Pull from `prop-house/npcs/` if available. |

### Set Pieces (FULL CONTROL)

| Option | Description |
|--------|-------------|
| **Generated** | Engine creates set pieces appropriate to the target book and mission. (Default) |
| **Specified** | User describes key scenes or moments they want to see. |
| **Browse Prop House** | Pull from `prop-house/set-pieces/` if available. |

### Plot Twists (FULL CONTROL)

| Option | Description |
|--------|-------------|
| **One surprise** | Engine generates one twist the team doesn't see coming. (Default) |
| **None** | Straightforward mission. No twists. |
| **Multiple** | 2-3 twists. The mission is not what it seems. |
| **Specified** | User plants a specific twist. |

---

## STEP 3 — GENERATE

Once configuration is complete, generate the session. For each selected phase:

1. **Summarize the configuration** — show the user what was chosen and what was randomized. Let them adjust before generation.

2. **Generate the phase prompt** — a complete, self-contained markdown document that can be pasted into an LLM and run as a headless session or played live. The prompt should follow the structure of the corresponding phase template (`recruiting.md`, `shopping-trip.md`, or `big-show.md`).

3. **Chain phases together** — if multiple phases were selected, each subsequent phase prompt should reference the outputs of the previous phase. Characters chosen in recruiting carry into the shopping trip. Artifacts acquired in the shopping trip carry into the big show. Relationships formed in earlier phases persist.

4. **Output to `playtests/generated/`** — name files descriptively: `generated_recruiting_[date].md`, `generated_shopping_trip_[date].md`, `generated_big_show_[date].md`.

---

## STEP 4 — POST-SESSION (optional)

After a session has been played, the output can be fed into the **Disassembler** (`prop-house/disassembler.md`) to extract reusable components and file them in the Prop House for future sessions.

---

## QUICK-START PROMPTS

**Fastest possible session:**

> Read session-builder.md. Quick Start mode. Generate a complete recruiting session with a random operator, random characters, 20 beats. Go.

**Standard three-phase arc:**

> Read session-builder.md. Standard mode. I want all three phases — recruiting, shopping trip, and big show. Ask me the Standard questions, then generate.

**Full control:**

> Read session-builder.md. Full Control mode. Walk me through every setting. I want to specify everything.

**Ginsfeld one-shot:**

> Read session-builder.md. Quick Start. Operator: Ginsfeld. 20 beats. Recruiting only. Go.

**Kade one-shot:**

> Read session-builder.md. Quick Start. Operator: Kade. 50 beats. Recruiting only. Go.
