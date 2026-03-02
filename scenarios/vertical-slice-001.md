# Vertical Slice 001: The Eugenie Extraction

*A sample scenario that traces one complete player journey through every design stratum, forcing resolution of open questions along the way. Each step lists the mechanics invoked, the open questions it surfaces, and conflicts between existing brainstorm ideas.*

---

## Setup

**Player archetype:** The Bookhunter (operational, tactical, has worked inside books before)

**Player's hand:**
- **Actor:** Sei Shonagon (INT 18, CHA 16, WIS 14 / Game Savvy: High, Honesty: Medium / Filter: "Things That Lose by Being Painted" / Conditions: The List-Maker's Compulsion, Displaced from the Seasons, Ink That Won't Dry, Homesickness as Aesthetic Wound / Roll Skills: Devastating Observation [Active], Aesthetic Resonance [Passive])
- **Artifact:** The Voynich Manuscript (total resistance to interpretation; makes other cards doubt their legibility)
- **Idea:** Negative Capability (does nothing; that is its power; sits in doubt comfortably)

**Homeworld:** Nevermind (self-published zine, readership: dozens, immune system: zero)

**Game state:** Act 2 has begun. The Other Chooser is dispatched. The Descenders and The Unsilenced are building empires. The player has 3 Actors total (Sei is the primary field operative). Scholarship pool: moderate.

---

## Step 1: The Mission Brief

**What happens narratively:**
The Lamplighters send word through Dockhand channels: a character has been spotted moving between texts without a handler. Eugenie Danglars, from The Count of Monte Cristo, has been drifting — appearing in the margins of French Romantic novels, then disappearing before anyone can make contact. The Redactors have flagged her for erasure. Standard 72-hour window before their strike team deploys.

The Lamplighters want her recovered, not erased. They're offering the job to the player because Sei Shonagon has a reputation with them ("The Cataloguer") — useful for an extraction that requires precision, not force.

**Mechanics invoked:**
- Organization reputation (Sei's existing Lamplighter rep enables the job offer)
- Mission structure (brief, opposition, complication, timeline)
- Faction awareness (Descenders and Unsilenced may have their own interest in Eugenie)

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| How do organizations interact with faction warfare? Are they aligned, neutral, or independent? | Tier 3, Organization Cluster | The Lamplighters are offering this job. Are they doing it for their own reasons, or are they aligned with a faction that wants Eugenie? If neutral, this is a simple employer relationship. If aligned, the player may be doing faction work without knowing it. |
| How do Reputations mechanically affect gameplay beyond narrative consequences? | Tier 3, Organization Cluster | Sei's "Cataloguer" reputation got the mission offered. But does it also modify the mission terms? Does a higher reputation unlock better intel, better pay, or different mission types? Or is reputation purely narrative flavor that the LLM uses to color the briefing? |
| Can the player ally with a faction? Betray one? | Tier 3, Game Arc Cluster | If taking Lamplighter missions advances a faction's interests, the player is implicitly allying. Is that tracked? Does the other faction notice? |

**Conflict between existing ideas:**
- **Organizations as "employers" vs. organizations as "world infrastructure."** DESIGN.md describes organizations as both — the Lamplighters are intelligence brokers who give missions, but they're also neutral infrastructure. These two roles conflict in practice: a neutral infrastructure organization can't also be a mission-giver with aligned interests. The scenario forces a choice: are Lamplighter missions faction-neutral, or do they have a side?

---

## Step 2: Route Planning

**What happens narratively:**
Sei and the player study the literary web from Nevermind. The Count of Monte Cristo is a Major-tier node — high readership, high immune system, heavily adapted. Getting there requires traversal.

Two routes emerge:

**Route A (Direct):** Nevermind → a pamphlet on French prison reform (Tier 4 engineered connection from Nevermind) → The Count of Monte Cristo (Tier 1 direct reference to prison literature). Two hops. Fast. But the second hop lands directly into a Major-tier text with a strong immune system.

**Route B (Back roads):** Nevermind → the pamphlet → an obscure 1840s French travelogue (Tier 3 thematic resonance: both describe journeys of transformation) → Eugene Sue's *The Mysteries of Paris* (Tier 2 shared era, shared milieu) → The Count of Monte Cristo (Tier 1 direct influence — Dumas and Sue were contemporaries, Monte Cristo explicitly responds to *Mysteries*). Four hops. Slower, but intermediate nodes are lower readership and the final approach comes through a literary neighbor.

**Mechanics invoked:**
- Literary web traversal (route planning, node readership tiers)
- Traversal technology tiers (Tier 1, 2, 3, 4 all appear in one route)
- Scholarship spending (Tier 3 connection requires research to validate; Tier 4 requires prior engineered connection)
- Fast travel eligibility and random encounter risk
- Party composition as route constraint (Sei Shonagon — Japanese court literature — traversing French Romantic novels)

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **How does the LLM decide if a proposed Tier 3 connection is valid?** | **Tier 1 Foundation, Q4** | Route B depends on a Tier 3 connection between a French travelogue and Eugene Sue. The LLM must decide: is "shared theme of transformative journeys" a valid thematic resonance? If the LLM is strict, this connection fails and Route B breaks. If loose, the web is dense and Route B is easy. **This is the single most consequential open question for the strategic layer.** |
| How does scholarship accrue and at what rate? | Tier 2, Q12 | The player has "moderate" scholarship. Is that enough to validate a Tier 3 connection AND maintain their existing Tier 4 connection from Nevermind? If scholarship is scarce, Route B may be unaffordable. |
| What's the cost curve for unlocking traversal technology tiers? | Tier 3, Literary Web Cluster | The player is using Tier 1, 2, 3, and 4 connections. Have they already unlocked all tiers, or do tiers unlock progressively? If progressively, an Act 2 player may not have Tier 3 yet. |
| How does fast travel probability math work? | Tier 3, Literary Web Cluster | Route A is 2 hops; Route B is 4 hops. If fast travel is available and random encounter probability scales linearly, Route B is exactly twice as risky. If exponential, Route B is much worse. |
| What triggers a random encounter vs. a clean pass-through? | Tier 3, Literary Web Cluster | Sei Shonagon traversing 1840s French literature. Her vibe mismatch is significant. Does her Filter ("Things That Lose by Being Painted") interact with the intermediate nodes' immune systems during fast travel, or only at full entry? |

**Conflict between existing ideas:**
- **Scholarship as "research currency" vs. scholarship as "tech tree unlock."** DESIGN.md describes scholarship as both: you spend it to research specific connections (per-use cost) AND to unlock traversal technology tiers (permanent unlock). The scenario exposes a tension: if Tier 3 is a permanent unlock, then scholarship is a one-time gate. If it's per-use, then every Tier 3 traversal costs scholarship. These create very different economies. The per-use model makes scholarship the bottleneck of every route plan. The unlock model makes it an early-game gate that's irrelevant later.
- **LLM validation as "ground truth" vs. LLM validation as "probability."** The doc says "Players cannot fabricate connections. They either exist or they don't." But thematic resonance (Tier 3) is inherently subjective. Two different LLM sessions might disagree on whether a connection is valid. Is that acceptable variance, or does it undermine the "connections are real" axiom?

---

## Step 3: Traversal and Immune Response

**What happens narratively:**
The player chooses Route B. They fast-travel through the French travelogue and *Mysteries of Paris* without incident (low-readership nodes, tolerable vibe mismatch). But entering The Count of Monte Cristo triggers the immune system.

Sei Shonagon — a Heian-era Japanese court lady in 11th-century layered silk — arrives in a 19th-century French revenge melodrama. The immune system responds.

The text notices her. Not violently — Monte Cristo is a sprawling, cosmopolitan novel with characters from many nations. But Sei's temporal displacement (Condition: Displaced from the Seasons) creates friction. She is a thousand years wrong. Her edges shimmer. The text's immune response manifests as narrative pressure: minor characters begin to comment on "the foreign woman," carriages detour around her, servants close doors before she can enter.

Sei's Filter — "Things That Lose by Being Painted" — begins interacting with the text's own hierarchy of elegance. Parisian society in Monte Cristo is obsessed with rank and display. Sei's passive judgement aura either harmonizes with this (she's a court lady who understands hierarchy) or clashes with it (her hierarchy is aesthetic, theirs is monetary).

The player considers a Literal Metaphor: transforming Sei into a form the text will accept. A Japanese diplomat's wife, perhaps — there's historical precedent for Japanese delegations in 1840s Paris. The transformation would reduce immune response but cost scholarship and may not fully reverse.

**Mechanics invoked:**
- Immune system response (vibe mismatch assessment)
- Conditions interacting with immune systems (Displaced from the Seasons triggers detection)
- Filter interaction with host text (Sei's "Things That Lose by Being Painted" vs. Parisian society)
- Literal Metaphor transformation (cost, risk, reversibility)
- Passive Roll Skill: Aesthetic Resonance fires when Sei enters the text

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **How do Filters interact with immune systems when entering a text?** | **Tier 2, Q14** | Sei's Filter is "Things That Lose by Being Painted" — a passive aesthetic judgement aura. Does this Filter increase or decrease immune response? In a text obsessed with social hierarchy, Sei's aura could be compatible (she understands rank) or hostile (her criteria are aesthetic, not monetary). **The doc doesn't specify whether Filter/immune interactions are calculated, narratively adjudicated, or both.** |
| **What is the exact formula for immune system strength from readership?** | **Tier 2, Q8** | Monte Cristo is "Major" tier. How much immune resistance does "Major" actually mean? Is it a numeric threshold the d20 rolls against? A narrative intensity level for the LLM? Or a set of specific behaviors? |
| Can literal metaphor transformations stack? Is there a limit? | Tier 3, Literary Web Cluster | If Sei transforms into a Japanese diplomat's wife here, what happens if she needs to transform again at the next node? Does the residue from this transformation compound? |
| **How do battle-mode d20 rolls interact with the narrative resolution model?** | **Tier 1 Foundation, Q1** | Sei's Aesthetic Resonance (Passive) fires: d20 + WIS (+2). If she rolls 17+, she perceives Monte Cristo's deep structure — useful for navigation and extraction. If 1-9, she freezes, overwhelmed by sensory data. **But the battle narrator system prompt doesn't use d20 at all — it's pure narrative.** The Ginsfeld mission system uses d20 heavily. Which resolution model applies when entering a text for an extraction/recruitment mission? This is the single largest unresolved tension in the design. |

**Conflict between existing ideas:**
- **d20 resolution vs. pure narrative resolution.** The battle system prompt (Playtest 2) says "thematic resonance can override raw power" with no dice. The Ginsfeld mission system (Wednesday Group) uses d20 + stat mod with explicit success tiers. The extraction prompt (Playtest 1) is pure narrative with no dice at all. Three different playtest systems use three different resolution models. In this scenario, Sei is entering a text (extraction-adjacent), facing an immune response (literary-web mechanic), and may end up in combat with Redactors (battle-adjacent). **Which resolution model applies where?** The scenario can't proceed without answering Q1.
- **Immune system as "narrative friction" vs. immune system as "numeric gate."** The DESIGN.md vibe-check table describes immune responses as narrative states (no response / difficulty scaling / hard rejection / destruction). But the d20 Roll Skills treat everything as numeric checks. If immune response is narrative, the LLM decides the outcome. If numeric, Sei rolls Aesthetic Resonance against a target number derived from readership. These produce different gameplay.

---

## Step 4: The Recruitment

**What happens narratively:**
Inside Monte Cristo, the player locates Eugenie Danglars. She's in Chapter 96 — having fled her arranged marriage to Andrea Cavalcanti (who turned out to be the convict Benedetto). She and Louise d'Armilly have escaped dressed as men, heading for Rome. The text released her here: her fate is unresolved, her story thread dangles.

Sei approaches. Her Devastating Observation (Active Roll Skill, d20 + CHA) fires as she studies Eugenie — reading her character, motivations, and what she'd need to hear to agree to extraction.

Eugenie is not a passive recruit. She's a musician, an artist, a woman who chose freedom over an arranged marriage to a fraud. She has opinions. She left deliberately. She may not want to be "recruited" — she may want to be left alone on the road to Rome.

The Voynich Manuscript complicates things. As Sei's Artifact, it radiates incomprehensibility. Eugenie — a musician who deals in clarity and form — finds the Manuscript's presence unsettling. It makes her doubt her own legibility. Can she be read? Is she a character or a person?

Negative Capability (the Idea) helps. Sitting in doubt comfortably is exactly what this negotiation requires. There are no clear answers for Eugenie about what extraction means, where she'd go, or what she'd become. Negative Capability creates a space where that uncertainty is bearable rather than terrifying.

**Mechanics invoked:**
- Character recruitment (unresolved character, moderate difficulty)
- Active Roll Skill: Devastating Observation (d20 + CHA)
- Artifact influence on social interaction (Voynich Manuscript's effect on target)
- Idea field effect in non-combat context (Negative Capability stabilizing uncertainty)
- Text immune response to extraction (Monte Cristo losing a character)

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **How does drawing cards work mechanically?** | **Tier 2, Q13** | Extraction is described in Playtest 1 as a ritual. But recruitment (pulling a character out of a text they're already in) is different from extraction (pulling an essence from a book). Is recruitment a variant of extraction? A different mechanic entirely? The doc describes recruitment as scaling with difficulty factors but doesn't specify the actual mechanic. Does Sei roll something? Is it a social encounter resolved narratively? Or a multi-beat mission? |
| What happens to characters recruited from a node that is later destroyed? | Tier 3, Literary Web Cluster | If Eugenie is recruited from Monte Cristo, and Monte Cristo is later destroyed in a cascade, does Eugenie lose power? Does her connection to the source sever? Or is she free once recruited? |
| **Card destruction: permanent or recoverable?** | **Tier 1 Foundation, Q2** | If the recruitment fails — if the immune system catches them, or the Redactors arrive mid-extraction — could Sei be destroyed? If card destruction is permanent, this mission is existentially dangerous. If recoverable, it's costly but not fatal. **The player's strategic calculus changes entirely based on this answer.** |

**Conflict between existing ideas:**
- **Extraction as ritual vs. recruitment as social encounter.** The extraction playtest prompt treats card creation as a mystical, one-way process (the book doesn't resist, the ritual produces cards). But recruitment involves a sentient character who might refuse. The existing mechanics don't cover persuasion-based recruitment. Sei's Devastating Observation lets her read Eugenie, but there's no mechanic for actually convincing her. Is this a gap that needs filling, or does the LLM simply narrate the outcome based on the d20 read?
- **Artifact effects in non-combat contexts.** The Voynich Manuscript's core mechanic is "total resistance to interpretation; makes other cards doubt their legibility." This is designed for battle. But Sei is carrying it during a social negotiation. Does it still radiate incomprehensibility? If yes, it actively undermines the recruitment. If Artifact effects are battle-only, the doc doesn't say so — and the Ginsfeld Sessions imply Artifacts are always present.

---

## Step 5: The Opposition

**What happens narratively:**
The Redactors arrive. A three-person strike team: a leader, a tracker, and an erasure instrument (the Stylus). They have their own 72-hour mandate. They're not here to fight the player — they're here to erase Eugenie. The player is an obstacle, not a target.

But there's a constraint: both teams are inside Monte Cristo. Both teams must keep their activities below the immune system's detection threshold. Escalate too far and the text rejects everyone.

The Redactors' tracker detects Sei's presence — Sei's "Ink That Won't Dry" condition means she's been leaving annotations in the margins. The Marginalia haven't identified her yet, but the Redactors' tracker is specifically trained to find this kind of trace.

A confrontation is imminent, but the terms of engagement are shaped by the environment. This isn't an open battle — it's a covert operation inside a living text that will expel both sides if they're too loud.

**Mechanics invoked:**
- PvE combat within a shared node
- Immune-system-as-referee (conflict must stay below detection threshold)
- Organization capabilities (Redactor strike team composition and methods)
- Condition vulnerability (Sei's "Ink That Won't Dry" creates detectable trace)
- Action cards (does the player have any? how were they acquired?)

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **How are action cards acquired?** | **Tier 2, Q10** | The player may want to play a Dirty Tricks action card to sabotage the Redactors' tracker, or a Legal Action to challenge their mandate. But where did the player get these action cards? Were they earned through missions? Drawn from texts? The doc defines action card types and blowback but never explains how they enter the player's hand. **This is a core economy question that blocks the entire action card subsystem.** |
| How does the PvP immune-system-as-referee mechanic resolve edge cases? | Tier 3, Literary Web Cluster | If both sides are fighting covertly inside Monte Cristo, and both sides trigger the immune system, is the response symmetric? Or does the text favor whichever party is more compatible? Sei has moderate vibe mismatch (Japanese court lady in French romance). The Redactors are presumably designed to operate in any text. Does the immune system see them differently? |
| How do the Redactors decide which characters to erase vs. recover? | Tier 3, Organization Cluster | The Lamplighters want recovery. The Redactors want erasure. This creates a direct organizational conflict. Are the Redactors always antagonists, or can the player convince them to stand down? Does Sei's reputation with the Lamplighters carry any weight with the Redactors, or are they independent? |
| Can actors deliberately sabotage a battle? | Tier 3, Character Mechanics Cluster | If the confrontation turns into a battle, could Sei deliberately lose or withdraw to prevent immune detection? Is voluntary withdrawal a mechanic, or does the battle system always produce a winner/loser? |

**Conflict between existing ideas:**
- **Action cards as "typed but not defined until played" vs. action cards that are acquired, held, and managed.** DESIGN.md says action cards have point budgets visible before playing, which implies they exist as objects in the player's hand. But it also says they're "typed but not defined until played," which implies they're generated at play time. If they exist as holdable objects, the player needs an acquisition mechanic (Q10). If they're generated at play time, the player needs a resource or currency to generate them. These are different inventory models.
- **Immune-system-as-referee assumes symmetric information.** The PvP-within-node mechanic assumes both sides are equally subject to the immune system. But the Redactors are professional operators who work inside texts for a living. They should be better at avoiding immune detection than a player party. The design doesn't account for asymmetric immune expertise.

---

## Step 6: The Confrontation

**What happens narratively:**
The scenario reaches its crisis. The player's team (Sei + Voynich Manuscript + Negative Capability) faces the Redactor strike team inside Monte Cristo. The confrontation takes the form of a covert chase through the text — not a 5-phase battle, but something more surgical. The player must extract Eugenie while the Redactors try to erase her. Monte Cristo's immune system is the ticking clock: too much disturbance and both sides get expelled.

Sei uses Devastating Observation on the Redactor leader — reading their method, their timeline, their vulnerabilities. The Voynich Manuscript is deployed not as a weapon but as a smokescreen: its incomprehensibility creates narrative interference, making the Redactors' tracking harder. Negative Capability holds the space open — preventing the situation from collapsing into a binary fight.

The player may deploy an action card (if they have one): perhaps a Dirty Trick to feed the Redactors' tracker false margin annotations, drawing them away from Eugenie's real location.

**Mechanics invoked:**
- Encounter resolution (not a standard 5-phase battle — a covert operation)
- d20 resolution within a mission context (Ginsfeld-era mechanics)
- Artifact deployment in non-combat context
- Idea field effect under pressure
- Action card effects (if available)
- Blowback assessment (Dirty Trick blowback within a host text)
- Immune system as environmental constraint

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **How do battle-mode d20 rolls interact with the narrative resolution model?** | **Tier 1 Foundation, Q1** | This is not a standard battle. It's a covert extraction with opposition. Does it use 5-phase battle structure? Ginsfeld mission beats? Pure narrative? The answer determines the entire encounter design. **This question blocks this step completely.** |
| How does performer-modification math work? | Tier 3, Action Card Cluster | If Sei performs a Dirty Trick, her performer modification should shift the blowback. DESIGN.md says Scheherazade shifts blowback "relational." What does Sei's performer modification look like? The doc doesn't have per-Actor performer modification tables — it only gives examples for Ahab, Scheherazade, and Faust. |
| How do immune system responses interact with action cards? | Tier 3, Literary Web Cluster | If the player plays a Dirty Trick inside Monte Cristo, does the immune system treat it as hostile activity? Can action card blowback trigger immune response? If so, playing any action card inside a high-readership text is inherently risky — the blowback isn't just from the action, it's from the text itself. |

**Conflict between existing ideas:**
- **Multiple encounter types without a unified resolution framework.** The game now has: 5-phase narrated battles (Playtest 2), full-session battles within the parchment conceit (Playtest 3), extraction rituals (Playtest 1), and 20-beat mission encounters with d20 rolls (Ginsfeld Sessions). This scenario needs something that's none of those — a covert extraction under opposition with an environmental constraint. The design needs either (a) a unified resolution framework that handles all encounter types, or (b) explicit rules for which encounter type applies when.

---

## Step 7: Consequences

**What happens narratively:**
Assume the player succeeds. Eugenie is extracted. She becomes a new Actor in the player's hand, retaining her personality (musician, artist, freedom-seeker) and gaining a full character sheet (stats, Conditions, Roll Skills, Filter).

But consequences ripple:

**Card consequences:**
- Sei's "Ink That Won't Dry" condition may worsen — the Marginalia may have noticed the annotations left during the operation.
- The Voynich Manuscript's bond with Sei may strengthen (deployed creatively, in a way that honored its nature) or weaken (used as a tool, not respected as incomprehensible).
- Negative Capability remains unchanged — Ideas are weather, they don't accumulate history.
- Eugenie arrives with her own Conditions, Reputations, and the trauma of being nearly erased.

**Relationship consequences:**
- Sei and Eugenie develop initial affinity (Sei rescued her).
- The Redactor leader develops animosity toward the player.
- The Lamplighters' reputation entry for the player updates (mission completed).
- The Dockhands hear about it (they always hear about it).

**Node consequences:**
- Monte Cristo may be slightly destabilized by the extraction — losing a character, even an unresolved one, changes the text.
- The immune system may develop heightened vigilance toward future incursions.

**Strategic consequences:**
- Eugenie's connection to Monte Cristo creates a Tier 1 edge back to a Major node — strategically valuable.
- The Redactors now know the player exists and operates against their mandates.
- The Descenders or Unsilenced may notice the player has a new Actor extracted from a Major-tier text.

**Mechanics invoked:**
- Affinity/animosity accrual (new relationships created)
- Reputation updates across multiple organizations
- Card modification post-encounter (Conditions, bond strength)
- Node status changes (immune vigilance increase)
- Literary web edge creation (new Tier 1 connection)
- Faction AI awareness (strategic layer responds)

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **Do affinity/animosity decay or stack infinitely?** | **Tier 2, Q9** | Sei gains affinity toward Eugenie (+2 for winning together, from the relationship table in Section 2.2). The Redactor leader gains animosity toward the player. Do these persist forever? If stacking is infinite, repeated encounters create ever-intensifying relationships. If decay exists, long-term relationships stabilize. **This determines whether the game has relationship inflation.** |
| How much animosity accrues between opponents? | Tier 2, Q16 | The player and the Redactors opposed each other. How much animosity? The event table says animosity "scales by directness" but doesn't define the scale. |
| Can Conditions be cured, acquired, or transformed through play? | Tier 3, Character Mechanics Cluster | Can Sei's "Ink That Won't Dry" worsen from this mission? Can Eugenie arrive with a new Condition — something like "Nearly Erased" — that reflects her near-destruction? If Conditions are only assigned at creation, the game is less dynamic. If they can be acquired through play, every encounter can permanently change a character. |
| Do Filters ever change, or are they permanent? | Tier 3, Character Mechanics Cluster | Eugenie needs a Filter. Is it fixed at recruitment, or does it evolve based on her experiences? If Filters change, Eugenie's Filter might shift based on having been nearly erased and then saved. If permanent, it reflects only her source-text personality. |
| How do minion networks grow mechanically? | Tier 3, Game Arc Cluster | The Descenders notice the player's new acquisition. Do they respond by growing their own networks? What triggers minion network expansion — territory control, card count, time? |

**Conflict between existing ideas:**
- **"Affinity and animosity are independent tracks" vs. the event table's simple increments.** DESIGN.md says a card can have high affinity AND high animosity simultaneously. But the event table gives flat increments (+2 affinity for winning together, +1 animosity for losing together). Independent tracks with simple increments mean relationships drift toward extremes over time — both tracks only go up. There's no mechanic for reducing either track. Without decay or spending, every long-term relationship eventually maxes out both tracks.
- **Node consequences from extraction vs. "unresolved characters are released by the text."** The doc says unresolved characters are "loose threads that won't be fought for" by the immune system. But if extracting Eugenie destabilizes Monte Cristo, then the text IS affected by losing her. These statements are in tension: either unresolved characters are free (extraction is clean) or extraction has node consequences (the text loses something). The scenario needs one answer.

---

## Step 8: Strategic Aftermath

**What happens narratively:**
Back at Nevermind. The player reviews their position.

Eugenie Danglars is in the hand. She's an Actor with musical ability, social defiance, and a connection to one of the most heavily connected nodes in the literary web. Her Tier 1 edge back to Monte Cristo is a highway into the heart of French literature.

But the Redactors are now hostile. The Descenders have been expanding during the mission — they now control two more nodes than before. The Unsilenced have been consolidating. Reality bleed is progressing: the player notices a music school in their neighborhood has changed its name to something that sounds like "Danglars."

Sei Shonagon opens her pillow book and begins writing a new list: "Things That Become More Themselves After Being Rescued."

The player must decide: consolidate (rest, research, build defenses), expand (use the new Monte Cristo edge to push into French literature), or respond to faction moves (the Descenders are threatening a node that supplies scholarship).

**Mechanics invoked:**
- Strategic layer (faction AI moves, node control, territory assessment)
- Reality bleed (Stage: Mid — undeniable patterns)
- Scholarship economy (earned from mission, spent on research and traversal)
- Faction AI decision-making
- Long-term hand management (card upkeep, relationship management)

**Open questions surfaced:**

| Question | From Section 13 | Why it matters here |
|----------|-----------------|---------------------|
| **What's the endgame victory condition?** | **Tier 1 Foundation, Q6** | The player is making strategic decisions but doesn't know what they're trying to achieve. Control the most nodes? Defeat both factions? Survive until a specific trigger? Without a victory condition, the strategic layer is aimless. |
| How does Act 1 transition to Act 2? | Tier 3, Game Arc Cluster | We declared this is Act 2. But the transition mechanic is undefined. The player dispatched the Other Chooser — is that the trigger? A node count threshold? A narrative event? |
| How does reality bleed interact with action cards? | Tier 3, Game Arc Cluster | Reality bleed is manifesting. Can the player interact with it? Can they deploy action cards against reality-bleed phenomena? Or is reality bleed a one-way narrative escalation? |
| **What does "controlling" a node actually mean mechanically?** | **Tier 2, Q11** | The Descenders "control" two new nodes. What does that mean? Do they have garrisons inside the texts? Influence scores that accumulate? Ownership tokens? Can the player contest control without entering the node? The strategic layer depends entirely on this answer. |
| Can the player lose? What does it look like? | Tier 3, Game Arc Cluster | If the Descenders keep expanding and the player doesn't respond, what happens? Is there a fail state? A point of no return? Or does the game simply get harder? |

**Conflict between existing ideas:**
- **Strategic layer "runs at graph speed" vs. LLM-generated narrative.** Design Principle 30 says the strategic layer is graph operations on a fixed map — fast, cheap, computational. But faction AI moves are described narratively (the Descenders "building empires," minion networks expanding). If the strategic layer is truly graph operations, it needs numeric rules: nodes controlled, influence scores, resource flows. If it's LLM-narrated, it's expensive and potentially inconsistent. The scenario exposes this as an unresolved architectural question.
- **Reality bleed as "narrative decoration" vs. reality bleed as "gameplay mechanic."** The DESIGN.md describes reality bleed as atmospheric — synchronicities, patterns, merged surfaces. But if the player can't interact with it mechanically, it's just flavor text that the LLM generates. If it IS interactive, it needs rules. The scenario forces this choice: is the music school renaming itself something the player can investigate, or just color?

---

## Summary: Questions This Scenario Forces

### Foundation questions that block the scenario entirely:

1. **Q1: How do d20 rolls interact with narrative resolution?** — Blocks Steps 3, 4, 6. The scenario cannot run without knowing which resolution model applies to which encounter type.
2. **Q2: Card destruction — permanent or recoverable?** — Blocks Step 4. The player's risk calculus depends entirely on this.
3. **Q4: How does the LLM validate Tier 3 connections?** — Blocks Step 2. Route B depends on a Tier 3 connection.
4. **Q6: What's the endgame victory condition?** — Blocks Step 8. The strategic aftermath has no direction without it.

### Structural questions that significantly shape the scenario:

5. **Q8: Immune system formula from readership.** — Shapes Step 3 intensity.
6. **Q9: Affinity/animosity decay or stacking.** — Shapes Step 7 relationship economy.
7. **Q10: How are action cards acquired.** — Shapes Steps 5, 6.
8. **Q11: What does controlling a node mean.** — Shapes Step 8 strategic layer.
9. **Q14: Filter/immune system interaction.** — Shapes Step 3 immune response.

### Foundation questions NOT surfaced by this scenario (deferred):

5. **Q3: What is the exact cascade propagation model?** — This scenario mentions cascade risk (Step 4: "What happens to characters recruited from a node that is later destroyed?") but never forces cascade resolution because no node is actually destroyed. **A second vertical slice featuring a node destruction event would surface Q3.** Example: the Descenders destroy an obscure node to test cascade weapons, and the cascade threatens a node the player controls.

6. **Q5: Does the player have stats or a markdown file?** — This scenario treats the player as a strategic decision-maker who moves Actors like pieces. It never surfaces a moment where the player themselves would need to roll, have a Condition, or be affected by a Filter. **A second vertical slice featuring direct player interaction — entering a text personally, being targeted by an Archon, or experiencing reality bleed physically — would surface Q5.**

### Design tensions the scenario exposes:

| Tension | Where it bites |
|---------|---------------|
| d20 resolution vs. pure narrative resolution | Steps 3, 4, 6 |
| Scholarship as per-use cost vs. permanent unlock | Step 2 |
| LLM connection validation as strict vs. loose | Step 2 |
| Organizations as neutral infrastructure vs. aligned employers | Step 1 |
| Immune system as narrative friction vs. numeric gate | Step 3 |
| Extraction ritual vs. social recruitment | Step 4 |
| Action cards as holdable objects vs. generated at play time | Step 5 |
| Affinity/animosity independent tracks with no decay | Step 7 |
| Unresolved characters as "free" vs. extraction having node consequences | Step 7 |
| Strategic layer as graph operations vs. LLM narration | Step 8 |
| Reality bleed as atmosphere vs. interactive mechanic | Step 8 |
