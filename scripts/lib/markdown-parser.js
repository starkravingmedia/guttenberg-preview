'use strict';

const path = require('path');

/**
 * Parse a character profile .md file into a structured object.
 * Tailored to the _template.md format — not a general markdown parser.
 */
function parse(content, filePath) {
  const relPath = filePath;
  const fileName = path.basename(filePath);
  const parts = relPath.split(path.sep);

  // Extract folder type (sample/experimental/scenario) from path
  // Expected: characters/sample/profiles/faust.md or npcs/sample/profiles/name.md
  let folderType = null;
  let entityRoot = null;
  const profilesIdx = parts.indexOf('profiles');
  if (profilesIdx >= 2) {
    folderType = parts[profilesIdx - 1];
    entityRoot = parts[profilesIdx - 2];
  }

  const lines = content.split('\n');

  // Split into header block (before first ##) and sections (## headings)
  const sections = {};
  let headerLines = [];
  let currentSection = null;
  let currentLines = [];

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/);
    if (h2Match) {
      if (currentSection) {
        sections[currentSection] = currentLines.join('\n');
      } else {
        headerLines = currentLines;
      }
      currentSection = h2Match[1].trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
  // Flush last section
  if (currentSection) {
    sections[currentSection] = currentLines.join('\n');
  } else {
    headerLines = currentLines;
  }

  const headerBlock = headerLines.join('\n');

  // Parse header fields
  const nameMatch = headerBlock.match(/^# (.+)$/m);
  const epithetMatch = headerBlock.match(/\*\*Epithet:\*\*\s*(.+)/);
  const typeMatch = headerBlock.match(/\*\*Character Type:\*\*\s*`?([^`\n]+)`?/);
  const teamMatch = headerBlock.match(/\*\*Team:\*\*\s*(.+)/);

  const profile = {
    filePath: relPath,
    fileName,
    folderType,
    entityRoot,
    name: nameMatch ? nameMatch[1].trim() : null,
    epithet: epithetMatch ? epithetMatch[1].trim() : null,
    characterType: typeMatch ? typeMatch[1].trim() : null,
    team: teamMatch ? teamMatch[1].trim() : null,
    sections: {},
    abilityScores: [],
    gameTraits: [],
    conditions: [],
    reputations: [],
    rollSkills: [],
    equipment: { artifact: null, idea: null },
  };

  // Mark which sections are present
  const allSectionNames = [
    'Source Text', 'Portrait', 'Description', 'Ability Scores',
    'Game Traits', 'Conditions', 'Reputations', 'Roll Skills',
    'Filter', 'Relationships', 'Equipment',
  ];
  for (const name of allSectionNames) {
    profile.sections[name] = { present: name in sections, raw: sections[name] || '' };
  }

  // Parse Ability Scores table
  if (sections['Ability Scores']) {
    const statRegex = /^\|\s*(STR|DEX|CON|INT|WIS|CHA)\s*\|\s*(\d+)\s*\|\s*([+-]?\d+)\s*\|/gm;
    let m;
    while ((m = statRegex.exec(sections['Ability Scores'])) !== null) {
      profile.abilityScores.push({
        stat: m[1],
        score: parseInt(m[2], 10),
        modifier: parseInt(m[3], 10),
      });
    }
  }

  // Parse Game Traits table
  if (sections['Game Traits']) {
    const traitRegex = /^\|\s*(Game Savvy|Honesty|Verbosity|Sensitivity)\s*\|\s*([^|]+?)\s*\|/gm;
    let m;
    while ((m = traitRegex.exec(sections['Game Traits'])) !== null) {
      profile.gameTraits.push({
        trait: m[1],
        level: m[2],
      });
    }
  }

  // Parse Conditions (### sub-sections)
  if (sections['Conditions']) {
    const condBlocks = sections['Conditions'].split(/^### /m).filter(b => b.trim());
    for (const block of condBlocks) {
      const nameMatch = block.match(/^(.+?)$/m);
      const durMatch = block.match(/\*\*Duration:\*\*\s*(.+)/);
      const visMatch = block.match(/\*\*Visibility:\*\*\s*(.+)/);
      const obsMatch = block.match(/\*\*Observability:\*\*\s*(.+)/);
      profile.conditions.push({
        name: nameMatch ? nameMatch[1].trim() : null,
        duration: durMatch ? durMatch[1].trim() : null,
        visibility: visMatch ? visMatch[1].trim() : null,
        observability: obsMatch ? obsMatch[1].trim() : null,
      });
    }
  }

  // Parse Reputations (### sub-sections)
  if (sections['Reputations']) {
    const repBlocks = sections['Reputations'].split(/^### /m).filter(b => b.trim());
    for (const block of repBlocks) {
      const nameMatch = block.match(/^"?(.+?)"?\s*$/m);
      const sourceMatch = block.match(/\*\*Source:\*\*\s*(.+)\((\w+)\)/);
      profile.reputations.push({
        name: nameMatch ? nameMatch[1].trim().replace(/^"|"$/g, '') : null,
        organization: sourceMatch ? sourceMatch[1].trim() : null,
        spread: sourceMatch ? sourceMatch[2].trim().toLowerCase() : null,
      });
    }
  }

  // Parse Roll Skills (### sub-sections)
  if (sections['Roll Skills']) {
    const skillBlocks = sections['Roll Skills'].split(/^### /m).filter(b => b.trim());
    for (const block of skillBlocks) {
      const headerMatch = block.match(/^(.+?)\s*`(Active|Passive)`/m);
      const triggerMatch = block.match(/\*\*Trigger:\*\*\s*(.+)/);
      const mechMatch = block.match(/\*\*Mechanic:\*\*\s*(.+)/);
      const costMatch = block.match(/\*\*Cost:\*\*\s*(.+)/);

      // Parse outcome table
      const outcomes = {};
      const outcomeRegex = /^\|\s*(18\+|10-17|1-9)\s*\|(.+)\|/gm;
      let om;
      while ((om = outcomeRegex.exec(block)) !== null) {
        outcomes[om[1].trim()] = om[2].trim();
      }

      profile.rollSkills.push({
        name: headerMatch ? headerMatch[1].trim() : null,
        type: headerMatch ? headerMatch[2] : null,
        trigger: triggerMatch ? triggerMatch[1].trim() : null,
        mechanic: mechMatch ? mechMatch[1].trim() : null,
        cost: costMatch ? costMatch[1].trim() : null,
        outcomes,
      });
    }
  }

  // Parse Equipment
  if (sections['Equipment']) {
    const artMatch = sections['Equipment'].match(/\*\*Artifact:\*\*\s*(.+)/);
    const ideaMatch = sections['Equipment'].match(/\*\*Idea:\*\*\s*(.+)/);
    profile.equipment.artifact = artMatch ? artMatch[1].trim() : null;
    profile.equipment.idea = ideaMatch ? ideaMatch[1].trim() : null;
  }

  return profile;
}

module.exports = { parse };
