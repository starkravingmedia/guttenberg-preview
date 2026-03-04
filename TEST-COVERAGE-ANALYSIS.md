# Test Coverage Analysis — World of Guttenberg

> **Date:** 2026-03-04
> **Scope:** Full repository audit — content validation, structural integrity, mechanical consistency

---

## Current State

The Guttenberg project has **zero automated tests**. There is no test framework, no validation scripts, and no CI/CD pipeline. The only quality assurance mechanism is the Script Doctor — a Claude command that performs manual, on-demand content review against a flag library.

The Script Doctor is valuable but limited: it runs only when invoked, reviews one file at a time, and depends on a flag library (`script-doctor/flags.md`) that doesn't yet exist on disk. It's editorial review, not structural testing.

What follows is an inventory of what should be tested, organized by priority.

---

## Priority 1: Content Structure Validation

These tests verify that game content files conform to their templates and contain all required fields. They catch the kind of drift that accumulates silently as the project grows.

### 1A. Character Profile Schema Validation

**What to test:** Every `.md` file in `characters/*/profiles/` conforms to `characters/_template.md`.

**Specific checks:**
- Required sections present: Epithet, Character Type, Source Text, Portrait, Description, Ability Scores, Game Traits, Conditions, Reputations, Roll Skills, Filter, Relationships, Equipment
- Character Type value matches the folder it lives in (`sample/` → `sample`, `experimental/` → `experimental`, `scenario/` → `scenario`)
- Ability scores are in valid range (8–20) with correct modifiers (floor((score - 10) / 2))
- Game Traits use valid levels: `Low`, `Medium`, `High`
- Every Condition has Duration, Visibility (`Public` / `Semi-private` / `Private`), and Observability (`o2o` / `no2o`)
- Every Reputation has Source (organization name) and spread level (`widespread` / `moderate` / `limited`)
- Every Roll Skill is labeled `Active` or `Passive`, has a Trigger, a Mechanic referencing d20 + a valid ability modifier, a three-tier outcome table (18+, 10-17, 1-9), and a Cost
- Filter section exists and contains exactly one named Filter
- Equipment section lists Artifact and Idea slots

**Current gaps found:**
- Faust's ability score modifiers are correctly calculated (verified)
- Scheherazade's ability score modifiers are correctly calculated (verified)
- Both sample profiles conform to the template — but there's no automated way to catch the next profile that doesn't

**Estimated effort:** Medium. Requires a markdown parser script (Python or Node) that extracts sections and validates against the schema.

### 1B. HTML Sheet ↔ Markdown Profile Sync

**What to test:** Every `.html` sheet in `characters/*/sheets/` accurately reflects its corresponding `.md` profile.

**Specific checks:**
- Every stat in the HTML matches the markdown source
- Every Condition, Reputation, Roll Skill, and Filter in the HTML matches the markdown
- No HTML sheet exists without a corresponding profile
- No profile marked as needing a sheet in TODO.md is missing one

**Why it matters:** ORGANIZATION.md declares markdown as the source of truth. If sheets and profiles drift apart, the project has two versions of every character with no way to know which is current.

**Estimated effort:** Medium-high. Requires parsing both markdown and HTML, then comparing extracted data.

### 1C. Folder Structure Compliance

**What to test:** The directory layout matches the spec in ORGANIZATION.md.

**Specific checks:**
- `characters/` contains only `_template.md` and subdirectories `sample/`, `experimental/`, `scenario/`
- Each subdirectory contains `profiles/` and `sheets/`
- File naming follows kebab-case conventions
- No orphaned files (sheets without profiles, portraits without sheets)
- The `npcs/` directory structure mirrors `characters/` (when it exists)

**Current gaps found:**
- The `npcs/` directory doesn't exist yet, though ORGANIZATION.md specifies its structure. Not a bug now, but a future drift risk.
- `cards/` contains duplicate sheets (`faust-sheet.html`, `scheherazade-sheet.html`) that also exist in `characters/sample/sheets/`. These duplicates can drift.

**Estimated effort:** Low. A simple directory-tree check script.

---

## Priority 2: Game Mechanics Consistency

These tests verify that the rules described in DESIGN.md are internally consistent and correctly applied in character profiles and scenarios.

### 2A. Ability Score Math

**What to test:** Modifiers follow D&D-standard calculation: `mod = floor((score - 10) / 2)`.

**Specific checks:**
- Every Actor profile's modifier column matches this formula
- Roll Skill mechanics reference the correct modifier for the ability they name (e.g., "d20 + INT (+5)" on Faust should match his INT modifier)

**Current state:** Both sample profiles are correct. But this is exactly the kind of thing that breaks silently on the 12th character.

**Estimated effort:** Low. Pure arithmetic validation on parsed profiles.

### 2B. Roll Skill Cross-References

**What to test:** Roll Skills reference valid ability scores and their modifiers match the character's actual stats.

**Specific checks:**
- Faust's "Read the Contract" says `d20 + INT (+5)` — his INT is 20, mod is +5 ✓
- Faust's "Call It Due" says `d20 + CHA (+3)` — his CHA is 17, mod is +3 ✓
- Scheherazade's "And Then..." says `d20 + CHA (+4)` — her CHA is 19, mod is +4 ✓
- Scheherazade's "The Nested Hook" says `d20 + CHA (+4)` — her CHA is 19, mod is +4 ✓

**But the scenario references a discrepancy:** In `vertical-slice-001.md`, Sei Shonagon's "Aesthetic Resonance" is described as `d20 + WIS (+2)` but her stats list WIS 14, which gives mod +2 ✓. However, "Devastating Observation" is listed as `d20 + CHA` in the scenario — but in the DESIGN.md examples section (line ~145), it's also `d20 + CHA`. Consistency across documents matters.

**Estimated effort:** Low. Same parser as 1A, with cross-referencing.

### 2C. Taxonomy Term Usage

**What to test:** Reserved terms from `taxonomy/taxonomy.md` are used consistently across all documents.

**Specific checks:**
- When a reserved term appears in any `.md` file, it's used with its canonical meaning
- No documents use a reserved term informally or with a conflicting definition
- Terms used frequently but not yet in the taxonomy are flagged for addition

**Current state:** The taxonomy has only one term ("Headless Session"). TODO.md explicitly calls out the need for a taxonomy linter. This is a greenfield opportunity.

**Estimated effort:** Medium. Requires building the linter TODO.md already requests.

### 2D. Organization Name Consistency

**What to test:** The six organizations in DESIGN.md (The Bindery, The Lamplighters, The Redactors, The Dockhands, The Ashkeepers, The Marginalia) are spelled and referenced consistently everywhere.

**Specific checks:**
- Character Reputations reference real organizations
- Scenario documents reference real organizations
- No typos or alternate names for the same organization

**Current state:** Both sample profiles reference valid organizations (Faust → The Bindery, The Lamplighters, The Ashkeepers; Scheherazade → The Lamplighters, The Redactors, The Dockhands). The scenario references The Lamplighters, The Redactors, The Dockhands, The Marginalia — all valid.

**Estimated effort:** Low. String matching against a known list.

---

## Priority 3: Cross-Document Consistency

These tests catch contradictions between documents that describe the same mechanics differently.

### 3A. DESIGN.md Internal Contradictions

**What to test:** The GDD doesn't contradict itself.

**Known issues (from the vertical slice analysis):**
- d20 resolution vs. pure narrative resolution — three different playtest files use three different resolution models
- Scholarship described as both per-use currency AND permanent tech-tree unlock
- Organizations described as both neutral infrastructure AND aligned mission-givers
- Immune system described as both narrative friction AND numeric gate
- Affinity/animosity tracks only increment, never decay — leads to relationship inflation
- Unresolved characters described as "free" in one place but extraction has node consequences elsewhere

**Why it matters:** DESIGN.md is the "definitive reference." If it contradicts itself, every downstream document (scenarios, playtests, character profiles) inherits the contradiction.

**Estimated effort:** High. This is design work, not scripting. But a contradiction tracker document could formalize what the vertical slice already surfaced.

### 3B. Scenario ↔ DESIGN.md Alignment

**What to test:** Scenarios reference mechanics that actually exist in DESIGN.md and use them correctly.

**Specific checks:**
- Every mechanic invoked in `vertical-slice-001.md` is defined in DESIGN.md
- Stat references in scenarios match the characters they describe
- Traversal tier mechanics used in scenarios match the tier definitions in DESIGN.md

**Current state:** The vertical slice is *designed* to surface misalignments — it does this explicitly with its "Open Questions" tables. But there's no automated check that future scenarios stay aligned as DESIGN.md evolves.

**Estimated effort:** Medium. Partly automatable (stat/mechanic references), partly editorial.

### 3C. Playtest Prompt ↔ DESIGN.md Alignment

**What to test:** System prompts in playtest files implement mechanics as specified in DESIGN.md.

**Known drift:**
- `playtests/battle.md` uses pure narrative resolution with no d20
- `playtests/full_session.md` uses pure narrative resolution
- `playtests/extraction.md` uses pure narrative with no dice
- The Ginsfeld Sessions use d20 + stat mod with explicit tiers
- DESIGN.md says the system is "hybrid" — but the hybridity isn't consistently implemented

**Estimated effort:** High. This requires reading each prompt and comparing its resolution logic against the GDD's hybrid model.

---

## Priority 4: Presentation Layer

### 4A. CSS Design System Consistency

**What to test:** `styles/guttenberg.css` and `styles/terminally-online.css` define consistent design tokens, and all HTML files use the CSS classes rather than inline styles.

**Specific checks:**
- All HTML sheets reference `guttenberg.css` (or `terminally-online.css`)
- No inline styles override the design system
- All CSS classes used in HTML files are defined in the stylesheet
- Color tokens, font stacks, and spacing are consistent

**Current state:** TODO.md notes: "Rebuild existing sheets to use formalized CSS classes from `styles/guttenberg.css` (sections 14-30) instead of inline styles." This confirms known drift.

**Estimated effort:** Medium. Automatable with an HTML/CSS linter.

### 4B. Link Validation

**What to test:** All links in markdown and HTML files point to valid targets.

**Specific checks:**
- Project Gutenberg links in character profiles are valid URLs
- Internal file references (images, stylesheets) resolve
- Portrait file references in profiles match actual files on disk

**Current state:** Faust's portrait says "N/A". Scheherazade's says `scheherazade-portrait.jpg` — file exists at `characters/sample/sheets/scheherazade-portrait.jpg` ✓. But there's also a copy at `cards/scheherazade-portrait.jpg`.

**Estimated effort:** Low. Standard link-checking tooling.

---

## Priority 5: Script Doctor Infrastructure

### 5A. Flag Library Existence

**What to test:** `script-doctor/flags.md` exists and contains valid flags.

**Current state:** The file doesn't exist. The Script Doctor command references it, and the `/script-doctor-flags` command manages it, but the library itself hasn't been created yet. The Script Doctor runs but has no flags to scan against.

**Estimated effort:** Low — create the initial file. Medium — populate it with flags from playtest observations.

### 5B. Review Archive Structure

**What to test:** `script-doctor/reviews/` and `script-doctor/versions/` follow the naming conventions specified in the Script Doctor command.

**Current state:** Neither directory exists. No reviews have been saved.

**Estimated effort:** Low. Directory and naming convention check.

---

## Recommended Implementation Order

| Phase | What | Why First |
|-------|------|-----------|
| **Phase 1** | Character Profile Schema Validator | Catches the most common content errors as the character roster grows. Every new character benefits immediately. |
| **Phase 2** | Ability Score & Roll Skill Math Checker | Pure arithmetic — easy to automate, impossible to argue with, and exactly the kind of error that LLMs introduce silently. |
| **Phase 3** | Folder Structure & Naming Linter | Prevents organizational drift before it starts. Runs in seconds. |
| **Phase 4** | Taxonomy Linter | Directly requested in TODO.md. Enforces terminology discipline across all documents. |
| **Phase 5** | HTML ↔ Markdown Sync Checker | Prevents the two-source-of-truth problem from getting worse. |
| **Phase 6** | Script Doctor Flag Library Bootstrap | Make the existing Script Doctor command actually functional by creating its flag library. |
| **Phase 7** | Cross-Document Contradiction Tracker | Formalizes what the vertical slice surfaced. More of a living document than an automated test. |
| **Phase 8** | Link Validator & CSS Linter | Standard web tooling. Low effort, moderate value. |

---

## Suggested Tooling

The project has no existing code infrastructure (no package.json, no build system). The simplest path:

1. **A single validation script** (Python or Node) that reads markdown files, parses their structure, and runs checks from Phases 1–5 above.
2. **A pre-commit hook or Claude command** that runs the validator on changed files.
3. **The taxonomy linter** as a separate script or integrated into the validator.

The Script Doctor is the right *editorial* tool. What's missing is the *structural* tool — the thing that catches "you wrote CHA +3 but the character's CHA is 16, which is +3, so it's fine — wait, no, you changed CHA to 14 last week and forgot to update the skill."

That kind of error is beneath editorial review and above human attention. It's exactly what automated tests are for.
