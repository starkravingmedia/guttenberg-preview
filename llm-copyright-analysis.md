# LLM, Copyright, and the Guttenberg Engine

*A structured analysis of copyright implications for World of Guttenberg, derived from a conversation exploring the full gradient from player-generated content to AI-generated content at scale.*

---

## 1. The Foundational Clarification

World of Guttenberg's design documents reference copyrighted works — Neuromancer, Circe, le Carré, Sanderson — as illustrative examples of how narrative, influence, and literary connection work. These references are design language, not game content. The game does not require any copyrighted text to function. All playable content draws from public domain literature.

---

## 2. The Gradient: From the Banal to the Absurd

The copyright landscape for AI-generated content is best understood not as a set of bright lines but as a continuous gradient. Each step below is a natural escalation of the same impulse — a fan engaging with material they love using the tools available to them. At no point does the *kind* of act change. Only the degree.

### Step 1: The Character Name

A player logs into an MMO and creates a character named "BilboFromBagEnd." This is a clear reference to Tolkien. No laws broken. The player typed a name into a text field. The game publisher (Sony, in this example) provided the tool. The player made the choice.

### Step 2: The Building Name

The player builds a structure and names it "Hobbit Hole." Still a reference. Still just a player using a text field. Still fine. Sony is still just the platform.

### Step 3: The Quoted Line

The player puts a sign on the building: "In a hole in the ground, there lived a hobbit..." Now the player is quoting Tolkien verbatim. Technically reproducing copyrighted text. But it's one sentence, on a sign, in a game. Nobody's going to the Tolkien estate over this. Sony remains the platform.

### Step 4: The Pirated Text

The player puts a full pirated copy of The Hobbit inside an in-game container. This is clearly over the line — reproduction and distribution of a copyrighted work. But even here, Sony is still the platform. They provided a chest and a text field. Their exposure is a DMCA takedown notice, not a lawsuit. The player did this, not Sony.

### Step 5: The Fan Fiction

The player writes original fan fiction about Aragorn and an Ent. Uploads it into the game. This is technically unauthorized derivative work, but fan fiction is a tolerated gray area — legally vulnerable in theory, practically safe as long as it's not sold and doesn't harm the market for the original. The player wrote it. Sony hosted it. The distinction between creator and platform holds.

### Step 6: The Reddit Novella

The player publishes the fan fiction on Reddit. It grows to novella length. Still fan fiction, still tolerated, still the player's creative work. The Tolkien estate isn't suing fan fiction writers on Reddit.

### Step 7: The Public Domain Upload

The player places their fan fiction into the public domain and uploads it to Project Gutenberg (hypothetically). Now the container is open — the player has released their rights to the text — but the Tolkien IP inside it was never theirs to release. They've open-sourced a container that holds someone else's characters.

### The AI-Generated Image (Parallel Track)

At any point along this gradient, the player could also use an AI image generation tool to create a picture of Mordor in the style of Ralph Steadman. Print it and hang it on the wall — fine. Put it in a digital frame inside the game — also fine. The player used a tool to create something new. The AI's training data included Steadman's work and Tolkien imagery, but the output is a new image, not a reproduction.

---

## 3. The Key Insight: No Bright Line

At no point in this gradient does the *kind* of act change. Every step is a fan engaging with material they love, using available tools, producing content that ranges from a simple reference to a full creative work. The law wants bright lines, but the gradient doesn't have any — just a continuous slope from "obviously fine" to "obviously problematic" with a vast middle where most interesting activity happens.

---

## 4. Assholes Scale: The Industrial Fan Fiction Problem

The gradient becomes a copyright concern not through any single act but through scale.

A player who loves Brandon Sanderson runs OpenAI and a local DeepSeek model around the clock, generating Sanderson fan fiction for personal consumption. This player isn't breaking any laws — they're using tools to create derivative content for personal use, same as drawing Aragorn in a sketchbook. The copyright exposure on the LLM's training data belongs to the model providers, not the consumer.

But this player is also a Guttenberg player. The game's Tier 4 "engineered connections" mechanic rewards players for creating new texts that extend the literary web. The player realizes they can feed AI-generated content into the system — declare it public domain, upload it, create new nodes on the literary web. One player doing this is a curiosity. A thousand players doing this floods the literary web with AI-generated content containing derivative elements from copyrighted works, all technically "public domain" containers with someone else's IP inside.

The game's design creates structural incentive for exactly this behavior. The literary web rewards discovery. Tier 4 connections reward creation. The LLM makes creation cheap. Cheap creation plus strategic incentive plus a public domain upload pipeline equals a literary web full of gray-area content — not because anyone set out to infringe, but because the system's incentive structure makes it the path of least resistance.

**"Never ask assholes on the internet 'why would you want to?' and come away with an answer that makes you feel good about humanity."** The question is never whether a reasonable person would do this. It's what happens when someone does it because they can.

---

## 5. The Self-Interested Defense

The copyright problem and the game design problem turn out to be the same problem.

If a player can flood the literary web with AI-generated content at scale, they're not just creating copyright gray areas — they're breaking the game. The literary web has value because its connections are real: validated literary influence, actual historical relationships between texts, genuine scholarship. That's the core premise. The weapon is scholarship. The moment someone can generate a thousand fake nodes and inject them, scholarship stops mattering. The strategic advantage shifts from "who read the most" to "who generated the most."

Protection of the game's integrity requires the same gates that protect against copyright exposure:

- Content entering the shared literary web must be vetted
- The vetting process that ensures quality is the same process that catches IP problems
- The game's "immune system" concept isn't just a mechanic — it's an actual architectural requirement

The defense isn't altruistic. It's selfish. The game breaks before the law does.

---

## 6. The Gutenberg Revelation

Project Gutenberg is not a data dependency. It's a thematic boundary.

There is nothing meaningful in Project Gutenberg that the LLM does not already know. Downloading 70,000 texts from Gutenberg and feeding them to an LLM is like No Man's Sky announcing 70,000 new planets in an infinite universe — half of which were already in the game. The LLM has already read Dumas, Shakespeare, Ovid, and everything else in the catalog. It learned them during training alongside everything else it read.

This means the clean copyright narrative — "public domain texts go in, original narration comes out" — was never quite accurate. The texts don't "go in." The LLM already has them. And the LLM learned them in the same training process that ingested copyrighted works. There is no partition inside the model between "things learned from public domain texts" and "things learned from copyrighted texts." When the engine narrates a battle between Scheherazade and Ahab, the output comes from the totality of the model's training, not from a clean public domain pipeline.

Gutenberg's role is not as a data source but as a *fence* — a curated list that constrains the game to defensible ground. The list is the license, not the library.

---

## 7. The Platform Architecture

With this understanding, the architecture reframes entirely.

World of Guttenberg is not a game that uses public domain texts as source material. It is a platform — a text-based virtual tabletop where the table is made of language. The game system (cards, literary web, immune systems, cascade mechanics, battle phases, prompt templates) is the equivalent of the d20 Open Game License: an open engine that players pour content into.

### The d20 Analogy

The d20 system meant Wizards of the Coast wouldn't come after a publisher for using their dice mechanics. But if that publisher filled the mechanics with Tom Clancy characters, Tom Clancy would. The mechanics were open. The content was the publisher's responsibility.

In Guttenberg, the relationship is inverted: the content is open (public domain literature) but the engine (the LLM) has messy provenance. The LLM learned its craft from copyrighted training data. However, craft isn't copyrightable. Style isn't copyrightable. The ability to write well because you read widely isn't copyrightable. It never has been — for humans or machines.

### The Roll20 Analogy

The critical architectural decision: the platform does not provide the LLM. Players bring their own API keys — their own Claude, OpenAI, or local model. The platform provides the game system: prompt templates, card mechanics, literary web structure, immune system logic, battle phase structure. The platform shapes the *form* of the output. The player's LLM provides the *substance*.

When a player's LLM generates narration, it runs on the player's API key, paid for by the player's tokens, on the player's account. The platform is the table. The player's LLM is the DM. The platform didn't generate a word of the content.

This makes the platform radically not the author of anything that comes out. The copyright exposure on the LLM's training data belongs to the model provider. The copyright exposure on what the player chooses to generate belongs to the player. The game system — prompts, card taxonomy, literary web mechanics, immune system logic — is original IP, clean and owned by the platform.

---

## 8. The Bug Becomes a Feature

The LLM's tendency to draw on copyrighted training data — the thing that initially appeared to be the core liability problem — is actually what makes the game work.

When a player enters the Count of Monte Cristo, the narration is rich because the model didn't just learn from Dumas. It learned from every critical analysis of Dumas, every adaptation, every novel Dumas influenced, every novel that influenced Dumas. The "copyrighted training data" isn't contamination. It's what makes the literary web feel real, gives the immune system concept teeth, and allows a battle between Scheherazade and Ahab to read like literature rather than procedural output.

Because the platform is the table and not the engine, this isn't a bug to suppress. The player brought their own LLM. That LLM's deep literacy — the sum total of everything it was trained on — is what the player is paying their API provider for. The platform gives it structure. The LLM's training gives it substance.

The same "problem" that makes copyright lawyers nervous is what produces moments like the Dutch sheet music restarting the stopped clock to defeat Dracula. That didn't come from a public domain text. It came from a model that understands music, time, philosophy, narrative structure, and Dracula — all at once — because it read everything.

---

## 9. The Three-Tier Business Model

The platform architecture resolves into three tiers, each solving the copyright question differently.

### Free Tier: The Open Table

Bring your own API key. Play in the literary sandbox with the Guttenberg game system. The engine gives you the d20 — card mechanics, literary web structure, immune systems, battle phases, prompt templates. Your LLM generates everything on the fly from its own training data. Quality varies. Sometimes transcendent, sometimes the DM improvises something weird. That's the tabletop experience. The copyright exposure is between the player, their LLM provider, and whatever they choose to generate.

### Premium Modules: The Clean Pipeline

This is where the platform actually uses Project Gutenberg texts. Downloaded, processed through a proprietary pipeline, playtested across millions of scenarios computationally. The result: curated, polished modules — pre-built maps, architectural drawings of battle spaces, theme music, narration, art. "The Count of Monte Cristo: Enhanced Edition." Sold in a subscription content library.

This content is bulletproof. The pipeline starts from verified public domain text. The processing is original. The maps, art, music, and curated scenarios are original creative work. Every piece of the pipeline is clean.

### Community Marketplace

Players create their own content — modules, scenarios, connections, art, maps. The platform provides the storefront and runs submissions through a copyright checker before they go live. Clean content gets posted. Creators who sell and promote through the marketplace give the platform a cut.

The marketplace solves the "assholes scale" problem. Players can generate whatever they want with their own API keys on the free tier. But the moment they want to share content through the marketplace, it hits the copyright filter. AI-generated Sanderson fanfic doesn't pass. A carefully researched module on a genuine public domain text with original assets does. The vetting process that protects against legal exposure is the same process that protects quality.

---

## 10. The Invitation to Living Authors

The ultimate realization: the platform that starts with public domain texts is actually an *invitation* to living authors.

A thriving community of engaged, literate readers — people who form book clubs around obscure texts, map literary connections for strategic advantage, read as gameplay — is not a copyright threat to a living author. It's an audience. A self-selecting, deeply engaged audience doing for fun what marketing teams spend millions trying to make people do: deeply engaging with texts.

The pitch to any author: "Want to release your books as enhanced modules on the Guttenberg Engine? We'll run your texts through our pipeline, playtest millions of scenarios, build maps and art and battle spaces, package it as a premium experience. Your readers get to play inside your books. You get a cut of every subscription."

This doesn't even require an explicit deal. An author could create content, upload it to the marketplace, tweet about it, and bring an enormous audience to the platform overnight. The platform benefits, the author benefits, the players benefit. The incentive structure is aligned at every level. Nobody gets screwed. Everybody gets what they want.

### The New Author Opportunity

For unknown authors, the problem has never been writing the book or even distributing it. It's getting anyone to care. On this platform, the community has a *structural incentive* to discover and engage with books nobody else has read. Unexplored books are unmapped nodes. Low readership means weak immune systems. Unique content means novel extraction opportunities. Obscurity, which is death on every other publishing platform, is strategic value here.

A debut novelist can run their manuscript through the same pipeline that processes Dumas. The free-chapter-then-buy model lets players enter the world, meet the characters, start building connections — then purchase the full book to go deeper. The game becomes a reader acquisition engine for authors.

---

## 11. Summary of Copyright Positions by Tier

| Layer | Who Bears Copyright Exposure | Why |
|-------|------------------------------|-----|
| LLM training data | Model providers (Anthropic, OpenAI, etc.) | They built the model from the training corpus. Active litigation exists. Not the platform's fight. |
| Free tier gameplay | The player | Player brings own API key, generates own content. Platform provides game mechanics only. |
| Premium modules | Nobody (clean) | Pipeline starts from public domain text. All generated assets are original creative work. |
| Marketplace content | The creator, filtered by the platform | Creators submit content. Platform runs copyright checks. Infringing content doesn't pass vetting. |
| Living author modules | Licensed explicitly | Author participates voluntarily. Content is authorized. Standard content licensing. |

---

## 12. The Core Realization

The copyright question dissolves not into a legal answer but into a market structure where the question stops being relevant.

The platform never needed to solve the grand philosophical question of whether LLM training on copyrighted data is lawful. That's the model providers' problem. The platform never needed to police what players generate with their own API keys. That's between the player and their provider. The platform never needed to negotiate IP deals with living authors. The marketplace creates an invitation they can accept on their own terms.

The whole system works not because walls were built but because incentives were aligned. Every participant's self-interest protects every other participant:

- The platform's self-interest in game quality requires content vetting that also catches IP problems
- The player's self-interest in strategic advantage rewards engaging with genuine public domain texts
- The author's self-interest in reaching readers makes voluntary participation attractive
- The model provider's self-interest in legal defensibility motivates them to handle their own training data exposure

The freshman analogy holds: the LLM was trained on copyrighted material the same way a student is trained on assigned reading — without choosing the curriculum, processing it into general capability rather than specific reproduction, and producing original work that is shaped by everything it learned but copies none of it. The law hasn't settled whether this analogy extends from humans to machines. But the platform architecture makes the question largely irrelevant to the business, because the exposure sits with the model providers and the players, not with the table they're playing on.

**The project started 48 hours ago as an excuse to download random books from Project Gutenberg. It ended up as a platform where the biggest names in publishing might come to you — and the copyright problem that seemed like the central obstacle turned out to be the moat.**
