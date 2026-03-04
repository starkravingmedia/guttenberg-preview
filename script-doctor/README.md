# The Script Doctor

A self-improving review tool for World of Guttenberg game content. The Script Doctor examines .md and text files in the context of the overall game design, finding red flags (problems) and green flags (strengths) using a living library of known patterns.

## Commands

### `/script-doctor [file-path]`

The main review command. Reads a file, classifies it, scans against all flags in the library, reports findings, proposes new flags, and offers to fix red flags.

```
/script-doctor characters/sample/profiles/faust.md
/script-doctor playtests/battle.md
/script-doctor                          (then paste text)
```

**What it does:**
1. Classifies the content (character profile, playtest prompt, session transcript, etc.)
2. Loads relevant game context (DESIGN.md, taxonomy, template)
3. Scans against every flag in the library
4. Reports red flags (with locations and explanations) and green flags
5. Notes unflagged observations
6. Proposes new flags for the library (user approves individually or in bulk)
7. Offers to fix red flags (user controls what gets fixed and how)
8. Saves review and fixed versions — **never overwrites the original**

### `/script-doctor-compare [file-path] ["section-name"]`

Generates multiple alternative versions of a short piece of content for comparison.

```
/script-doctor-compare characters/sample/profiles/faust.md "Filter"
/script-doctor-compare                  (then paste text)
```

Produces three versions:
- **Version A — Tighter:** Fewer words, more punch
- **Version B — Richer:** More thematic depth
- **Version C — Wilder:** A different angle entirely

User picks which to save or combines elements.

### `/script-doctor-flags [subcommand]`

Manages the flag library.

```
/script-doctor-flags              (lists all flags)
/script-doctor-flags list         (same)
/script-doctor-flags search cost  (search for flags matching "cost")
/script-doctor-flags add red      (walk through adding a new red flag)
/script-doctor-flags add green    (walk through adding a new green flag)
/script-doctor-flags remove "Beating a Dead Horse"
/script-doctor-flags stats        (library statistics)
```

## Directory Structure

```
script-doctor/
├── flags.md        # The living flag library (red and green flags)
├── README.md       # This file
├── reviews/        # Saved review reports
│   └── _pasted/    # Reviews of pasted text
└── versions/       # Versioned rewrites (never overwrites originals)
    └── _pasted/    # Versions of pasted text
```

## Flag Format

Each flag has four parts:

```markdown
## Red Flag: [Name]

[Description of the problem.]

### RF Example

[Concrete example showing the flag in action.]

### Possible Resolutions

#### Resolution One

[Named fix strategy.]

#### Resolution One Example

[Rewritten version demonstrating the fix.]
```

Green flags use the same structure but celebrate strengths. Instead of "Possible Resolutions," they include "Why This Matters" and "How to Reproduce."

## How the Library Grows

1. During a review, the Script Doctor identifies patterns not in the library
2. It proposes new flags with full examples and resolutions
3. User approves individually (`add 1, 3`), in bulk (`add all`), or skips
4. Approved flags are appended to `flags.md`
5. The library gets smarter with each review

## Rules

- **Never overwrite.** All fixes produce new versioned files. Originals are sacred.
- **User controls fixes.** Fix all, fix specific ones, suggest specific rewrites, or skip.
- **Pasted text works.** No file path required — paste into the conversation.
- **Multiple versions for short works.** Use `/script-doctor-compare` to generate alternatives.
