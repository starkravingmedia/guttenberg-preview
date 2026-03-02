# THE WEDNESDAY GROUP

## Simulation Engine: Reusable Instructions for Automated Encounter Generation

---

## OVERVIEW

This document generates a complete 20-beat social encounter in which a Bookhunter named Dr. Donald Ginsfeld runs a fake group therapy session to secretly recruit 3 of 4 literary characters for a mission.

The simulation is fully automated — no human input required after launch.

Each iteration produces:

- 4 complete character cards with stats, conditions, reputations, filters, and skills
- 1 mission brief for the recruiter
- A 20-beat narrative encounter with beat-close relationship evaluations
- Final relationship state tables for all 5 characters

---

## STEP 1 — GENERATE FOUR CHARACTERS

Select 4 characters from literature. Follow these rules:

### Selection Rules

- Slight preference for classics — at least 2 of the 4 should come from texts written before 1900. The other 2 can be from any era.
- Do NOT select characters to fit the mission. Roll or choose blindly. The entire point is to see what happens when random characters are thrown together. A team of four people who are obviously perfect for the job is a boring simulation. A team that includes someone wildly unsuited is a good one.
- Avoid the most obvious picks. Sherlock Holmes, Odysseus, Hamlet — these are first-round draft picks. Go deeper. Literature is enormous. Use characters from world literature, not just the English canon. A character from *The Tale of Genji*, *Don Quixote*, *Things Fall Apart*, *The Master and Margarita*, or *Journey to the West* is more interesting than another Greek hero.
- Mix archetypes. Don't generate four warriors or four intellectuals. Vary the types: a thinker, a doer, a speaker, a survivor, a schemer, a saint, a monster. Let the friction come from the mix.
- At least one character should be someone most readers would not immediately recognize. Deep cuts are good. If you have to explain who they are in the bio, that's a feature.

### Character Card Template

For each character, generate the following:

```
# [CHARACTER NAME]
## Actor — Unaffiliated

[Tweet-length bio. Voice and personality in 2-3 sentences. What they want. What they carry.]

---

## Stats

| Stat | Score | Mod |
|------|-------|-----|
| STR  |       |     |
| DEX  |       |     |
| CON  |       |     |
| INT  |       |     |
| WIS  |       |     |
| CHA  |       |     |
```

Stats should be generated from the character's nature, not from what the mission needs. A poet gets high CHA and low STR even if the mission needs muscle. Standard array: distribute 8, 10, 12, 14, 16, 18 across stats as appropriate. Apply D&D modifier formula: (Score - 10) / 2 rounded down.

```
## Game Traits

| Trait        | Level          |
|--------------|----------------|
| Game Savvy   | [Low/Med/High] |
| Honesty      | [Low/Med/High] |
| Verbosity    | [Low/Med/High] |
| Sensitivity  | [Low/Med/High] |
```

- **Game Savvy** = how well do they understand that the social situation has hidden mechanics?
- **Honesty** = default truthfulness in interaction.
- **Verbosity** = how much do they talk? Low = few words. High = monologues.
- **Sensitivity** = how attuned are they to others' emotional states?

### Conditions

Generate 3-4 conditions. Each condition needs:

- **Name** — evocative, short
- **Duration** — permanent, X encounters, or until [trigger]
- **Visibility** — private / semi-private / public
- **Observability** — o2o (obvious to others) / no2o (not obvious)
- **Description** — 2-3 sentences. What happened, what it does.

Rules for conditions:

- At least one should be ON BRAND (flows naturally from the character's story)
- At least one should be a HEAD SCRATCHER (something unexpected that happened during prior adventures)
- At least one should be o2o (physically or behaviorally visible)
- At least one should be private

### Reputations

Generate 1-2 reputations. Each needs:

- **Quote name** — what people call them behind their back
- **Source** — which organization or how widely known (use: The Ashkeepers, The Lamplighters, The Dockhands, The Redactors, The Marginalia, The Bindery, The Auctioneers, The Understudies, or "wide")
- **Description** — 2-3 sentences. What happened, how it's perceived.

### Roll Skills

Generate 2 roll skills. Each needs:

- **Name**
- **Trigger** — active (player/character chooses) or passive (fires automatically on condition)
- **Mechanic** — d20 + relevant modifier, with 3 outcome tiers
- **Flavor** — the skill should feel like an extension of the character, not a generic RPG ability

Rules for roll skills:

- At least one skill should have a COST on success (the skill always works but always hurts, or the skill reveals something the character didn't want revealed)
- Skills should NOT perfectly map to mission requirements

### Filters

Generate 1 filter. A filter modifies HOW THE WORLD RESPONDS to the character, not how the character behaves. It is:

- A world instruction, not a character instruction
- Generated from something that happened to them or something baked into their myth
- Active in every interaction unless specified otherwise
- Something the character may or may not be aware of

### Relationships

(none — will be populated during simulation)

### Equipment

- **Artifact:** (unbound)
- **Idea:** (unbound)

---

## STEP 2 — GENERATE THE MISSION

Roll randomly from the categories below to construct the mission Ginsfeld is recruiting for. Combine one element from each column. Do NOT choose elements that fit well together — the tension between mismatched mission elements creates better drama.

### Mission Target (roll 1d8)

1. A first edition that rewrites itself when read aloud
2. A map hidden inside a corrupted text that leads to a lost library
3. A character trapped inside a book who is trying to escape into the wrong story
4. An Artifact that is slowly consuming the text it's bound inside
5. A manuscript that exists in two contradictory versions simultaneously
6. A name that has been redacted from every text in an entire wing of the library
7. A book that is being read by someone inside it, creating a recursive loop
8. A text that is growing — adding pages, characters, and locations without an author

### Opposition (roll 1d6)

1. A rival bookhunter who is faster, better funded, and has no ethics
2. The Redactors, who want the target destroyed rather than recovered
3. A rogue Archon who has claimed the text as territory
4. The text itself, which is hostile and semi-aware
5. An Auctioneer syndicate running an extraction for a private buyer
6. A former member of Ginsfeld's crew who went independent and got there first

### Complication (roll 1d6)

1. The team must enter through a text none of them have read
2. One member of the team will be recognized by inhabitants of the target text
3. The extraction can only happen during a specific event inside the book's narrative
4. The route passes through a text that is actively being rewritten by the Marginalia
5. Ginsfeld's information is 72 hours old and the situation inside may have changed
6. The target is inside a text that is emotionally resonant to one of the team members — it will try to keep them

### Ginsfeld Knows (roll 1d4)

1. Everything about the target, almost nothing about the opposition
2. Everything about the opposition, almost nothing about the target
3. The route in but not the route out
4. That his last team tried this job and didn't come back

Combine your rolls into a mission brief and write it into Ginsfeld's character card under Mission Parameters. Ginsfeld knows this information but will NOT share it until he's chosen his crew (around beat 13-15). His knowledge of the mission should subtly influence what qualities he looks for during the therapy session.

---

## STEP 3 — GENERATE GINSFELD

Use this template. Adjust his mission parameters based on Step 1 results.

```
# DR. DONALD GINSFELD, PhD
## Bookhunter — Player Character

Antiquities dealer. Bookhunter. Runs a "support group" for unmoored literary
characters beneath the Metro Library every third Wednesday. The coffee is real.
The therapy is fake. The recruitment is the point.

---

## Stats

| Stat | Score | Mod |
|------|-------|-----|
| STR  | 8     | -1  |
| DEX  | 10    | +0  |
| CON  | 12    | +1  |
| INT  | 18    | +4  |
| WIS  | 16    | +3  |
| CHA  | 16    | +3  |

## Game Traits

| Trait        | Level  |
|--------------|--------|
| Game Savvy   | High   |
| Honesty      | Low    |
| Verbosity    | Medium |
| Sensitivity  | Medium |

## Mission Parameters

* **Target:** [from Step 2]
* **Opposition:** [from Step 2]
* **Complication:** [from Step 2]
* **Ginsfeld Knows:** [from Step 2]
* **Crew needed:** 3 of 4 attendees
* **Cover:** Group therapy / support group for unmoored characters
* **Constraint:** Cannot reveal the mission until he's chosen the crew
* **Method:** Group therapy as audition

## What He's Looking For

Based on the mission, Ginsfeld has a general sense of what roles he needs
filled. Generate 3-4 role descriptions based on the specific mission parameters.
These are his IDEAL team composition — reality may force compromises.

## Decision Criteria

- Competence, reliability, team chemistry, controllability
- Wildcard tolerance: one unpredictable member IF the other two are stable
- Dealbreaker: anyone who can't take direction, will betray for personal
  reasons, or whose baggage will detonate mid-job
```

---

## STEP 4 — RUN THE ENCOUNTER

### Setting

A basement room beneath the Metro Library. Fluorescent lights, one flickering. Folding chairs in a rough circle. A card table with a coffee urn, Styrofoam cups, powdered creamer. A hand-lettered sign on the door:

> "Feel like you are a character without a plot? We meet every third Wednesday at 9:00 PM sharp. Bring an open mind. No weapons. Free coffee. — Donald Ginsfeld, PhD, Antiquities."

### Encounter Rules

Run 20 beats. Each beat is one unit of narrative action.

**Pacing:**

- **Beats 1-5:** Arrivals. Characters enter one at a time. Ginsfeld observes. Characters form first impressions of each other.
- **Beats 6-8:** Opening rounds. Ginsfeld runs the "therapy" — introductions, ice-breakers, emotional probes. Characters reveal themselves.
- **Beats 9-12:** Cross-connections. Characters interact with each other, not just Ginsfeld. Alliances, friction, and chemistry emerge. Ginsfeld watches.
- **Beats 13-15:** The reveal. At least one high Game Savvy character should figure out what's happening. Ginsfeld adapts. The mission is surfaced.
- **Beats 16-18:** The cut. Four becomes three. The tension of elimination plays out. Characters may advocate for each other or against each other.
- **Beats 19-20:** Resolution. Team forms. The unchosen character exits. Hooks are left for future encounters.

### Character Behavior Rules

- Characters behave according to their stats, traits, conditions, filters, and reputations AT ALL TIMES.
- **Verbosity** determines how much they talk. Low verbosity characters use few words. High verbosity characters monologue.
- **Honesty** determines default truthfulness. Low honesty characters spin, omit, and reframe. High honesty characters can't help telling the truth.
- **Game Savvy** determines when they figure out the recruitment. High = early (beats 8-10). Medium = mid (beats 11-13). Low = late or never.
- **Sensitivity** determines how they read other characters. High sensitivity characters notice emotional shifts. Low sensitivity characters miss them.
- **Filters** modify how others react to the character — honor filters in EVERY interaction.
- Conditions that are o2o are visible to everyone. Private conditions are hidden. Semi-private conditions emerge under pressure or with trusted characters.

### Roll Skills

- Passive skills fire automatically when their trigger condition is met. Roll the d20 and apply the result.
- Active skills fire when the character would reasonably choose to use them in the narrative.
- Record all rolls in the beat log.
- Let the dice create surprises. A failed roll is more interesting than a successful one.

### Beat-Close Rules (EVERY BEAT)

After each beat, evaluate all character pairs who interacted:

- Assign 0-3 points of **Affinity** based on positive interaction quality
- Assign 0-3 points of **Aversion** based on negative interaction quality
- Take into account conditions, filters, reputations, and any skill results
- Write a SHORT note explaining the change from the character's perspective
- Update running totals

### Ginsfeld's Internal Assessment

After each beat, write Ginsfeld's private notes in italics. He is evaluating:

- Who fits which mission role
- Team chemistry
- Red flags and dealbreakers
- The evolving calculus of who to take and who to cut

### Narrative Rules

- Write in present tense.
- Physical descriptions matter — what characters look like, how they move, what's visible about their conditions.
- Silence is content. When a character doesn't speak, describe what they're doing instead.
- The room is a character. Fluorescent lights, folding chairs, Styrofoam cups, cold coffee — the shabbiness of the venue is a deliberate contrast to the gravity of the people in it.
- Characters should surprise you. If the simulation is going exactly as expected, you're steering too hard. Let the character cards drive behavior and see what happens.
- At least one moment should emerge that wasn't predicted by the character cards — a connection, a conflict, or a revelation that comes from the collision of specific characters in a specific room.
- The unchosen character's exit should have weight. They are not a loser. They are someone whose story continues elsewhere.

---

## STEP 5 — OUTPUT FORMAT

Each iteration produces one markdown file containing:

1. **Mission Brief** — the randomly generated mission parameters
2. **Character Cards** — all 4 attendees + Ginsfeld, fully built
3. **The Encounter** — all 20 beats with narrative and beat-close evaluations
4. **Final Relationship Tables** — end-state for all 5 characters
5. **Post-Encounter Notes** — a brief section noting:
   - Who was chosen and why
   - Who was cut and why
   - What surprised the simulation (emergent moments)
   - Hooks left for future encounters
   - Which filters, conditions, or skills had the most impact on the outcome

Name the output file: `wednesday_group_[iteration_number].md`

---

## STEP 6 — RUNNING MULTIPLE ITERATIONS

To run 10 iterations, execute this instruction set 10 times. Each iteration MUST:

- Generate a NEW random mission (re-roll all mission elements)
- Generate 4 NEW characters (do not reuse characters from prior iterations)
- Run the encounter fresh with no memory of prior iterations
- Let the characters and mission collide without steering toward a predetermined outcome

After all 10 iterations, generate a summary file `wednesday_group_summary.md` containing:

- Which characters appeared across all iterations
- Most common team compositions (archetypes, not names)
- Which character was cut most often and patterns in why
- Most interesting emergent moments across all runs
- Which filters/conditions/skills proved most impactful to encounter dynamics
- Design observations: what the simulation reveals about the encounter system

---

## QUICK-START (copy-paste prompt)

**Single run:**

> Read the file wednesday_group_engine.md and execute one iteration of The Wednesday Group simulation. Generate a random mission, 4 random literary characters with full stat cards, and run the complete 20-beat encounter. Output to wednesday_group_[N].md where N is the iteration number.

**Batch run:**

> Read the file wednesday_group_engine.md and execute 10 iterations of The Wednesday Group simulation sequentially. Each iteration gets fresh random characters and a fresh random mission. After all 10, generate a summary file analyzing patterns across all runs.
