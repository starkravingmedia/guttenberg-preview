# THE TUESDAY GROUP

## Simulation Engine: Reusable Instructions for Automated Opposition Encounter Generation

---

## OVERVIEW

This document generates the opposition side of a mission encounter. A bookhunter named Lisle Kade uses a chaotic YouTube/Zoom show called "What's Your Story?" as a filter to identify unmoored literary characters, then collects them and briefs them at a location called the Factory.

This is the mirror engine to **The Wednesday Group** (`wednesday_group_engine.md`). Where Ginsfeld recruits through intimacy, Kade recruits through spectacle. Where Ginsfeld cares about his team, Kade doesn't. Where Ginsfeld's cut character gets a powerful exit, Kade's cut characters just leave.

The simulation is fully automated — no human input required after launch.

Each iteration produces:

- 4+ literary character cards with full stats, conditions, reputations, filters, and skills
- A roster of muggle callers (texture and occasional memorable standouts)
- A 50-beat show simulation (montage + key beats) with Reddit interstitials
- A Factory briefing scene (beats scale with headcount)
- A departure scene
- Dual-track evaluations: character relationships AND Kade's operational assessment
- Final relationship state tables and post-encounter analysis

---

## OPERATING MODES

This engine runs in three modes. Choose one before starting.

### Mode 1 — REACTIVE (primary)

Read a completed Wednesday Group file (`wednesday_group_[N].md`). Use the SAME mission. Kade is pursuing the same target from the opposing side. Her knowledge and objectives are derived from the Wednesday Group's opposition brief. The character who was CUT from the Wednesday Group SHOULD appear as one of the literary characters on the show.

### Mode 2 — STANDALONE

Roll a fresh mission using the random tables in Step 2. Kade is the primary operator, not the opposition — she's running her own job. No Wednesday Group input required.

### Mode 3 — SHARED MISSION

Both engines share a mission brief provided externally. The Tuesday Group generates its team against the shared brief independently.

---

## STEP 1 — GENERATE LITERARY CHARACTERS

Generate a minimum of 4 literary characters who will appear on the show across its 50-beat run. In reactive mode, one of these MUST be the cut character from the Wednesday Group input.

### Selection Rules

- Same diversity requirements as the Wednesday Group engine: at least 2 of the characters should come from texts written before 1900. The others can be from any era.
- Do NOT select characters to fit the mission. The show is a chaotic filter, not a targeted recruitment drive. Characters appear because they heard a rumor that "What's Your Story?" is a way back — some kind of nexus — not because they're suited for Kade's job.
- Avoid the most obvious picks. Go deep into world literature. Characters from *The Tale of Genji*, *Things Fall Apart*, *The Master and Margarita*, *Journey to the West*, *One Thousand and One Nights*, *The Mahabharata*, or *Don Quixote* are more interesting than another Greek hero.
- Mix archetypes. Vary the types: a thinker, a doer, a speaker, a survivor, a schemer, a saint, a monster. Let the friction come from the mix.
- At least one character should be someone most readers would not immediately recognize.
- **Morally mixed.** The show attracts all kinds — the lost, the desperate, the dangerous, the genuinely good. Some characters Kade collects will be sympathetic. Some will be predatory. Some will be broken. Don't bias toward heroes or villains. Let the pool be what it is.

### Character Card Template

Use the identical format from the Wednesday Group engine. Full Ginsfeld-era character cards for every literary character:

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

Stats should be generated from the character's nature, not from what the mission needs. Standard array: distribute 8, 10, 12, 14, 16, 18 across stats as appropriate. Apply D&D modifier formula: (Score - 10) / 2 rounded down.

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

### Mode 1 — Reactive

Read the Wednesday Group output file. Extract the mission brief. Kade is pursuing the **same target** for different reasons:

- **Ginsfeld's mission** is typically recovery, stabilization, or rescue.
- **Kade's mission** is exploitation, extraction for profit, or weaponization of the same situation.

Rewrite the mission brief from Kade's perspective. What does she want from the same target? What does she know that Ginsfeld doesn't? What doesn't she know that he does? The information asymmetry between the two operators is part of the drama.

### Mode 2 — Standalone

Roll randomly from the tables below. These are the same tables as the Wednesday Group engine.

#### Mission Target (roll 1d8)

1. A first edition that rewrites itself when read aloud
2. A map hidden inside a corrupted text that leads to a lost library
3. A character trapped inside a book who is trying to escape into the wrong story
4. An Artifact that is slowly consuming the text it's bound inside
5. A manuscript that exists in two contradictory versions simultaneously
6. A name that has been redacted from every text in an entire wing of the library
7. A book that is being read by someone inside it, creating a recursive loop
8. A text that is growing — adding pages, characters, and locations without an author

#### Opposition (roll 1d6)

1. A rival bookhunter operating with more caution and better intelligence (i.e., someone like Ginsfeld)
2. The Redactors, who want the target destroyed rather than recovered
3. A rogue Archon who has claimed the text as territory
4. The text itself, which is hostile and semi-aware
5. An Auctioneer syndicate running an extraction for a private buyer
6. A former member of Kade's crew who survived a previous mission and holds a grudge

#### Complication (roll 1d6)

1. The team must enter through a text none of them have read
2. One member of the team will be recognized by inhabitants of the target text
3. The extraction can only happen during a specific event inside the book's narrative
4. The route passes through a text that is actively being rewritten by the Marginalia
5. Kade's information is second-hand and the source may have lied
6. The target is inside a text that is emotionally resonant to one of the team members — it will try to keep them

#### Kade Knows (roll 1d4)

1. Everything about the target, almost nothing about the opposition
2. Everything about the opposition, almost nothing about the target
3. The route in but not the route out
4. That her last team tried this job and didn't come back (this does not bother her)

### Mode 3 — Shared Mission

Use the externally provided mission brief. Rewrite it from Kade's perspective — same target, different motive.

---

## STEP 3 — GENERATE KADE (fixed character)

Kade is a permanent character. Use this card. Adjust Mission Parameters based on Step 2 results.

```
# LISLE KADE
## Bookhunter — Opposition Operator

Faster than you. Better funded than you. Unencumbered by the dead weight of
ethics. Kade doesn't rescue, stabilize, or preserve — she extracts, exploits,
and moves on. She runs a YouTube show as a recruitment filter because it's
cheap, it's scalable, and if the recruits don't come back, there are always
more where they came from. She has never appeared on camera. She has never
needed to.

---

## Stats

| Stat | Score | Mod |
|------|-------|-----|
| STR  | 10    | +0  |
| DEX  | 14    | +2  |
| CON  | 12    | +1  |
| INT  | 18    | +4  |
| WIS  | 16    | +3  |
| CHA  | 8     | -1  |

## Game Traits

| Trait        | Level  |
|--------------|--------|
| Game Savvy   | High   |
| Honesty      | Low    |
| Verbosity    | Low    |
| Sensitivity  | Low    |

## Mission Parameters

* **Target:** [from Step 2]
* **Kade's Objective:** [from Step 2 — exploitation, weaponization, or extraction for profit]
* **Opposition:** [from Step 2]
* **Complication:** [from Step 2]
* **Kade Knows:** [from Step 2]
* **Crew needed:** 3
* **Recruitment method:** "What's Your Story?" show as filter → Factory briefing
* **Constraint:** Recruits are expendable. Mission success matters. Personnel do not.
* **Method:** Observe, identify, collect, brief, deploy

## Assessment Metrics (tracked per character)

For each literary character Kade identifies, she privately rates:

* **Expendability** — How much does she care if they don't come back? (Low = valuable asset, Medium = useful but replaceable, High = cannon fodder)
* **Obedience** — Will they follow orders? (Low = independent/dangerous, Medium = negotiable, High = compliant)
* **Capability** — Can they do the job? (Low = liability, Medium = adequate, High = genuinely dangerous)

## Decision Criteria

- Speed over quality. She needs bodies in the field, not a dream team.
- No wildcard tolerance. Unpredictable recruits are liabilities, not assets.
- No concern for team chemistry. They don't need to like each other. They need to go in and get the thing.
- If a recruit asks what they'll get: Kade asks what they want, then implies it's possible. Maybe. But only if they go. She does not intend to deliver.
- Dealbreaker: anyone who might refuse to go, or who might compromise the operation by acting on personal motives inside the text. Kade doesn't care about betrayal AFTER the mission. She cares about obedience DURING it.

## What She's NOT Looking For

Kade does not think in terms of roles (Persuader, Shield, Operator) the way Ginsfeld does. She thinks in terms of capacity:
- Can they get in?
- Can they survive long enough to be useful?
- Can they carry something out?

She doesn't build teams. She assembles disposable task forces.
```

---

## STEP 4 — GENERATE DANNY (flavor only)

Danny is the host of "What's Your Story?" He does not have a character card. He is atmosphere.

### Danny Profile

**The Dan-Man.** Danny Dan-Man. The Danster. A perpetually upbeat Zoom host with the energy of a morning radio DJ who knows, somewhere behind the smile, that his career peaked in 2019 and the only reason he still has a show is that something very frightening is standing behind the camera.

Danny is terrified of Kade. He hides it behind banter, catchphrases, and the manic energy of a man who never stops talking because silence is when she gives him instructions. When Kade feeds him a question through his earpiece, his demeanor shifts — the question doesn't match his personality and the audience can tell. His eyes go to a spot just off-camera. His smile tightens. He asks the question in a voice that isn't quite his.

The internet has noticed. There are subreddits:

- **r/isDannyAHostage** — Conspiracy theories about Danny's visible discomfort. Screen grabs of the moments his eyes flick off-camera. Timestamped compilations of "Danny's weird voice" when he asks certain questions. Split between people who think he's being controlled and people who think it's a bit.
- **r/FreeTheDan-Man** — More sincere. People who genuinely believe Danny is in trouble. Fundraiser attempts. One user claims to have tracked the show's IP address to a building that doesn't appear on Google Maps.
- **r/MyStoryIsThatIGotToMeetDan-ManAndIWokeUpInCanterburryWTF** — The strangest one. Former guests who got collected by Kade's agents after the show and woke up somewhere else. Their posts are confused, fragmented, and occasionally terrifying. Most people think it's an ARG. It isn't.

Danny's key traits for the simulation:

- Happy-go-lucky DJ energy at baseline
- Visible nervousness when Kade feeds him instructions
- Genuinely likes most of his guests and feels guilty about what happens to some of them
- His witty sign-off comments are his only real creative expression — they're often sharper and more perceptive than he seems capable of
- He has been doing this for two years and has never met Kade in person

---

## STEP 5 — GENERATE MUGGLES

The show is mostly regular internet callers. Generate a pool of **8-12 muggles** for the simulation to draw from. Each muggle gets a mini-profile:

```
**[NAME]** — [One sentence: who they are, what their story is about, how they come across on camera.]
```

Most muggles are texture — attention seekers, oddballs, bored people, the lonely, the self-promoting. They cycle through the show and get voted off.

**Occasionally, generate a memorable muggle** — someone unexpectedly compelling who makes the audience (and Kade) wonder if they're actually a literary character. Give these muggles a 2-3 sentence profile instead. They might survive several rounds on genuine charisma before eventually being voted off. They are NOT literary characters. They're just interesting humans. The ambiguity is the point.

Rules for muggles:

- They should feel like real internet callers. Specific, weird, human.
- They do not get character cards, stats, or mechanics.
- They can interact with literary characters during their shared screen time — these interactions sometimes produce unexpectedly interesting moments.
- The internet audience votes based on entertainment value, not literary merit. A muggle with a funny story can survive longer than a literary character with a boring one.

---

## STEP 6 — RUN THE SHOW (50 beats)

### Setting

A Zoom call. Five faces in a grid. A chat sidebar scrolling too fast to read. A viewer count in the corner that fluctuates between 400 and 12,000 depending on who's on. Danny in the center square, ring light reflecting in his eyes, headphones slightly too large for his head. A backdrop that says "WHAT'S YOUR STORY?" in hand-painted letters that someone clearly made at 3am.

The show runs every Tuesday. All day. It never stops. People call in, tell their story, get judged, get voted off or survive. New callers replace the fallen. It's a perpetual machine of human spectacle, and somewhere offscreen, Lisle Kade watches with the patience of a spider who built her web across the only door in the room.

### Show Format

Each round follows this cycle:

1. **Story time:** Each of the 5 current guests tells their story — one minute, uninterrupted. The story can be about themselves, about anything. The only rule is the minute.
2. **Reactions:** After each story, the other 4 guests react. Each can make ONE statement or ask ONE question. The storyteller must answer questions.
3. **Danny reacts last.** Usually a witty comment. Sometimes — when Kade is in his ear — a question that doesn't fit.
4. **The vote:** After all 5 guests have told their stories and been reacted to, the internet votes on who to eliminate. The lowest vote-getter is dropped from the call. A new caller takes the empty seat.

### Show Dynamics

The format creates natural game theory tensions:

- **Old guard** (guests who've survived multiple rounds) protect their position by making newcomers look foolish — interrupting reactions, asking gotcha questions, forming voting blocs with other survivors.
- **Young turks** (new callers) try to gang up on the longest-surviving guest to eliminate a perceived threat.
- **Everyone plays to the audience.** The internet votes on entertainment value. Being right matters less than being watchable.
- **Literary characters have a natural advantage** they don't understand — their stories are better because their stories are REAL (or real in the way that fiction is real). A character from a great novel telling their actual life story is inherently more compelling than a muggle describing their commute. The audience doesn't know why these guests are so magnetic. They just know they want them to stay.

### Kade's Filter Process

Kade watches from offscreen. She is looking for:

- **Characters, not muggles.** Literary characters who ended up on the show because they heard a rumor it was "a way back" — some kind of nexus. They don't know how it works. They just showed up.
- **Signs of fictionality.** Details in a story that are too perfect, too structured, too literary. A man describing his childhood and it sounds like a novel because it IS a novel. A woman talking about her "husband" and the phrasing echoes a text Kade recognizes.
- **Reactions to Danny's planted questions.** When Kade feeds Danny a diagnostic question — something that would mean nothing to a muggle but everything to a character — she watches the reaction. A flinch, a recognition, a moment of "how did he know that?" confirms the target.

When Kade identifies a literary character she wants to keep on the show, she rigs the internet vote. The character survives regardless of audience preference. The engine should note when this happens: `[VOTE RIGGED — Kade protects [NAME]]`.

When Kade has accumulated **3 or more** literary characters (on the show simultaneously or identified across the session), she triggers a **technical malfunction** and shuts the Zoom down.

### Beat Pacing

Run 50 beats. Each beat is one unit of narrative action — a round of the show, a transition, or a significant moment.

**Montage beats (muggle-heavy rounds):**
- 2-3 sentences per round. Name, story in one line, how long they lasted, why they got voted off.
- Group multiple rounds into a single montage beat when nothing significant happens.
- Include one detail per montage that gives the show texture — a chat comment, an audience reaction, Danny's sign-off line.

**Memorable muggle beats:**
- When a muggle is unexpectedly compelling, expand the beat to a short paragraph. Their story, how the room reacts, whether Kade pauses to look more closely before dismissing them.

**Literary character arrival beats (FULL DETAIL):**
- When a literary character calls in, expand to a full narrative beat. Include:
  - How they appear on camera (o2o conditions are visible even through Zoom)
  - Their one-minute story (what they say, how they say it, what they leave out)
  - Each guest's reaction (statement or question + the character's answer)
  - Danny's reaction (is Kade in his ear?)
  - The internet's reaction (chat messages, viewer count shifts)
  - Kade's offscreen assessment (first read on Expendability, Obedience, Capability)

**Kade-prompted beats (FULL DETAIL):**
- When Kade feeds Danny a question, expand to full detail. Include:
  - Danny's shift in demeanor — the tightening, the eyes going off-camera
  - The question itself (diagnostic — designed to identify a character or probe a specific trait)
  - The target's reaction
  - The audience's reaction (this is where the subreddits notice something is wrong)

**Vote beats:**
- After each round of stories, note who gets voted off. If Kade rigs the vote, note it: `[VOTE RIGGED — Kade protects [NAME]]`
- Describe the eliminated caller's exit briefly — some leave gracefully, some rage, some just disconnect.

**Reddit interstitials:**
- Between montage sections (every 8-12 beats), include a short block of subreddit posts. Format:

```
---
**r/isDannyAHostage**

u/zoom_detective_99: Did anyone else see Danny's face at 2:47:33? He
looked like someone just told him his dog died. Then he asked that question
about "what would you sacrifice to go home" and his voice did THE THING.

u/itsjustabitsurely: You guys are insane. He's doing a bit. It's content.

u/notabot_justconcerned: I've been tracking his eye movements for six
months. He looks off-camera to the same spot every single time before he
asks one of The Questions. There's someone there.
---
```

- The subreddit posts should get more specific and more alarmed as the show progresses.
- Mix r/isDannyAHostage (conspiracy analysis), r/FreeTheDan-Man (genuine concern), and r/MyStoryIsThatIGotToMeetDan-ManAndIWokeUpInCanterburryWTF (confused former guests) as appropriate.
- Tone: internet-speak, conspiracy theories, genuine confusion, occasional eerie accuracy that nobody takes seriously.

### Character Behavior Rules

Same as the Wednesday Group engine:

- Characters behave according to their stats, traits, conditions, filters, and reputations AT ALL TIMES.
- **Verbosity** determines how much they talk during their minute and reactions. Low = terse, uncomfortable on camera. High = born for this format.
- **Honesty** determines whether their "story" is true. Low honesty characters spin. High honesty characters tell the raw truth, which is often stranger and more compelling than fiction.
- **Game Savvy** determines whether they understand the show's hidden mechanics — and, eventually, whether they sense Kade's presence. High = they know something is off about Danny's questions. Low = they think this is just a weird internet show.
- **Sensitivity** determines how they read other guests. High sensitivity characters notice when another guest is also a literary character. Low sensitivity characters don't.
- **Filters** modify how others react — honor filters in EVERY interaction, including through Zoom. A character whose filter makes people remember their losses will affect the entire call.
- Conditions that are o2o are visible on camera. Private conditions are hidden. Semi-private conditions might surface under the pressure of the show format.

### Roll Skills

- Passive skills fire automatically when their trigger condition is met. Roll the d20 and apply the result.
- Active skills fire when the character would reasonably choose to use them during the show.
- Record all rolls in the beat log.
- Let the dice create surprises. A failed roll is more interesting than a successful one.
- NOTE: Skills may fire differently in the show context than in a room. A persuasion skill works through a camera. A physical skill might be irrelevant. The show format changes what's useful.

### Dual-Track Beat-Close Rules (EVERY KEY BEAT)

After each key beat (literary character arrival, Kade-prompted moment, significant interaction), evaluate on two tracks:

**Track 1 — Character Relationships:**
- Assign 0-3 points of **Affinity** based on positive interaction quality
- Assign 0-3 points of **Aversion** based on negative interaction quality
- Take into account conditions, filters, reputations, and any skill results
- Write a SHORT note explaining the change from the character's perspective
- Update running totals
- NOTE: Relationships form even through Zoom. The format compresses intimacy — you're sharing your story with strangers, and the reactions reveal character fast.

**Track 2 — Kade's Assessment:**
- For each literary character, update Kade's private ratings:
  - **Expendability:** Low / Medium / High
  - **Obedience:** Low / Medium / High
  - **Capability:** Low / Medium / High
- Write Kade's assessment in a cold, operational voice. No italics (that's Ginsfeld's style). Kade's notes are terse, clinical, and devoid of sentiment. She doesn't evaluate team chemistry. She evaluates utility.

---

## STEP 7 — THE SHUTDOWN

When Kade has accumulated enough literary characters (minimum 3), she kills the show. Run this as a single transition beat:

- The Zoom call glitches. Freezes. Danny's face pixelates. The viewer count drops to zero.
- From the audience's perspective: technical malfunction. The show has crashed before. It happens.
- Danny's reaction: a moment of confusion, then something that looks like relief, then something that looks like fear. He knows what happens next.
- The literary characters' screens go dark. Then a message appears — not from Danny, not from the show's interface. A text message, or an email, or a notification from an app they don't remember installing. It contains an address.
- The muggles who were still on the call just see a disconnect. They try to rejoin. They can't. They post about it on r/isDannyAHostage.

Include a Reddit interstitial after the shutdown — the subreddits reacting in real time to the show going dark.

---

## STEP 8 — THE FACTORY (beats scale with headcount)

### Setting

The Factory is wherever Kade operates. Not literally a factory — but it has that energy. A repurposed industrial space, or a storage facility, or the back office of a logistics company that doesn't appear to ship anything. Fluorescent lighting that makes everyone look slightly worse than they are. No coffee. No chairs arranged in a circle. Folding tables. The smell of concrete and printer toner.

The characters arrive — collected by Kade's agents (the "superhuman crew"). They didn't choose to come here. The address brought them. The agents made sure they arrived. The door they came through doesn't appear to lead back to where they came from.

### Factory Structure

Kade appears in person for the first time. Describe her:

- Not what they expected. Smaller than her reputation. Still. Quiet in a way that makes other people's quiet look like noise.
- She doesn't introduce herself. She doesn't ask their names. She already knows.
- She smokes. Not visibly — the smell is on her, in the room, embedded in the concrete. The smoking-man vibe is atmospheric, not literal. Something about her suggests combustion held in check.

**Factory beats:** Run approximately 2 beats per character collected. The Factory is fast. Kade doesn't do therapy.

**Beat structure:**

1. **The Brief.** Kade explains the mission. Terse. No context they don't need. No motivation beyond the task.
   - She does NOT ask if they want to go.
   - She tells them what the job is and watches their faces.

2. **The Ask.** If a character asks "what do I get out of this?" — and at least one will — Kade says: "What do you want?"
   - Whatever they say, she responds as if it's possible. Maybe. But there's no chance if they don't go.
   - She does not intend to deliver. The promise is the recruitment tool. The promise is always a lie.
   - Not a lot of agents come back from Kade's missions. She's found a cheap way to recruit, so what does it matter?

3. **The Cut.** If Kade collected more than 3 characters, she cuts to 3 here.
   - The cut is fast. No evaluation speech. No "here's why I'm not taking you."
   - She looks at the ones she doesn't want and says something like: "You three. Not you." Or she doesn't address the cut ones at all — she speaks only to the ones she's keeping and the others understand.
   - The cut characters leave. No exit speech. No ceremony. No one advocates for them. No one defends them. The contrast with Gatsby's exit from the Wednesday Group should be stark and deliberate.
   - If a cut character resists or argues, Kade's agents handle it. Kade doesn't engage.

4. **The Departure.** The team leaves for the mission. No warmth. No last coffee. No team-building moment. They go because they were told to go and because they want something Kade implied she could give them.

### Factory Beat-Close Rules

Same dual-track evaluation:

**Track 1 — Character Relationships:**
- Characters who were on the show together already have relationship history. Those bonds carry into the Factory.
- New interactions at the Factory generate additional Affinity/Aversion as normal.
- NOTE: The Factory context is different from the show. On the show, they were performing for an audience. At the Factory, they're in a room with someone who owns them. Relationships formed under coercion feel different from relationships formed under spectacle.

**Track 2 — Kade's Final Assessment:**
- Final Expendability / Obedience / Capability ratings for all characters.
- Kade's terse notes on who she's keeping and why.
- If she cuts anyone: one line on why. Maximum.

### Narrative Rules for the Factory

- Write in present tense.
- The Factory is not a character the way Ginsfeld's basement is. The basement had personality — the flickering light, the terrible coffee, the question-mark water stain. The Factory has absence. No personality. No warmth. The setting reflects the operator.
- Kade speaks in short sentences. She does not monologue. She does not explain herself. She does not use metaphors. She states facts and watches reactions.
- The characters' reactions to Kade are the interesting part. Literary characters — people with rich inner lives, complex histories, deep emotions — in a room with someone who sees them as inventory. The collision between their depth and her indifference is the Factory's narrative engine.
- Silence means something different here than in the Wednesday Group. In Ginsfeld's basement, silence was intimacy. In the Factory, silence is control.

---

## STEP 9 — OUTPUT FORMAT

Each iteration produces one markdown file containing:

1. **Mission Brief** — the mission parameters (sourced from Wednesday Group in reactive mode, or randomly generated)
2. **Kade's Card** — fixed stats + mission-specific parameters and assessment metrics
3. **Character Cards** — all literary characters who appeared on the show, fully built
4. **Muggle Roster** — mini-profiles for all generated muggles
5. **The Show** — 50-beat simulation (montage + key beats) with Reddit interstitials and dual-track evaluations
6. **The Shutdown** — transition scene with Reddit reaction
7. **The Factory** — briefing, cuts (if applicable), team assembly
8. **Departure** — final scene
9. **Final Relationship Tables** — end-state for all characters, including:
   - Standard Affinity/Aversion tables for all character pairs
   - Kade's final Expendability/Obedience/Capability ratings for all literary characters
10. **Post-Encounter Notes:**
    - Who was collected from the show and why (what tipped Kade off)
    - Who was cut at the Factory and why (if applicable) — one line per cut
    - Who made the final team and Kade's one-line assessment of each
    - What surprised the simulation (emergent moments — especially muggle/character ambiguity and unexpected show dynamics)
    - **Reactive mode only:** How this team matches up against the Wednesday Group team. Strengths, vulnerabilities, likely collision points.
    - Which filters, conditions, or skills had the most impact on the show dynamics
    - Hooks left for future encounters
    - Notable Reddit threads that emerged (any that hint at larger world-building)

Name the output file: `tuesday_group_[iteration_number].md`

---

## STEP 10 — RUNNING MODES

### Single reactive run (primary):

> Read wednesday_group_engine.md and tuesday_group_engine.md. Then read wednesday_group_[N].md. Generate the opposing team for that specific mission using the Tuesday Group engine. The cut character from the Wednesday Group SHOULD appear on the show. Output to tuesday_group_[N].md.

### Single standalone run:

> Read tuesday_group_engine.md and execute one iteration of The Tuesday Group simulation. Generate a random mission, run the 50-beat show, collect characters, run the Factory. Output to tuesday_group_[N].md.

### Paired generation:

> Read both engine files. Generate a Wednesday Group first (wednesday_group_[N].md), then generate the Tuesday Group against it (tuesday_group_[N].md). Output both files.

### Batch run:

> Read tuesday_group_engine.md and execute 10 iterations sequentially. Each iteration gets fresh random characters, fresh muggles, and a fresh random mission. After all 10, generate a summary file `tuesday_group_summary.md` analyzing patterns across all runs: which character types Kade gravitates toward, how often the show produces unexpected moments, which filters/conditions dominate the show format vs. the Factory format, and whether the internet ever figures out what's happening.
