# Script Doctor — Flag Library

This is the living library of red and green flags used by the Script Doctor to review World of Guttenberg game content. Flags are added through the review process and approved by the user. Each flag includes a description, a concrete example, and possible resolutions.

---

# Red Flags

---

## Red Flag: Beating a Dead Horse

In long scenes of dialogue or narration, characters surface the same points or observations repeatedly, often as if each recurrence is a new revelation. The text circles without advancing.

### RF Example

She reminded Bob of the girl in the ice cream truck, the one he would never see again, whose story he would never know. But Scheherazade knew how Bob's story went because she herself had told a thousand and one versions.

One beat later: There was a knock at the door, interrupting Scheherazade's conversation with Bob as they both turned. And there it was, she thought, after telling a thousand and one stories, she had a sense that whoever was there, it would be yet another character. For Bob, the knock at the door sent a jolt of realization, reminding him of the girl in the ice cream truck, from so long ago. Had she also once knocked on doors?

### Possible Resolutions

#### Resolution One

Replace the repeated observation with a physical gesture or action that carries the emotional weight without restating the exposition.

#### Resolution One Example

There was a knock at the door. Bob flinched at the sound. Scheherazade looked away, wary.

#### Resolution Two

If the repetition serves a thematic purpose (e.g., obsession, recursion), make the repetition itself the point — escalate or distort it rather than restating it flat.

#### Resolution Two Example

The knock came. Bob thought of the ice cream truck again, but this time the girl was older, and she was knocking too, and the sound was the same sound, and he understood that every door he'd ever answered had been the same door.

---

## Red Flag: Filter Is an Action

A Filter is written as something the character actively does rather than a passive environmental effect. Filters are "personality as weather" — always on, never chosen, never performed. If it has a verb with the character as subject, it's probably a skill, not a filter.

### RF Example

Scheherazade tells a story that captivates everyone in the room, making them forget what they were arguing about.

### Possible Resolutions

#### Resolution One

Rewrite the filter as an ambient change that happens in the character's presence without conscious effort. Describe the effect on the environment, not the character's action.

#### Resolution One Example

In Scheherazade's presence, conversations acquire narrative structure without anyone intending it. Arguments develop subplots. Facts soften into anecdotes. Leaving feels like closing a novel mid-chapter.

---

## Red Flag: Exposition Dump

A character delivers information in designer-voice rather than character-voice, breaking the graphic novel constraint. The character speaks in explanations rather than dialogue, or provides backstory in a way that sounds like a wiki article rather than a person talking.

### RF Example

"Let me explain," said Faust. "The Bindery is an organization that specializes in artifact manipulation. They were founded during the early period of the literary web's expansion and have since become one of the six major factions. Their primary interest in me stems from the contract I signed with Mephistopheles, which they view as both an impressive feat of magical binding and a potential threat to the stability of textual barriers."

### Possible Resolutions

#### Resolution One

Filter the information through the character's Game Traits. A Low Verbosity character communicates in fragments. A High Honesty character is blunt. A Low Honesty character misleads. Let the traits shape delivery.

#### Resolution One Example

"The Bindery." Faust's mouth curved without warmth. "They collect things. Contracts, especially. Mine interests them." He turned his palm up, studied the lines. "They should be more careful about what they file."

#### Resolution Two

Replace the dialogue with action or implication. Show the relationship through behavior instead of explaining it.

#### Resolution Two Example

The Bindery's courier arrived at dusk with a black envelope and the kind of deference usually reserved for unexploded ordnance. Faust read the terms without sitting down. He signed with their pen and his own ink — an old habit that made the courier's hand shake.

---

## Red Flag: Knowledge Bleed

A character knows things from outside their source text without narrative justification. The character references events, people, or concepts they shouldn't have access to based on their literary origin and in-game experience.

### RF Example

Scheherazade glanced at the holographic display and sighed. "This encryption protocol reminds me of the time I hacked into the Lamplighter network using a modified RSA algorithm."

### Possible Resolutions

#### Resolution One

Replace the out-of-context knowledge with the character's native frame of reference. Let them interpret unfamiliar things through their own literary lens.

#### Resolution One Example

Scheherazade studied the shifting symbols on the display. She couldn't read them, but she recognized the shape of a lock when she saw one — every story she'd ever told had a door in it. "This wants a key," she said. "Or a better story than the one it's telling itself."

---

## Red Flag: Graphic Novel Constraint Violated

The prose is baggy, summarizing, or over-describing where it should be tight. The graphic novel constraint says every sentence earns its space — think in panels, not paragraphs. If you can hear the narrator droning, the constraint is broken.

### RF Example

The room was very large and had high ceilings that were decorated with intricate patterns. There were several pieces of furniture arranged around the space, including a mahogany desk that was placed near the window, which had curtains that were slightly parted to let in the afternoon light. On the desk, there were various papers and a pen holder that contained three pens of different colors.

### Possible Resolutions

#### Resolution One

Cut to the one or two details that carry the scene's emotional or narrative weight. Let the reader build the rest.

#### Resolution One Example

Mahogany desk, afternoon light, three pens arranged like a jury. Someone had been here recently and left in a hurry.

#### Resolution Two

If the environment matters mechanically (it's an Arena, it contains a clue), describe only what the characters would notice given their abilities and conditions.

#### Resolution Two Example

Faust noticed the contract first — half-signed, ink still wet. The room's other details were furniture.

---

## Red Flag: LLM Sympathy Bias

Characters resolve conflicts too easily, bond too quickly, or find common ground where the narrative should produce friction. The LLM's default tendency toward helpfulness and resolution bleeds into character behavior, flattening dramatic tension.

### RF Example

Ahab and Scheherazade eyed each other warily for a moment, but then Ahab smiled and said, "You know, we're not so different, you and I. We both pursue our quarry with relentless determination." Scheherazade nodded warmly. "That's very true, Captain. Perhaps we can help each other."

### Possible Resolutions

#### Resolution One

Honor the characters' actual dispositions. Characters with genuine philosophical incompatibilities should remain incompatible. Let tension persist. Let scenes end unresolved.

#### Resolution One Example

Ahab studied her the way he studied weather systems — for signs of what was coming. Scheherazade studied him back, saw the monomania, and began building a story around it without his permission. Neither of them would have called this a conversation.

#### Resolution Two

If characters must cooperate, make the cooperation transactional and uncomfortable. Alliances should have visible seams.

#### Resolution Two Example

"I need passage through the Melville corridor," Scheherazade said. "You need someone who can talk the Dockhands into opening the barrier." She didn't add the rest: that she planned to tell the Dockhands three different versions of why Ahab was there, and that all three would be true.

---

## Red Flag: Instruction Forward-Leak

In session outputs, early randomized or generative steps produce results that are suspiciously well-tailored to later steps. The LLM has read ahead in the prompt and shaped "random" outputs to fit the expected narrative, undermining genuine emergence.

### RF Example

During card extraction, the player draws "A Compass That Points to Regret" as a random Artifact. Three phases later, the scenario happens to center on a character who must navigate a labyrinth of past decisions, making the compass a perfect plot device — when it should have been a constraint to work around.

### Possible Resolutions

#### Resolution One

Check whether the "random" output would make equal sense if the later prompt steps were different. If the output only works because of what comes next, the leak is confirmed. Regenerate with explicit instruction to ignore downstream context.

#### Resolution Two

Design prompts so that generative steps are isolated — the LLM generates cards before receiving the scenario brief, or uses a separate API call for randomization.

---

## Red Flag: Roll Skill Missing Cost

A Roll Skill is defined without a Cost field. Per the design doc, "skills are never free" — every skill has a price, even on success. The cost should be thematically connected to the skill and ideally ironic.

### RF Example

### Devastating Observation `Active`
- **Trigger:** Sei chooses to study a person closely
- **Mechanic:** d20 + CHA (+4)

| Roll | Outcome |
|------|---------|
| 18+ | She reads them completely — motivations, fears, the thing they're hiding. |
| 10-17 | She reads the surface accurately and catches one deeper layer. |
| 1-9 | She misreads them, projecting her own assumptions. |

### Possible Resolutions

#### Resolution One

Add a cost that creates a meaningful narrative consequence connected to the skill's nature. Good costs are ironic, permanent, or socially expensive.

#### Resolution One Example

- **Cost:** The target always knows they've been studied. Sei's gaze is not subtle. Every person she reads becomes someone who knows she reads people — and adjusts their behavior accordingly. Her observation changes what she's observing.

---

## Red Flag: Condition Missing Metadata

A Condition is written without the required Duration, Visibility, and Observability fields. These aren't decorative — they determine how the condition functions mechanically in encounters. A condition without metadata is just flavor text.

### RF Example

### The Broken Sword
Yvain carries a sword that cracked during a duel with an unworthy opponent. He feels diminished by it.

### Possible Resolutions

#### Resolution One

Add all three metadata fields. Think about who can perceive this condition and for how long.

#### Resolution One Example

### The Broken Sword
- **Duration:** Until he finds a worthy opponent to re-temper it
- **Visibility:** Public
- **Observability:** o2o

Yvain carries a sword that cracked during a duel with an unworthy opponent. The crack is visible — a jagged line down the blade that catches light wrong. He fights with it anyway. Others notice because he grips the hilt differently, compensating for a fracture that goes deeper than metal.

---

## Red Flag: Terminology Drift

The text uses a non-canonical term where a reserved term exists in the taxonomy. "Power" instead of "Roll Skill," "trait" when referring to a "Condition," "team" when referring to a specific faction name. Terminology drift makes documents harder to search and erodes the game's conceptual precision.

### RF Example

Faust activated his special power to analyze the contract, using his high intelligence trait to gain an advantage.

### Possible Resolutions

#### Resolution One

Replace drifted terms with their canonical equivalents from taxonomy.md.

#### Resolution One Example

Faust activated Read the Contract, his INT-based Roll Skill, to analyze the binding.

---

## Red Flag: Game Traits Not Reflected

A character's behavior in narration contradicts their Game Traits profile. A Low Verbosity character delivers monologues. A High Honesty character lies casually. A Low Game Savvy character makes sophisticated mechanical plays.

### RF Example

Sei Shonagon (Verbosity: Low) leaned forward and began a lengthy explanation. "You see, the way the literary web functions is quite fascinating. The interconnections between texts create a kind of neural network where ideas propagate through proximity and thematic resonance. What most people don't realize is that the Marginalia have been tracking these propagation patterns for centuries, building what amounts to a map of influence that extends across..."

### Possible Resolutions

#### Resolution One

Rewrite the dialogue to match the character's trait levels. Low Verbosity characters communicate in fragments, silences, and looks. Their information comes in compressed bursts.

#### Resolution One Example

Sei glanced at the web diagram, then at him. "The Marginalia have a map." She underlined a connection with her fingernail. "This one's wrong." She sat back, done.

---

## Red Flag: Reputation Contradiction

A character's Reputation with an organization contradicts other information in the same document or across related documents. They're described as unknown to a faction but referenced in that faction's files, or their reputation spread level doesn't match the narrative.

### RF Example

In Reputations: "The Dockhands have never heard of Faust." In the narrative two pages later: "The Dockhand foreman recognized Faust immediately and waved him through the checkpoint."

### Possible Resolutions

#### Resolution One

Reconcile by updating the reputation to match the narrative, or vice versa. Decide which version is canonical and fix the other.

#### Resolution One Example

Update the Reputation to reflect the foreman's recognition, or rewrite the narrative so the foreman doesn't recognize Faust. Don't leave both versions standing.

---

## Red Flag: Pre-Ginsfeld Format

A card format, character description, or playtest prompt uses the old format (simple 1-10 stats, three-exchange battles, alignment axes) instead of the current Ginsfeld-era standard (D&D-style ability scores, Game Traits, Conditions with metadata, Roll Skills with d20 mechanics, Filters, Reputations).

### RF Example

**Strength:** 7/10
**Intelligence:** 9/10
**Charisma:** 6/10
**Alignment:** Wonder

### Possible Resolutions

#### Resolution One

Convert to Ginsfeld-era format using the current character template (_template.md). Map old stats to ability scores, add Game Traits, write Conditions, design Roll Skills, compose a Filter.

---

## Red Flag: Orphaned Thread

A narrative thread, character motivation, or plot element is introduced and then never referenced again. Setup without payoff. Different from intentional ambiguity — an orphaned thread feels forgotten rather than mysterious.

### RF Example

During recruiting, Scheherazade mentions a story she's been saving "for the one who can hear the ending." This is never referenced again during the shopping trip, the big show, or the aftermath. No character asks about it. She never deploys it.

### Possible Resolutions

#### Resolution One

Pay it off. Circle back to the thread at a dramatically appropriate moment.

#### Resolution Two

Remove the setup if the payoff doesn't serve the session. Not every hook needs to land — but hooks that are introduced with weight and then vanish feel like bugs.

---

## Red Flag: Arena as Wallpaper

The Arena (battle environment) is described but never interacts with the combatants. It's scenery instead of a participant. Per the design doc, the Arena should be a "third character" that influences the battle outcome.

### RF Example

The battle took place in an abandoned library. Bookshelves lined the walls. Dust motes floated in the air. Faust and Scheherazade fought in the center of the room.

### Possible Resolutions

#### Resolution One

Give the Arena agency. Let it respond to the battle, constrain movement, offer opportunities, or force choices. The environment should exert mechanical pressure.

#### Resolution One Example

The battle took place in an abandoned library where the shelves had rearranged themselves by argument instead of alphabet — books that disagreed with each other had migrated to opposite walls. When Scheherazade's Filter activated, the shelves began to rotate, stories grouping by narrative structure. Faust's cost analysis dissolved the card catalog into a spreadsheet of debts. The library couldn't decide what it was anymore, and that indecision became the battlefield.

---

# Green Flags

---

## Green Flag: Emergent Filter Interaction

Two or more Filters interact to produce an unplanned social or environmental effect that neither character intended. This is the primary source of emergent gameplay per the design doc. When Filter interactions happen naturally, the game is working.

### GF Example

Sei's "Things That Lose by Being Painted" and Yvain's "The Oath That Echoes" overlap during a team meeting. Everyone in the room simultaneously feels judged for their aesthetic choices and morally weighted for their promises. The liar in the group can't speak. The artist in the group can't stop. Neither Sei nor Yvain intended this.

### Why This Matters

Filter interactions are the beating heart of the game's emergent design. They create social dynamics that no one authored, producing moments of genuine surprise in a system powered by an LLM that usually defaults to expected outcomes.

### How to Reproduce

Place characters with complementary or contradictory Filters in tight social spaces with stakes. Let the Filters run without narrator intervention. Describe the environmental effects rather than the characters' intentions.

---

## Green Flag: Cost Creates Irony

A Roll Skill's cost feeds back into the character's arc in a way that's thematically resonant and narratively painful. The cost of success is the thing the character most needs or most fears. Good costs make players wince and then nod.

### GF Example

Faust's "Read the Contract" costs him future access — every system he decodes remembers being decoded, and texts become harder to re-enter. The man who sold his soul for knowledge is slowly being locked out of knowledge. The more he reads, the less he can read.

### Why This Matters

Ironic costs turn game mechanics into character development. They create the kind of dramatic tension that makes players feel something, which is the entire point of a narrative game.

### How to Reproduce

When designing a Roll Skill cost, ask: "What would this character pay anything to avoid losing?" Then make them pay exactly that, in small installments, every time they use their best ability.

---

## Green Flag: Condition Constrains Behavior

A Condition creates a genuine mechanical restriction on how a character can act, forcing the player or narrator to work around it rather than through it. The Condition isn't decorative — it shapes decisions.

### GF Example

Scheherazade's "The Unfinished Sentence" — she never finishes. Not stories, not sentences, not gestures. This isn't flavor text; it mechanically prevents her from delivering information cleanly. Everything she communicates arrives as implication, creating information asymmetry that other characters must work to resolve.

### Why This Matters

Conditions that actually constrain behavior are rare and valuable. Most conditions in games are either buffs, debuffs, or flavor text. A condition that forces the narrative to bend around it is doing real work.

### How to Reproduce

Write conditions that make the character's default mode of operation unavailable. If the character's instinct is to explain, make them unable to finish explanations. If their instinct is to fight, make fighting cost them something they care about. The constraint should feel like a character trait, not a punishment.

---

## Green Flag: Character Voice Infects Narration

The character's voice is so distinctive that it begins to affect the narration around them — the prose style shifts when they're present, descriptions take on their worldview, even stage directions start sounding like them.

### GF Example

From Faust's character profile: "Not evil, exactly, but encumbered. Like standing next to someone carrying an invisible suitcase full of lead." The narration has absorbed Faust's transactional worldview — even the description of how others perceive him is framed in terms of weight and cost.

### Why This Matters

When character voice infects narration, it means the character has achieved true distinctiveness. The LLM is generating prose that sounds like a specific person rather than a generic narrator. This is exceptionally hard to achieve and should be celebrated when it happens.

### How to Reproduce

Study the character's Game Traits and Filter, then let those shape not just dialogue but description. A High Verbosity character's scenes should be more ornate. A Low Sensitivity character's scenes should be sparse and unsentimental. The world should look different through their eyes, and the prose should reflect that.

---

## Green Flag: Arena as Third Character

The Arena actively influences the battle outcome, responding to combatants' actions, creating constraints, and forcing choices. The environment isn't scenery — it's a participant with its own logic.

### GF Example

In the Dracula vs. Zhivago battle, a stopped clock in a train station became the pivot of the entire encounter when the Dutch sheet music restarted it. The Arena didn't just host the fight — it decided it.

### Why This Matters

When the Arena acts as a third character, battles become unpredictable and environment-specific. Two characters fighting in a library produce a completely different battle than the same two characters fighting in a train station. The Arena becomes a source of emergence.

### How to Reproduce

Give the Arena one active property — something it does in response to the battle. A library that rearranges itself. A clock that keeps different time. A garden that grows toward the winner. Then let the combatants' Filters interact with that property.

---

## Green Flag: Single Sentence Carries a Scene

One sentence does the work of a paragraph. It advances plot, reveals character, establishes tone, and earns its place so thoroughly that removing it would collapse the scene. Peak graphic novel discipline.

### GF Example

"She fights with unfinished sentences." — From Scheherazade's description. This is character, mechanic, voice, and threat in five words.

### Why This Matters

This is what the graphic novel constraint is for. When a single sentence carries an entire scene, the writing has achieved the density the game demands. These sentences are proof the constraint is producing better work, not just shorter work.

### How to Reproduce

Write the scene at full length first. Then cut until it breaks. The sentence that survived cutting is the one that carries the scene.

---

## Green Flag: Thematic Resonance Overrides Stats

In battle or encounter resolution, the outcome is determined by thematic logic rather than raw stat comparison, and it feels earned rather than arbitrary. The narrative reason for winning is more compelling than the mechanical reason.

### GF Example

Scheherazade (STR 8) defeats a physically superior opponent not by overpowering them but by suspending the fight inside a story — the battle doesn't end because the opponent needs to know what happens next. Her CHA-based skill creates a narrative trap that STR can't escape.

### Why This Matters

This is the game's thesis in action: thematic resonance matters more than raw stats. When it works, it validates the entire design. When it doesn't (when stats just override narrative), the game feels like a worse version of D&D.

### How to Reproduce

Before resolving a battle, ask: "What is this fight actually about?" The character whose theme best answers that question should have a meaningful advantage, even if their stats are worse. Design encounters where the thematic question is clear.

---

## Green Flag: Information Asymmetry Creates Tension

Characters have genuinely different levels of knowledge about a situation, and the tension comes from who knows what — not from external threats. The audience knows more than any single character, creating dramatic irony.

### GF Example

During a mission, Faust has decoded the contract governing the target text but hasn't told the team what he found (Low Honesty). Scheherazade suspects he's holding back but can't finish the question (The Unfinished Sentence). The player watching knows both things. The scene is tense not because of danger, but because of information distribution.

### Why This Matters

Information asymmetry is cheaper to produce than physical danger and often more engaging. It emerges naturally from Game Traits (Honesty level) and Conditions (visibility, observability) if those systems are working correctly.

### How to Reproduce

Give each character a piece of information the others don't have. Give at least one character a reason not to share (Low Honesty, a Private Condition, a Reputation they're protecting). Let the scene play out with these asymmetries intact rather than resolving them quickly.

---

## Green Flag: Moment Surprises the Designer

A battle, encounter, or interaction produces a narrative moment that wasn't planned or expected — the LLM generated something that surprised even the person who wrote the prompt. Genuine emergence from a generative system.

### GF Example

During a playtest, a randomly drawn Artifact (a child's primer) was selected by Scheherazade not for strategic advantage but because she wanted to hold something with an ending. This wasn't in the prompt. The LLM generated a character motivation that was thematically perfect and emotionally resonant, and no one asked for it.

### Why This Matters

This is the ultimate proof of concept. If the game can surprise its own designer, it's generating genuine narrative value rather than executing scripts. These moments should be documented, studied, and protected in any revision.

### How to Reproduce

You can't — that's the point. But you can create conditions where it's more likely: give characters genuine freedom of choice, don't over-constrain outcomes, let Filters and Conditions interact without narrator intervention, and leave space in the prompt for the LLM to discover something.
