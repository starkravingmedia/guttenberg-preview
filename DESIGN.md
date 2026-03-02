# World of Guttenberg — Game Design Document

*Definitive reference. Updated 2026-03-01 — Ginsfeld-era mechanics (Conditions, Roll Skills, Filters, Reputations, d20 resolution), organizations, mission structure, literary web, immune systems, node warfare, traversal mechanics.*

---

## 1. Overview

World of Guttenberg is a card game powered by a large language model, set in a hallucinatory underworld where ideas extracted from real books collide. Players draw Actors, Artifacts, and Ideas from literary texts, form teams, and battle in narrated encounters where thematic resonance matters more than raw stats. The game is generative — every card, battle, and consequence is unique. The source material is Project Gutenberg's catalog of 70,000+ public domain texts. The LLM is the game engine.

---

## 2. Card System

### 2.1 Taxonomy: 8/8/8

The game uses three card types in equal proportion. Each type has a fundamentally different relationship model.

| Type | Count | What They Are | Relationship Model |
|------|-------|--------------|-------------------|
| **Actors** | 8 | Characters — fictional, historical, mythological | Bilateral (affinity + animosity with other Actors) |
| **Artifacts** | 8 | Objects — books, tools, documents, relics | Owner-binding (affinity to owner; possible corruption) |
| **Ideas** | 8 | Concepts — philosophical, aesthetic, existential | Weather (one-way; Ideas don't reciprocate) |

### 2.2 Actors

Actors are the combatants. They have personalities, voices, private motivations, and relationships with each other.

**Relationship mechanics:** Each Actor maintains a ledger tracking **affinity** and **animosity** toward every other Actor they've encountered. These are independent tracks — a card can have high affinity AND high animosity simultaneously (begrudging respect, violent passion, bitter loyalty).

| Event | Effect |
|-------|--------|
| Win together | +2 affinity toward teammates |
| Lose together | +1 animosity toward teammates (blame) |
| Oppose in battle | +animosity (scales by directness) |
| Sidelined in draft | +2 animosity toward the captain with most affinity (the deeper betrayal) |

**Relationship sensitivity varies by Actor.** The same score means different things on different cards:
- **Ahab:** Animosity may *buff* him. Hatred is fuel. High affinity might weaken him (something to lose).
- **Murasaki:** High animosity degrades her core mechanic. She's a court writer — observation requires access. If everyone hates her, her diary goes blank.

**Actor stats (generated at creation):**

Actors have two stat layers: ability scores and game traits.

**Ability scores** (standard six, scored 8–18 with modifiers):

| Stat | What It Measures |
|------|-----------------|
| **STR** | Physical force, endurance in combat, ability to hold ground |
| **DEX** | Agility, speed, physical grace, sleight of hand |
| **CON** | Stamina, resilience, capacity to absorb punishment |
| **INT** | Analytical intelligence, pattern recognition, knowledge |
| **WIS** | Perception, intuition, awareness of environment and subtext |
| **CHA** | Force of personality, persuasion, social presence, deception |

**Game traits** (qualitative levels: Low / Medium / High):

| Trait | What It Measures |
|-------|-----------------|
| **Game Savvy** | How well the Actor understands the game's rules and systems |
| **Honesty** | Whether they share what they know truthfully |
| **Verbosity** | How they deliver information (nested stories vs. terse instructions) |
| **Sensitivity** | How much affinity/animosity affects their performance |

**Actor autonomy:** Actors are pawns with motives. The player moves them, but *how* they execute is up to them. An Actor may choose an Artifact for strategic reasons, for personal reasons, or for reasons that have nothing to do with the current battle. Private motivations are tracked in their markdown file and revealed through play.

### 2.3 Artifacts

Artifacts are objects that bind to owners.

- **Stats are generated at binding** — the same Artifact is different depending on who binds it. Before binding, an Artifact is potential. After binding, it's defined.
- **Ownership accumulates on the Artifact.** Every owner is recorded. Provenance matters — a sword that killed a king remembers.
- **Bond strength** grows or weakens based on how the Artifact is used.
- **Corruption is possible but not default.** An Artifact that's been through enough bad battles, cursed hands, or betrayal could develop animosity toward its owner.

### 2.4 Ideas

Ideas are weather. They don't bond. They don't belong. They don't care about people or things.

- An Actor can build their whole identity around the Categorical Imperative — and the Categorical Imperative does not know their name.
- Ideas are **used**, not **owned**. They appear in an Actor's history as encounters, not in an ownership log.
- Ideas are mostly **immutable** — their expression varies, their essence does not.

### 2.5 Card Persistence: Markdown Files

Each card is a markdown file that accumulates history over time.

**Actor markdown contains:**
- Backstory and description (narrative, in-voice)
- Ability scores (STR/DEX/CON/INT/WIS/CHA with modifiers)
- Game traits (Game Savvy, Honesty, Verbosity, Sensitivity)
- Conditions (each with duration, visibility, observability, description)
- Reputations (source organization, spread level, what they know)
- Roll Skills (Active and Passive, with triggers, d20 mechanics, and costs)
- Filter (passive aura — always active, always described narratively)
- Relationships (affinity/aversion toward all known Actors, with internal monologue)
- Equipment (current Artifact and Idea bindings)
- Battle history, Artifact bond log, Idea encounter log
- Private motivations and ambitions

**Artifact markdown contains:** backstory, stats (generated at binding), properties, ownership log, bond strength, battle history, corruption log, provenance notes.

**Idea markdown contains:** description, philosophical context, encounter log, deployment history. Does NOT contain ownership or relationship scores.

### 2.6 Conditions

Conditions are persistent states that affect an Actor's behavior, capabilities, and interactions. Each condition has four properties:

| Property | Values | Meaning |
|----------|--------|---------|
| **Duration** | Permanent / N encounters / Until [trigger] | How long the condition persists |
| **Visibility** | Public / Semi-private / Private | Who in the fiction can perceive it |
| **Observability** | o2o / no2o | Whether *other characters* can detect it through observation |
| **Description** | Narrative text | How the condition manifests and what it does |

Conditions are where character psychology becomes mechanically relevant. They're not buffs or debuffs — they're personality made legible to the system.

**Examples from playtest:**
- **The Madness Scar** (Yvain) — Permanent, Semi-private, o2o. A wildness that flickers behind his eyes under stress. Others can see it — barely contained.
- **Spirit-Sight** (Azaro) — Permanent, Private, no2o. Sees the spirit world overlaid on the physical. Others can't tell he's seeing anything unusual.
- **Ink That Won't Dry** (Sei Shōnagon) — Duration: until she finds a text that feels like home. Private, no2o. She annotates the margins of every text she passes through. The Marginalia have noticed.
- **The Broken Pinion** (Fevvers) — 3 encounters, Semi-private, o2o. Damaged wing. She hides it but winces when she moves too quickly.

Conditions can change visibility through play (a Semi-private condition can go Public if circumstances force a reveal). They create narrative hooks, mechanical constraints, and social dynamics that emerge from who each character *is*.

### 2.7 Roll Skills

Actors have named skills that resolve through d20 + modifier rolls. Each skill is either **Active** (the Actor chooses to use it) or **Passive** (fires automatically when triggered).

**Structure:**
```
[SKILL NAME] (Active or Passive)
- Trigger: What activates the skill
- Mechanic: d20 + [relevant ability modifier]
  - 18+: Critical success — extraordinary result
  - 10-17: Standard success — effective but visible
  - 1-9: Failure — the skill misfires or backfires
- Cost: What succeeding costs (skills are never free)
```

**The cost principle:** Every skill has a price, even on success. Sei's Devastating Observation always lets the target know they've been read. Azaro's Between the Pages always draws the attention of spirits on the other side. Yvain's Lion's Fury always reveals the wildness beneath his composure. Skills are powerful but they leave marks.

**Examples from playtest:**
- **Devastating Observation** (Sei, Active) — d20 + CHA. Reads a person's hidden motivations. Cost: the target always knows they've been studied.
- **Between the Pages** (Azaro, Passive) — d20 + WIS. Fires near narrative boundaries. Sees seams between stories. Cost: spirits on the other side notice him.
- **Lion's Fury** (Yvain, Active) — d20 + STR. Devastating protection of someone he's committed to. Cost: the intensity is always alarming, even to the protected.
- **Is She Fact or Is She Fiction?** (Fevvers, Passive) — d20 + CHA. Fires when anyone assesses her truthfulness. Collapses the assessment into paradox. Cost: deepens her own uncertainty about what she actually is.

### 2.8 Filters

Every Actor radiates a **Filter** — a passive aura that changes the social and perceptual environment around them. Filters are always active. They are not skills — they cannot be turned on or off. They are personality as weather.

**Examples from playtest:**
- **"Things That Lose by Being Painted"** (Sei) — Everyone near her becomes subtly aware of whether they're being found pleasing or wanting. Mediocrity becomes unbearable.
- **"The Oath That Echoes"** (Yvain) — Promises made in his presence carry physical weight. Liars find lying more expensive. Truth-tellers find their words landing harder.
- **"The Suspension of Disbelief"** (Fevvers) — The boundary between truth and performance dissolves. Certainties wobble. The room's reality becomes softer, more negotiable.
- **"The Abiku's Gravity"** (Azaro) — The boundary between real and remembered becomes thin. Adults feel an urge either to protect him or push him away.

**Filter interactions** are where emergent gameplay lives. When two Filters overlap, the cross-pressure creates effects neither character intended:
- Sei's measurement + Yvain's moral gravity = a room where people feel simultaneously judged and morally weighted. Liars straighten up. Performers become deliberate.
- Yvain's sincerity + Fevvers' ambiguity = conversations that are simultaneously more honest and more uncertain than either intended.
- Azaro's reality-thinning + Fevvers' reality-softening = disruption: her presence is so aggressively *here* that his spirit-sight goes blank.

### 2.9 Reputations

Actors carry **Reputations** — what the organizations and factions of the literary world know about them. Each reputation is tagged with a source organization and a spread level.

**Structure:**
```
"[REPUTATION NAME]"
- Source: [Organization name] ([spread level])
- [What they know and how they feel about it]
```

Reputations create consequences. An Actor known to The Dockhands as "The Cockney Venus" will be recognized in texts connected to Dockhand networks. An Actor whose Marginalia annotations haven't been traced yet can move through texts undetected — until they can't.

Reputations are discovered through play, not assigned at creation. They accumulate as an Actor moves through the literary world and interacts with its inhabitants and infrastructure.

---

## 3. Battle and Resolution System

### 3.1 Format: 1v1 with Supporting Cards

Each side fields:
- **One Actor** — the combatant
- **One Artifact** — carried, enhances power or offsets weakness
- **One Idea** — deployed as tactical environment

The Actor's relationship to their Artifact and Idea is explored before the fight begins.

### 3.2 Five-Phase Structure

**Phase 1: The Hands Are Drawn**
Pre-battle backstory. How each player selects and relates to their cards. Internal monologue revealing strategy, personality, voice. This is where the audience starts caring about the outcome.

**Phase 2: The Arena**
Setting the stage. The arena is a *character* that can influence the outcome — thematically resonant with both combatants, possibly containing the prize being fought over. (Example: a stopped clock in a train station became the entire pivot of the Dracula vs. Zhivago battle when the Dutch sheet music restarted it.)

**Phase 3: The Battle**
The principal action. Can take many forms: physical brawl, outwitting, chase, comeuppance, metaphorical battle spanning years, or a literal historical battle if that fits the themes. Not restricted to real-time combat narration.

**Phase 4: The Victory and the Loss**
Declaration of winner (or draw). What happened and what it meant.

**Phase 5: The Aftermath**
Card consequences (damaged, destroyed, empowered, leveled up) AND world consequences. How does this battle move the larger world?

### 3.3 Narrative Voice: Graphic Novel Constraint

- Write as if confined by a page count — a prose-heavy graphic novelist (Alan Moore as reference)
- Think in panels and compositions
- Terse and punchy by default. Fewer big reveals, but hit hard when you hit
- The voice should echo the Actor's own voice — Ahab's battle reads differently than Zhivago's in sentence rhythm and diction

### 3.4 Resolution Philosophy: Hybrid Model

Resolution uses a **hybrid system**: d20 dice mechanics provide structure; the LLM provides narrative interpretation of results.

**In battle encounters** (1v1, team battles), resolution is primarily narrative — the LLM weighs thematic resonance, card synergy, and arena influence to determine outcomes. Ability scores inform the narrative (a STR 18 Actor fights differently than a STR 8 Actor) but don't mechanically determine winners.

**In mission encounters** (exploration, social, infiltration), resolution uses d20 + modifier rolls for specific skill checks. The roll provides a result tier (critical/standard/failure); the LLM narrates what that tier means in context.

**Thematic factors that influence all resolution:**
- **Thematic resonance:** Cards that speak to similar themes amplify each other
- **Thematic contradiction:** Fundamental opposition creates volatile interactions
- **Absurdity as weapon:** Comedy can undermine gravitas-dependent cards
- **Historical weight:** Ideas that shaped real history carry momentum
- **Obscurity as stealth:** Little-known ideas slip past defenses built for famous ones
- **Internal contradiction:** A card at war with itself is unstable but powerful
- **Filter interactions:** Overlapping Filters create emergent effects that neither side planned

Cards that don't fit their Actor are more interesting than cards that do. The stretch is where the game lives.

### 3.5 Multiple Encounter Types

| Type | Format | Purpose |
|------|--------|---------|
| **Team Battle** | Drafted teams, captains, arena | Social mode — relationship mechanics matter most |
| **1v1 Duel** | Pure duel, no teammates | Intense narrative, simpler consequences |
| **Mission** | Structured objective with team assembly, opposition, and complications | Strategic mode — Filters, Roll Skills, Conditions, and social dynamics drive the action |
| **Raid** | Cooperative PvE, team goes into a book | Survival, team cohesion tested |
| **Grinding** | Card acquisition from texts | Lower stakes, cumulative, builds provenance |

### 3.6 Mission Structure

Missions are multi-beat encounters with specific objectives, opposition forces, and complications. They are the game's primary mode for narrative-heavy, character-driven play outside of combat.

**Mission components:**
- **Mission Brief:** Target, opposition, complication, constraints, what the mission-giver knows (and doesn't)
- **Team Assembly:** Social encounter where the player evaluates and recruits Actors for specific roles (navigator, shield, face, etc.)
- **Execution:** Multi-beat sequence using Roll Skills, Filter interactions, and Conditions to navigate the mission's challenges
- **Resolution:** Consequences for all participants — relationships shift, conditions change, reputations accumulate

**The Ginsfeld format** (from playtest): A Bookhunter running a fake therapy group to audition literary characters for a rescue mission. The "session" is the team assembly phase — each character arrives, interacts, reveals abilities through social pressure, and relationships form organically through 20 beats of dialogue, skill triggers, and Filter cross-talk. The mission itself (entering a text, navigating its immune system, confronting opposition) follows.

**Key design insight:** Missions produce the richest character dynamics because they force Actors into sustained social interaction where Filters overlap, Conditions surface, and Reputations create complications. A 20-beat assembly scene can generate more relationship data than three battles.

---

## 4. Draft System

### 4.1 Team Draft

1. Two Actors randomly selected as captains
2. Elder captain (by historical/fictional origin date) drafts first
3. Captains alternate picks until each team has 3 members
4. Each captain names their team
5. Two unchosen Actors are sidelined

### 4.2 Equipment Draft

After teams form, Actors select Artifacts and Ideas. Elder team drafts first. Captain selects first within each team.

**Key principle:** Actors choose for reasons of their own, not necessarily to optimize strategy. Each pick has a **public reason** (strategic) and a **private reason** (personal).

Examples from the first draft:
- Virgil took the Half-Burned Library Card partly as a credential — and partly because he's a poet who ordered his own work burned, and a record of something permitted to disappear is a private comfort.
- Ahab took the Sailor's Journal for *after* the battle. Unknown coordinates. A side quest his team doesn't know about.
- Scheherazade took the Child's Primer because she's exhausted and fantasizes about a world simple enough to fit in an alphabet.

### 4.3 The Coda

After every draft, the two unchosen Actors get a brief scene in the margins of the parchment.

- Short. Beckett-adjacent. Stoppard-adjacent (Rosencrantz and Guildenstern energy).
- They deal with not being chosen in ways consistent with their personalities.
- Always interrupted by something unusual — a sound, an object doing something it shouldn't.
- One actor recognizes that someone else is still choosing (see: The Other Chooser, Section 5.1).
- The player then chooses one of the two unchosen Actors as their first card.

---

## 5. Game Arc: Three Acts

### 5.1 Act 1: Tutorial — The Other Chooser

The player wakes up. Draws their first card. Learns the rules (imperfectly, through their Actor's game savvy and honesty).

**The Other Chooser** is a mirror rival — built from the unclaimed cards (the ones nobody wanted during the draft). During the coda, each unclaimed card disappears differently: the Rosetta Stone folds into itself like a door closing; the Voynich Manuscript pulls itself through the page; Tabula Rasa erases itself; Memento Mori falls through a hole that seals behind it.

Something underneath the parchment is choosing. Building a hand. Learning at the same pace as the player.

- Zero-sum duels as training ground
- Goal: dispatch the Other Chooser, build initial hand to 3+ cards
- **Cost:** while you're learning, the two AI factions are getting stronger

### 5.2 Act 2: The War You Weren't Invited To

The Other Chooser is gone. But the Descenders and the Unsilenced (or their generative equivalents) have been building empires — not just hands, but minion networks, infrastructure, influence.

- Three-way cold war. Attacking one faction lets the other capitalize.
- Maneuvering, alliances of convenience, proxy wars through minion networks
- The battle between factions is bleeding into the player's real world (see Section 8.2)

### 5.3 Act 3: Armageddon of Substance, Idea, and Will

Three factions with fully leveled decks and entrenched networks. Reality is halfway dissolved. The parchment and the world are the same surface. Final confrontation.

---

## 6. Player Experience

### 6.1 Onboarding Sequence

**The Player is not the Actor.** The Actor is a card in the Player's hand. The Player has their own fiction.

**Player archetypes** (examples, not exhaustive): The Collector (climate-controlled archive, first editions), The Damaged Professor (red-marked manuscripts, tenure pressure), The Frustrated Writer (3am, cursor blinking), The Bookhunter (antiquities dealer, runs operations in the literary underworld, recruits characters for missions).

**Sequence:**
1. **Wake Up.** The player comes to in a setting appropriate to their archetype.
2. **The Eureka.** They just did something impossible — drew a living idea out of a book. The *how* is specific to who they are.
3. **The Problem.** They did it once and don't know how. The Actor card they drew is alive, opinionated, and may or may not help.
4. **The Threshold.** Three cards minimum to play. First quest: get back into a book, figure out extraction, draw two more cards.

### 6.2 Three Layers of Motivation

| Layer | Drive | When Discovered |
|-------|-------|----------------|
| **Curiosity** | You pulled a living idea from a book. Do it again. | Immediately |
| **Empathy** | Your cards are fading. They talk to you. They're getting thinner. You're keeping something alive. | Mid-game |
| **Survival** | Lose all your cards, you die. The first card you drew is the last wall. | Late-game reveal |

Actor knowledge of these layers depends on game savvy and honesty:
- Faust archetype: knows about Layer 3 from the start, doesn't tell you until it's useful
- Hamlet archetype: doesn't understand the rules well enough to warn you
- Scheherazade archetype: tells you in a nested story you won't decode for three sessions
- Virgil archetype: will tell you if you ask the right question

---

## 7. Action Cards & Blowback

### 7.1 Four Action Types

| Type | Domain | Speed | Blowback |
|------|--------|-------|----------|
| **Legal Action** | Systems, contracts, rules | Slow, structural | Low variance |
| **Military Action** | Direct force, fleet vs. network | Fast, costly | High variance |
| **Dirty Tricks** | Subversion, sabotage, espionage | Targets infrastructure | Medium, can backfire |
| **Plot Twist** | Narrative intervention, reality shifts | Most powerful | Maximum variance |

Action cards are **typed but not defined until played.** The LLM generates specific effects at play time based on current game state.

### 7.2 Point Budgets

Every action card has a fixed number of points split between **impact** (what it does to the target) and **blowback** (what it does to you). The split is visible before playing.

### 7.3 Performer Modification

Which Actor performs the action shifts the impact/blowback ratio:
- Ahab performing Military Action: almost all impact, but catastrophic concentrated blowback
- Scheherazade performing Dirty Tricks: blowback shifts Relational — tricks unravel alliances
- Faust performing anything: growing probability of "Call It Due" — his bargain's clause triggers

### 7.4 Blowback Cascade

Three checks: **Severity** (how bad?) → **Direction** (where does it land? follows existing fractures) → **Cascade** (does it chain? one action can produce four consequences).

**Engineered blowback** is advanced play — sometimes you play an action card to damage your own hand on purpose, provoking an unwanted card into leaving. The freed slot and dropped obligation may be worth more than the card.

### 7.5 Hand as Portfolio

Every card is an asset AND a liability. Each comes with obligations — Ideas to defend, networks to maintain, relationships to manage. The strategic question isn't "which cards are strongest" but "which cards are worth the upkeep."

---

## 8. World Systems

### 8.1 Minion Networks

As cards grow powerful, they attract minions — subordinate entities operating on the card's behalf.

Examples:
- Faust → law firm → lobbying group → multinational
- Scheherazade → podcast → 24-hour news network → she IS the news cycle
- Wife of Bath → grassroots movement → political party
- Ahab → single ship → fleet

Networks are targetable infrastructure. They can be attacked (Military Action), undermined (Dirty Tricks), or legally challenged. Every network is an asset and a liability.

### 8.2 Reality Bleed

The faction war bleeds into the player's world.

| Stage | Manifestation |
|-------|--------------|
| **Early** | Small synchronicities. A law firm called Foust & Associates. A voicemail that never ends from a woman with a Persian accent. Ignorable. |
| **Mid** | Undeniable patterns. News stories echo card descriptions. Institutions behave like minion networks. |
| **Late** | The synchronicities ARE reality. The parchment and the world are the same surface. |

The Ideas each team chose are deployed as real-world forces. The Categorical Imperative manifests as accountability journalism. The Sublime as extreme weather or architecture. The Social Contract as legislation nobody remembers voting for.

### 8.3 Organizations

The literary world has its own infrastructure — organizations that operate across texts, maintain networks, and pursue agendas. These are distinct from player factions (Descenders, Unsilenced) and exist as the world's NPCs, employers, obstacles, and intelligence sources.

| Organization | Role | Relationship to Players |
|-------------|------|------------------------|
| **The Redactors** | Erasure specialists. When a character goes wrong — escapes, corrupts, destabilizes — the Redactors are called in to unmake them. Professional, efficient, protocol-driven. | Opposition. Their missions and the player's missions often conflict. Three-person strike teams with a leader, a tracker, and an erasure instrument (the Stylus). |
| **The Lamplighters** | Intelligence network. They track what's happening across the literary web — which characters are moving, which texts are destabilizing, where the seams between stories are thinning. | Employers and information brokers. They give missions and share intelligence, but their priorities don't always align with the player's. |
| **The Ashkeepers** | Custodians of destroyed or dying texts. They preserve what they can from texts that have been damaged, disconnected, or destroyed. They respect survival and recovery. | Potential allies. They value anyone who has been broken and rebuilt. Yvain's madness-and-recovery earns their respect. |
| **The Marginalia** | The watchers in the margins. They exist in the annotation layer of texts — footnotes, marginalia, commentary. They observe everything but rarely intervene. When they do, it's because something has gone very wrong. | Wild cards. They notice things that other organizations miss (Sei's margin annotations, for example). Getting their attention is easy; controlling what they do with it is not. |
| **The Dockhands** | Movers of characters and cargo between texts. They handle the logistics of traversal — the practical business of getting people and objects from one node to another. | Service providers. They know who's moving where. Their gossip network is vast. Reputations spread fastest through Dockhand channels. |
| **The Bindery** | Artifact specialists. They deal in objects that have crossed between texts — weapons, documents, relics. They track provenance, assess value, and broker trades. | Merchants and appraisers. They know what Artifacts are worth and who wants them. They hear things from the objects themselves. |

Organizations create **Reputations** for Actors. An Actor who moves through the literary world accumulates a reputation with each organization they interact with. These reputations have consequences — being known to The Dockhands as "The Cockney Venus" means being recognized in any Dockhand-connected text. Being unknown to The Marginalia means being invisible in the annotation layer — until they find you.

---

## 9. Generative Card Creation

The playtest deck of 24 cards is a **tuning fork**, not the game. The real game is generative.

- Player specifies genre, period, mood, or "surprise me"
- LLM generates Actors, Artifacts, Ideas on the spot
- Each Actor gets the full character sheet: ability scores, game traits, Conditions, Roll Skills, Filter, and backstory — all rolled and written at creation
- No two games share a card pool
- Archetypes recur because they're structurally useful; specific cards are always new

---

## 10. The Literary Web

The literary web is the game map. Every book is a node. Every connection between books — quotation, adaptation, influence, shared authorship, thematic resonance — is a traversable edge. Players navigate this web, claim territory, wage faction warfare, and recruit characters from within the texts.

### 10.1 Nodes

Every text is a node. Properties:

| Property | What It Measures | Effect |
|----------|-----------------|--------|
| **Readership** | Cumulative cultural attention — readers, scholars, citations, adaptations | Determines immune system strength |
| **Genre / Tone** | The text's internal rules, period, style | Determines vibe check difficulty for incoming parties |
| **Connectivity** | Number and strength of edges to other nodes | Determines strategic value and cascade risk |
| **Ownership** | Which faction controls this node, if any | Determines who can traverse freely |
| **Status** | Active, disconnected, or destroyed | Determines traversability and cascade state |

Node examples by readership tier:

| Tier | Example | Immune Strength | Strategic Value |
|------|---------|----------------|-----------------|
| **Canonical** | The Bible, Shakespeare, Homer | Extreme | Massive hub — connects to almost everything, but nearly impossible to enter covertly |
| **Major** | Dumas, Ovid, Dickens | High | Strong hubs with many connections |
| **Mid-list** | Regional classics, well-known genre fiction | Moderate | Useful waypoints and mission targets |
| **Obscure** | Out-of-print monographs, niche journals | Low | Easy to enter; valuable as back-roads |
| **Ephemeral** | Zines, fan fiction, pamphlets | Minimal | Starting bases, engineered connection points, expendable |

### 10.2 Connection Types and Traversal Technology

Connections between nodes have types. Each type requires different traversal technology, unlocked by spending **scholarship**.

| Tier | Connection Type | Examples | Scholarship Cost | Traversal Difficulty |
|------|----------------|----------|-----------------|---------------------|
| **1** | Direct reference | Quotation, adaptation, play-within-a-play | Low | Easy — clear textual link |
| **2** | Shared authorship | Same writer, different works | Low-Medium | Moderate — texts may resist sharing |
| **3** | Thematic resonance | Shared motifs, structural parallels, genre debt, influence chains | Medium-High | Hard — requires research to identify and validate |
| **4** | Engineered connection | Player writes new text creating a bridge | High | Variable — depends on plausibility of the bridge |

**Tier 1** connections are highways — well-mapped, obvious, available early. **Tier 3** connections are the back roads that reward deep literary knowledge. **Tier 4** is the endgame capability — you're not just navigating the literary web, you're extending it.

The LLM validates all proposed connections against actual literary history. Players cannot fabricate connections. They either exist or they don't.

### 10.3 Scholarship

Scholarship is the research currency. It functions like research points in strategy games but represents actual literary knowledge.

**Earning scholarship:**
- Exploring nodes (entering books, engaging with their content)
- Completing missions within texts
- Discovering previously unknown connections between nodes
- Controlling nodes that generate scholarship bonuses (libraries, universities, literary journals)

**Spending scholarship:**
- Unlocking traversal technology for higher-tier connection types
- Researching specific connections between distant nodes (the LLM reveals whether a proposed link is real)
- Identifying weak points in enemy infrastructure (mapping cascade dependencies)
- Engineering new connections (Tier 4) — requires scholarship plus a controlled publication node

### 10.4 Immune Systems

Every text resists foreign intrusion proportional to its cultural weight.

**Immune strength** is a function of:
- Total readership (historical and current)
- Scholarly attention (criticism, analysis, academic study)
- Adaptation density (films, plays, translations — each one reinforces the "canonical" version)
- Cultural consensus (how strongly people agree on what the text *means*)

**The vibe check:** When a party enters a node, the LLM evaluates compatibility between the incoming characters and the host text's genre, period, tone, and internal logic. Incompatibility triggers the immune response.

| Vibe Mismatch | Immune Response |
|---------------|----------------|
| **Low** (genre-adjacent, period-appropriate) | No response — pass through freely |
| **Moderate** (wrong period, similar tone) | Difficulty scaling — narrative friction, harder challenges |
| **High** (fundamentally incompatible) | Hard rejection or structural damage |
| **Extreme** (absurd intrusion into canonical text) | Potential destruction of the text or the intruding characters |

**Genre-specific immune behaviors:**
- **Weird fiction** (Borges, Danielewski, Lovecraft) — porous immune systems. Strange visitors are on-brand. Safe havens for misfit parties.
- **Reference materials** (encyclopedias, dictionaries, textbooks) — extreme immune systems. Pure information resists narrative intrusion completely.
- **Fan fiction** — ephemeral meeting grounds. Low readership means low resistance. But popular fan fiction hardens over time, developing its own immune system.
- **Realist literary fiction** — moderate but rigid. The immune system enforces internal consistency rather than raw rejection.

### 10.5 Literal Metaphors

A transformation mechanic for bypassing immune systems. The player transforms their characters into forms the host text will accept — a metaphorical translation that makes them compatible.

- The cyberpunk hacker becomes a traveling scribe
- The Space Marine becomes a wandering knight
- The modern detective becomes a village gossip

**Costs:** Meta-currency (scholarship or equivalent). The transformation is not free.

**Risks:** Changes may not fully reverse. A character transformed too many times accumulates residue from the forms they've worn. The Space Marine who was a knight who was a merchant who was a priest might come back... different.

### 10.6 Node Warfare

Two damage states:

**Disconnected** — The node goes dark. Cannot be traversed. But the text still exists. No cascade damage to downstream nodes. This is the blockade — cutting supply lines without burning the countryside. Presumably reversible through a mission to re-establish the connection.

**Destroyed** — The text is annihilated. Cascade logic fires. Every node that depends on the destroyed text for its existence or primary influence is structurally compromised. Downstream nodes may be weakened, disconnected, or destroyed in turn.

**Cascade mechanics:**
- Cascade severity scales with the destroyed node's connectivity and readership
- Each downstream node's vulnerability depends on how many *other* parents it has. A node with many influences survives the loss of one. A node with a single primary source may be destroyed.
- Cascade propagation can chain — destroying node A weakens node B, which was the sole parent of node C, which collapses, taking node D with it
- The full cascade is computationally tractable for the LLM because it's graph operations on known literary influence data

**Strategic implications:**
- Disconnecting is always safer than destroying
- Destroying canonical nodes (Shakespeare, Homer, the Bible) is game-ending for everyone — mutually assured destruction
- Destroying obscure nodes is surgical and cheap — if the target has low connectivity, cascade damage is minimal
- The most valuable intelligence is mapping cascade dependencies to identify enemy vulnerabilities without self-harm

### 10.7 Fast Travel and Random Encounters

**Fast travel** is available across well-traveled nodes when the party doesn't trigger immune responses along the route. Instead of fully entering each intermediate book, the party moves through them at speed.

**Random encounter probability** increases with:
- Number of nodes being fast-traveled through
- Aggregate immune system strength of intermediate nodes
- Vibe mismatch between party composition and intermediate texts

**When a random encounter triggers:**
1. The party is dropped into a scene within a random intermediate text
2. The scene is generated by the LLM based on the text's content and the party's composition
3. The party must extract themselves without triggering a full immune response
4. Success: minor delay, possible minor damage. Failure: full immune response within that text.

**Party composition as route constraint:** Players must consider not just whether their party can survive the destination, but whether it can survive being randomly dropped into *any text along the route*. A party optimized for Neuromancer may be catastrophically wrong for a Cold War thriller along the way.

### 10.8 Character Recruitment

**Unresolved characters** — those whose fates the author left open — are ideal recruitment targets. The text's immune system has released them. They're loose threads that won't be fought for.

Examples from The Count of Monte Cristo:
- **Benedetto (Andrea Cavalcanti)** — convicted, ultimate fate unknown
- **Eugénie Danglars** — on the road to Rome, story left open
- **Baron Danglars** — alive but broken, no clear future
- **Louise d'Armilly** — disappears into the same open-ended future as Eugénie
- **Beauchamp** — fades from the narrative without resolution

**Recruitment difficulty** scales with:
- How firmly the text tracks the character (resolved fates are much harder to extract)
- The text's overall immune system strength
- Whether the character appears in sequels, adaptations, or other works (which tighten the leash)
- Whether the character is load-bearing to the plot (protagonists are essentially impossible)

**Recruited characters** become Actors in the player's hand, retaining personality, knowledge, and abilities from their source text but gaining autonomy as free agents.

### 10.9 Homeworlds

Every faction needs a base of operations — a controlled text with minimal immune system where they can safely rest, store resources, and engineer connections.

**Ideal homeworld properties:**
- Very low readership (minimal immune system)
- Controllable publication schedule (can create new issues/editions)
- Strange enough to accept diverse characters without rejection
- Obscure enough that enemies don't target it

**Example: Nevermind** — a self-published zine, only occasionally produced, appearing on the free shelf of a one-room comic shop in Cambridge, MA. Readership: dozens. Immune system: zero. The player controls the publication and can write new issues that create textual links (Tier 4 connections) to distant nodes.

**Gifted Authors** — NPCs or allies who are aware of the game. Their works serve as entry points. Their literary output creates traversable connections. A Gifted Author is a strategic asset — they generate Tier 1 connections through their published works.

### 10.10 Game Modes

| Mode | Description |
|------|-------------|
| **PvE** | Player vs. the literary web. Navigating immune systems, extracting characters, surviving traversal. The text is the enemy. |
| **PvW** | Player vs. the world. Cascade damage, orphaned routes, the map reshaping under your feet as factions make moves you can't see. The system has inertia. |
| **PvP** | Direct opposition. Controlling nodes, contesting territory, counter-missions. Two factions can operate inside the same book simultaneously — fighting each other while both trying not to trigger the immune system. The text is the neutral referee. |

**PvP within a shared node:** Both factions must keep their conflict below the immune system's detection threshold. Escalate too far and the book rejects both parties. This creates a natural restraint on PvP — brute force triggers the immune system. Victory goes to whoever can operate most surgically inside a living text.

**LLM as strategic opponent:** At the strategic layer (node ownership, cascade modeling, route optimization), the LLM simulates opponent faction moves cheaply because it's graph operations on a fixed map. The expensive narrative generation only happens at the encounter layer when players actually enter books. This separation makes AI opponents computationally feasible.

---

## 11. Design Principles

1. The 5-phase structure is the standard.
2. The arena is a character.
3. Coherence matters. But so does chaos.
4. Cards that don't fit their Actor are more interesting than cards that do.
5. The parchment aesthetic unifies everything.
6. Relationship mechanics turn one-off battles into a season.
7. Relationship sensitivity varies by character.
8. Multiple encounter types serve different purposes.
9. Three card types, three relationship models.
10. Artifacts become specific at binding.
11. Actors are pawns with motives.
12. Every draft is a relationship event.
13. The game is generative, not fixed.
14. Your first draw is your tutorial voice.
15. Three layers of motivation, each darker than the last.
16. The Other Chooser is the mirror.
17. Reality is the resource being consumed.
18. Every card is an asset and a liability.
19. Action cards are typed but not defined until played.
20. Blowback follows fractures.
21. Engineered blowback is advanced play.
22. The literary web is the map. Every book is a node. Every influence is an edge.
23. Immune systems scale with readership. Obscurity is power.
24. Disconnection is the scalpel. Destruction is the nuke.
25. Cascade consequences are real — model before you strike.
26. The weapon is scholarship. Literary knowledge is strategic advantage.
27. Connections are validated by the LLM, not invented by the player.
28. Party composition matters across the entire route, not just the destination.
29. Unresolved characters are free agents — the text has released them.
30. The strategic layer runs at graph speed. Narrative generates only at encounter level.
31. The map builds itself through play.
32. Every skill has a cost, even on success.
33. Filters are always on. Personality is weather.
34. Filter interactions produce emergent effects neither side planned.
35. Conditions are psychology made legible to the system.
36. Reputations are consequences of movement through the world.
37. Organizations are the world's infrastructure — employers, obstacles, intelligence sources.
38. Missions produce the richest character dynamics.
39. The d20 provides structure. The LLM provides meaning.

---

## 12. Design Strata

*Every mechanic lives at a depth. Changes at deeper layers invalidate everything above them. Changes at shallow layers are local and safe. When introducing a new idea, find its layer first — that tells you the blast radius.*

### Layer 0 — Axioms (change these = different game)

These are non-negotiable. If any of these are false, nothing in the document makes sense.

- Books are alive; ideas are weapons
- LLM narrates and adjudicates (not dice alone, not deterministic)
- Thematic resonance > raw stats
- Cards sourced from real literary texts (Project Gutenberg)
- Three card types with distinct relationship models (bilateral, binding, weather)
- The game is generative — no two sessions share a card pool
- The parchment aesthetic unifies everything

### Layer 1 — Core Loop (change these = redesign most systems)

The fundamental game cycle. Every system above this layer exists to serve this loop.

- Extract cards → build team → battle/mission → consequences
- The Literary Web as game board (nodes = texts, edges = connections)
- Scholarship as primary resource currency
- Immune systems as gatekeeping mechanic
- 5-phase battle/mission structure
- Card persistence via markdown files
- Three-act game arc (Tutorial → Faction War → Armageddon)

### Layer 2 — Primary Systems (change these = ripple to adjacent systems)

The major systems that express the core loop. Each touches multiple other systems.

- Team draft mechanics (captain selection, alternating picks, coda)
- Affinity/animosity ledger and relationship sensitivity
- Traversal technology tiers (1–4) and scholarship spending
- Node warfare (disconnect vs. destroy, cascade logic)
- d20 resolution + narrative adjudication hybrid
- Actor stat model (ability scores + game traits)
- Conditions, Roll Skills, Filters as character mechanics
- Player archetype and player-system interface

### Layer 3 — Secondary Systems (change these = mostly local impact)

Systems that plug into Layer 2 but can be modified without cascading widely.

- Action cards & blowback (4 types, point budgets, performer modification)
- Minion networks and their growth mechanics
- Organizations (Redactors, Lamplighters, etc.) and Reputations
- Reality bleed stages and manifestation
- Literal Metaphors (transformation for immune bypass)
- Archon encounters and alignment shifts
- Character recruitment mechanics
- Homeworlds and Gifted Authors
- Random encounters during fast travel
- The Other Chooser (Act 1 mirror rival)

### Layer 4 — Content & Tuning (change freely)

Specific instances, numbers, and flavor. Changes here are safe and local.

- Specific card stats, abilities, and backstories
- Specific arena generation rules
- Individual Archon personalities and dialogue trees
- Specific organization behaviors and NPC details
- Numeric tuning (affinity accrual rates, cascade thresholds, scholarship costs, immune formula constants)
- Player archetype flavor text and onboarding variations

### How to use the strata

**Adding a new mechanic:** Find the deepest layer it touches. If it only affects Layer 4, implement freely. If it modifies Layer 2, map every Layer 3 system that depends on what you're changing.

**Resolving conflicts between ideas:** Check if both ideas live at the same layer. Same-layer conflicts are real — one must yield. Cross-layer conflicts usually mean the shallower idea needs to bend to the deeper one.

**Evaluating open questions:** Foundation questions (Layer 1–2) should be answered before leaf questions (Layer 3–4), because leaf answers may change once foundations are settled.

---

## 13. Open Questions — Dependency Sorted

*Audited 2026-03-01. Reorganized by dependency depth (see Section 12, Design Strata). Questions are grouped by what they block — answer foundations first, leaves last. Each question is tagged with its stratum and what depends on it.*

*Type key:* **C** = constraint (the answer limits what other things can be). **A** = aspiration (describes desired behavior, flexible in implementation).

### Tier 1 — Foundation Questions (answer first; everything downstream depends on these)

These are Layer 1–2 questions whose answers constrain the largest number of other design decisions.

**Q1. How do battle-mode d20 rolls interact with the narrative resolution model?** [Layer 2] **C**
*Blocks:* all combat resolution, action card effects, PvP within nodes, performer modification math, Archon encounter resolution.
*Why foundational:* The Ginsfeld Sessions introduced d20 mechanics, but the original battle system was pure narrative. These two resolution models coexist — the question is how. Every encounter system depends on this answer.

**Q2. Card destruction: permanent or recoverable?** [Layer 1] **C**
*Blocks:* player death condition, endgame victory/loss, stakes design, Artifact corruption consequences, cascade damage to recruited characters, "Can the player lose?"
*Why foundational:* If destruction is permanent, the game is high-stakes and every battle matters. If recoverable, the game is more forgiving but needs a different tension source. Almost every consequence mechanic depends on this.

**Q3. What is the exact cascade propagation model?** (Threshold-based? Probabilistic? Deterministic?) [Layer 2] **C**
*Blocks:* node warfare strategy, disconnect-vs-destroy tradeoffs, strategic layer AI, "How do multiple parents buffer?", "What happens to recruited characters from destroyed nodes?"
*Why foundational:* Cascade is the nuclear option of the game. Its math determines whether node destruction is ever worth the risk and how the AI factions wage territorial war.

**Q4. How does the LLM decide if a proposed Tier 3 connection is valid?** [Layer 2] **C**
*Blocks:* traversal design, scholarship value, route planning, "What determines if an engineered connection is plausible?", "How many Tier 4 connections can a player maintain?"
*Why foundational:* Tier 3 connections are the most strategically interesting edges in the literary web. If the LLM validates them loosely, the web is dense and easy to navigate. If strictly, the web is sparse and scholarship is precious. This single answer shapes the strategic layer.

**Q5. Does the player (Bookhunter archetype) have stats or a markdown file?** [Layer 2] **C**
*Blocks:* "How does drawing cards work mechanically?", player-system interface, "Can the player interact with reality bleed?", multiplayer design, Act 1 onboarding.
*Why foundational:* The Ginsfeld playtest gave the player (Dr. Ginsfeld) a full stat block. If this is standard, the player is a character in the system with Conditions, Roll Skills, and Filters. If not, the player is an external agent. These are different games.

**Q6. What's the endgame victory condition?** [Layer 1] **A**
*Blocks:* Act 3 design, faction AI goals, "Can the player lose?", "How does Act 1 transition to Act 2?", game pacing.
*Why foundational:* Without a victory condition, there's no way to evaluate whether any mechanic serves the endgame. Faction AI can't make strategic decisions without knowing what "winning" means.

### Tier 2 — Structural Questions (answer after Tier 1; each unlocks a cluster of downstream decisions)

**Q7. How is initial node readership quantified?** (Gutenberg download counts? Wikipedia page views? Scholarly citation indices?) [Layer 2] **C**
*Blocks:* Q8 (immune system formula), traversal costs, cascade severity scaling, node tier classification.

**Q8. What is the exact formula for immune system strength from readership?** [Layer 2] **C**
*Blocks:* vibe check difficulty, literal metaphor costs, Filter/immune interaction, random encounter probability, PvP immune-as-referee.
*Depends on:* Q7.

**Q9. Do affinity/animosity decay or stack infinitely?** [Layer 2] **C**
*Blocks:* long-term balance, relationship economy, "How much animosity accrues between opponents?", team draft strategy over multiple sessions, Actor sensitivity tuning.

**Q10. How are action cards acquired?** [Layer 2] **C**
*Blocks:* action economy, "Can they be charged/modified?", "What determines point budgets?", "How does performer-modification math work?", "Can minions perform actions independently?"

**Q11. What does "controlling" a node actually mean mechanically?** (Garrison? Influence score? Ownership token?) [Layer 2] **C**
*Blocks:* faction warfare, homeworld defense, PvP territory control, "Can opposing factions occupy the same homeworld?", "Can a homeworld be attacked?"

**Q12. How does scholarship accrue and at what rate?** [Layer 2] **C**
*Blocks:* traversal tech unlock pacing, "What's the cost curve for tiers?", engineered connection economy, literal metaphor pricing.

**Q13. How does drawing cards work mechanically?** [Layer 2] **C**
*Blocks:* extraction design, Act 1 loop, recruitment flow, "What does dispatch the Other Chooser mean?"
*Depends on:* Q5.

**Q14. How do Filters interact with immune systems when entering a text?** [Layer 2] **C**
*Blocks:* traversal party planning, literal metaphor design, "What happens when 3+ Filters overlap?", "Can literal metaphor transformations stack?"
*Depends on:* Q8.

**Q15. How are Conditions assigned at creation?** (Random, archetype-driven, or narrative?) [Layer 2] **C**
*Blocks:* character generation balance, "Can Conditions be cured/acquired/transformed?", generative card creation consistency.

**Q16. How much animosity accrues between opponents?** [Layer 2] **C**
*Blocks:* relationship scaling, "Can actors deliberately sabotage a battle?", long-term team chemistry.
*Depends on:* Q9.

### Tier 3 — System Questions (answer in any order within this tier; mostly local impact)

#### Action Card Cluster
*Depends on:* Q10 (how acquired).
- Can action cards be charged/modified while held? [Layer 3] **A**
- What determines point budgets? [Layer 3] **C**
- How does performer-modification math work? [Layer 3] **C**
- Is "Wild" a real blowback category? [Layer 3] **C**
- Can action cards target your own hand deliberately? [Layer 3] **A**
- Do action cards leave precedents? [Layer 3] **A**
- Can minions perform actions independently? [Layer 3] **A**
- How do immune system responses interact with action cards? [Layer 3] **C**
- How does reality bleed interact with action cards? [Layer 3] **A**

#### Literary Web Cluster
*Depends on:* Q3 (cascade model), Q4 (Tier 3 validation), Q7/Q8 (readership/immune formula), Q11 (node control), Q12 (scholarship rate).
- What's the cost curve for unlocking traversal technology tiers? [Layer 3] **C**
- How many Tier 4 (engineered) connections can a player maintain simultaneously? [Layer 3] **C**
- What determines whether an engineered connection is plausible enough to create? [Layer 3] **C**
- Can disconnected nodes be reconnected? By whom? At what cost? [Layer 3] **C**
- How do multiple parents buffer a node against cascade damage? [Layer 3] **C**
- What happens to characters recruited from a node that is later destroyed? [Layer 3] **C**
- Can a homeworld be attacked? What defenses exist? [Layer 3] **C**
- How does fast travel probability math work? (Linear with nodes? Exponential?) [Layer 3] **C**
- What triggers a random encounter vs. a clean pass-through? [Layer 3] **C**
- Can opposing factions occupy the same homeworld? [Layer 3] **A**
- Can literal metaphor transformations stack? Is there a limit? [Layer 3] **C**
- How does the PvP immune-system-as-referee mechanic resolve edge cases? [Layer 3] **C**

#### Character Mechanics Cluster
*Depends on:* Q15 (Condition assignment), Q9 (affinity/animosity decay).
- Can Conditions be cured, acquired, or transformed through play? [Layer 3] **A**
- How many Roll Skills does an Actor typically have? Is two (one Active, one Passive) the standard? [Layer 3] **C**
- Can new Roll Skills be acquired through play or leveling? [Layer 3] **A**
- Do Filters ever change, or are they permanent? [Layer 3] **C**
- What happens when three or more Filters overlap in the same space? [Layer 3] **A**
- Can actors deliberately sabotage a battle? [Layer 3] **A**

#### Artifact Cluster
- What triggers corruption? [Layer 3] **C**
- How does binding break? [Layer 3] **C**
- What happens to stats when an Artifact changes owners? [Layer 3] **C**

#### Game Arc Cluster
*Depends on:* Q2 (card destruction permanence), Q6 (endgame victory condition).
- What does "dispatch the Other Chooser" mean exactly? [Layer 3] **C**
- How does Act 1 transition to Act 2? [Layer 3] **C**
- Can the player ally with a faction? Betray one? [Layer 3] **A**
- How do minion networks grow mechanically? [Layer 3] **C**
- Can the player lose? What does it look like? [Layer 3] **C**
- Can the player interact with reality bleed directly? [Layer 3] **A**
- Is there multiplayer? [Layer 3] **A**

#### Organization Cluster
- How do organizations interact with faction warfare? Are they aligned, neutral, or independent? [Layer 3] **C**
- Can the player join an organization? Rise in rank? [Layer 3] **A**
- How do Reputations mechanically affect gameplay beyond narrative consequences? [Layer 3] **C**
- How do the Redactors decide which characters to erase vs. recover? [Layer 3] **C**

### Tier 4 — Leaf Questions (answer anytime; no downstream dependencies)

- What other organizations exist beyond the six documented so far? [Layer 4] **A**
- How are Gifted Authors discovered or recruited? [Layer 4] **A**

### Resolved Questions (moved to documentation)
- ~~What does the detailed markdown card schema look like?~~ → See Section 2.5, 2.6–2.9
- ~~How do system prompts vary across encounter types?~~ → See Section 3.5–3.6
- ~~How do Actor stats work? Fixed or evolving?~~ → See Section 2.2 (ability scores + game traits)
- ~~What specific stat categories exist beyond game savvy/honesty/verbosity?~~ → See Section 2.2 (STR/DEX/CON/INT/WIS/CHA)
- ~~What does the raid structure look like?~~ → Partially answered by Mission structure (Section 3.6)

---

## 14. Playtest Deck Reference

### Actors

| # | Card | Team | Core Mechanic |
|---|------|------|---------------|
| I | Hamlet | Sidelined | Paralysis weaponized — nothing moves while Hamlet is thinking |
| II | Scheherazade | The Unsilenced | Fights with unfinished sentences. Defensive nightmare. |
| III | Captain Ahab | The Descenders | Monomania as siege engine. Unstoppable in a straight line. |
| IV | Lady Murasaki Shikibu | The Unsilenced (Capt) | Observations change what she's looking at. |
| V | Don Quixote | Sidelined | Rewrites reality by refusing to read it correctly. |
| VI | Faust | The Descenders | Traded knowing for having. Every victory is a payment coming due. |
| VII | Virgil | The Descenders (Capt) | The guide who has seen the worst thing and continued walking. |
| VIII | The Wife of Bath | The Unsilenced | Breaks decorum like a brick breaks a window. |

### Artifacts

| # | Card | Core Mechanic |
|---|------|---------------|
| IX | A First Folio (1623) | Editorial violence as preservation. Chooses what lives. |
| X | The Rosetta Stone | Translates between worlds without understanding either. |
| XI | Half-Burned Library Card from Alexandria | Power is absence. Makes cards aware of what's missing. |
| XII | Gutenberg's Original Press | Copies ideas rapidly. Salvation or plague depending on input. |
| XIII | A Sailor's Journal, 1787 | A door to somewhere. Cannot know where until played. |
| XIV | Communist Manifesto (First Ed., 1848) | Doesn't fight — organizes. Weak cards become a collective. |
| XV | A Child's Primer, Boston, 1761 | The ABCs as theology. Small, simple, cuts to bone. |
| XVI | The Voynich Manuscript | Total resistance to interpretation. Makes other cards doubt their legibility. |

### Ideas

| # | Card | Core Mechanic |
|---|------|---------------|
| XVII | The Categorical Imperative | Tests everything for hypocrisy. Useless against the amoral. |
| XVIII | Negative Capability | Does nothing. That is its power. Sits in doubt comfortably. |
| XIX | The Sublime | Scales to opponent — feeds on being overpowered. Weak against the mundane. |
| XX | Memento Mori | Reminds every card it is temporary. Devastating to permanence. |
| XXI | The Social Contract | Binds. Creates rules between cards that didn't agree to them. |
| XXII | Tabula Rasa | Erases. Strips cards of history. What remains is potential. |
| XXIII | The Allegory of the Cave | Reveals. Most cards prefer the shadows. |
| XXIV | Eternal Recurrence | Would you choose this again? Yes = unbreakable. No = collapse. |

### Teams

**THE DESCENDERS** — Virgil (Capt), Faust, Ahab
*Guide. Power. Drive. Three men who go into the dark and don't look back.*

**THE UNSILENCED** — Lady Murasaki (Capt), Scheherazade, Wife of Bath
*Observer. Narrator. Disruptor. Three women who survived worlds built to silence them.*

**SIDELINED** — Hamlet, Don Quixote
*The prince who cannot choose. The knight who cannot see.*

---

## 15. Playtest Battle Log

### Battle 1: Dracula vs. Zhivago (Original 3-Round)
- Dracula + Principia Mathematica + Zeno's Arrow vs. Zhivago + Mad Magazine + Dutch Sheet Music
- **Winner:** Zhivago. Mad Magazine mocked Zeno's Arrow out of existence. Sheet music resisted Dracula by being too small and too real. A new card emerged: "Aria for the End of an Argument."
- **Assessment:** Wild, trippy, compelling — but novelist voice was showing off.

### Battle 2: Ahab vs. Scheherazade (Revised 5-Phase, 1v1)
- Ahab + sextant of desire + obsession as transcendence vs. Scheherazade + unfinished manuscript + stories delay death
- Arena: a lighthouse. Prize: The Lens of the Lighthouse.
- **Winner:** Ahab. Key moment: recognizing Scheherazade as a colleague — then walking past her anyway, because she cannot delay a man in love with his own ending.
- **Assessment:** 5-phase structure significantly stronger. Phase 1 creates investment. Arena as character created emergent effects.

### Battle 3: Dracula vs. Zhivago (Revised 5-Phase, Graphic Novel)
- Same original cards but with 5-phase structure and graphic novel constraint.
- Arena: train station / cathedral / graveyard. A broken clock at 11:59.
- **Winner:** Zhivago. The Dutch sheet music restarted the clock. Time proven real by the fact that music has a duration. Zeno's Arrow shattered by a held whole note. Dracula defeated by the resumption of time.
- **Assessment:** Graphic novel constraint was "the unlock." Tighter, meaner, hits land harder. Best battle of the session.

### Mission 1: The Wednesday Group (Ginsfeld Sessions — Mission Format)
- **Format:** 20-beat mission assembly. Bookhunter (Dr. Ginsfeld) runs fake therapy group to audition four literary characters for a rescue mission.
- **Characters:** Sei Shōnagon, Yvain, Azaro, Fevvers. Full Ginsfeld-era character sheets with ability scores, Conditions, Roll Skills, Filters, Reputations.
- **Mission:** Rescue a character trapped in a book, pushing into the wrong story. Opposition: the Redactors (three-person erasure team, 72-hour window).
- **Key moments:** Azaro seeing Yvain's lion ("a hole in the air shaped like loyalty"). Sei trying and failing to read Fevvers — her Devastating Observation defeated by Fevvers' Is She Fact or Is She Fiction? filter. Sei advocating for Fevvers over herself. Yvain overriding the decision with tactical intelligence. Azaro sensing the mission target through fifty feet of concrete.
- **Assessment:** The Mission format with d20 resolution, Filters, and Conditions produced the richest character dynamics of any playtest. 20 beats of social interaction generated more relationship data and emergent narrative than three battles combined. Filter interactions were the standout discovery — overlapping passive auras created effects that no one designed. The Ginsfeld-era character sheet (ability scores + Conditions + Roll Skills + Filters + Reputations) is the definitive format.
