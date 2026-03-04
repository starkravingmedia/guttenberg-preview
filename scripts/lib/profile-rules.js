'use strict';

const fs = require('fs');
const path = require('path');

const REQUIRED_SECTIONS = [
  'Source Text', 'Ability Scores', 'Game Traits', 'Conditions',
  'Reputations', 'Roll Skills', 'Filter', 'Equipment',
];

const OPTIONAL_SECTIONS = ['Portrait', 'Description', 'Relationships'];

const VALID_TYPES = ['sample', 'experimental', 'scenario'];
const VALID_STATS = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
const VALID_TRAITS = ['Game Savvy', 'Honesty', 'Verbosity', 'Sensitivity'];
const VALID_TRAIT_LEVELS = ['High', 'Medium', 'Low'];
const VALID_VISIBILITY = ['Public', 'Semi-private', 'Private'];
const VALID_OBSERVABILITY = ['o2o', 'no2o'];
const VALID_SPREAD = ['widespread', 'moderate', 'limited'];
const VALID_SKILL_TYPES = ['Active', 'Passive'];

function checkRequiredSections(profile) {
  const results = [];

  if (!profile.name) {
    results.push({ level: 'error', rule: 'required-sections', message: 'Missing H1 heading (character name)' });
  }
  if (!profile.epithet) {
    results.push({ level: 'error', rule: 'required-sections', message: 'Missing Epithet field' });
  }
  if (!profile.characterType) {
    results.push({ level: 'error', rule: 'required-sections', message: 'Missing Character Type field' });
  }
  if (!profile.team) {
    results.push({ level: 'error', rule: 'required-sections', message: 'Missing Team field' });
  }

  for (const section of REQUIRED_SECTIONS) {
    if (!profile.sections[section] || !profile.sections[section].present) {
      results.push({ level: 'error', rule: 'required-sections', message: `Missing required section "${section}"` });
    }
  }

  for (const section of OPTIONAL_SECTIONS) {
    if (!profile.sections[section] || !profile.sections[section].present) {
      results.push({ level: 'warning', rule: 'required-sections', message: `Missing optional section "${section}"` });
    }
  }

  return results;
}

function checkCharacterTypeEnum(profile) {
  if (!profile.characterType) return [];
  if (!VALID_TYPES.includes(profile.characterType)) {
    return [{ level: 'error', rule: 'character-type', message: `Character Type "${profile.characterType}" is not valid. Must be one of: ${VALID_TYPES.join(', ')}` }];
  }
  return [];
}

function checkCharacterTypeFolderMatch(profile) {
  if (!profile.characterType || !profile.folderType) return [];
  if (profile.characterType !== profile.folderType) {
    return [{ level: 'error', rule: 'type-folder-match', message: `Character Type is "${profile.characterType}" but file is in ${profile.entityRoot}/${profile.folderType}/profiles/` }];
  }
  return [];
}

function checkAbilityScoreModifiers(profile) {
  const results = [];

  if (profile.abilityScores.length === 0 && profile.sections['Ability Scores']?.present) {
    results.push({ level: 'error', rule: 'ability-scores', message: 'Ability Scores section exists but no stats could be parsed' });
    return results;
  }

  // Check all 6 stats are present
  const foundStats = profile.abilityScores.map(s => s.stat);
  for (const stat of VALID_STATS) {
    if (!foundStats.includes(stat)) {
      results.push({ level: 'error', rule: 'ability-scores', message: `Missing ability score: ${stat}` });
    }
  }

  for (const { stat, score, modifier } of profile.abilityScores) {
    if (score < 3 || score > 20) {
      results.push({ level: 'error', rule: 'ability-scores', message: `${stat} score ${score} is out of range (must be 3-20)` });
    }
    const expected = Math.floor((score - 10) / 2);
    if (modifier !== expected) {
      results.push({ level: 'error', rule: 'ability-scores', message: `${stat} modifier should be ${expected >= 0 ? '+' : ''}${expected} but found ${modifier >= 0 ? '+' : ''}${modifier}` });
    }
  }

  return results;
}

function checkGameTraitLevels(profile) {
  const results = [];

  if (profile.gameTraits.length === 0 && profile.sections['Game Traits']?.present) {
    results.push({ level: 'error', rule: 'game-traits', message: 'Game Traits section exists but no traits could be parsed' });
    return results;
  }

  const foundTraits = profile.gameTraits.map(t => t.trait);
  for (const trait of VALID_TRAITS) {
    if (!foundTraits.includes(trait)) {
      results.push({ level: 'error', rule: 'game-traits', message: `Missing required trait: ${trait}` });
    }
  }

  for (const { trait, level } of profile.gameTraits) {
    if (!VALID_TRAIT_LEVELS.includes(level)) {
      results.push({ level: 'error', rule: 'game-traits', message: `${trait} level "${level}" is not valid. Must be one of: ${VALID_TRAIT_LEVELS.join(', ')}` });
    }
  }

  return results;
}

function checkConditionMetadata(profile) {
  const results = [];

  if (profile.conditions.length === 0) {
    if (profile.sections['Conditions']?.present) {
      results.push({ level: 'error', rule: 'conditions', message: 'No conditions found (at least 1 required)' });
    }
    return results;
  }

  for (const cond of profile.conditions) {
    const label = cond.name || 'unnamed condition';
    if (!cond.duration) {
      results.push({ level: 'error', rule: 'conditions', message: `Condition "${label}" is missing Duration` });
    }
    if (!cond.visibility) {
      results.push({ level: 'error', rule: 'conditions', message: `Condition "${label}" is missing Visibility` });
    } else if (!VALID_VISIBILITY.includes(cond.visibility)) {
      results.push({ level: 'error', rule: 'conditions', message: `Condition "${label}" has invalid Visibility "${cond.visibility}". Must be one of: ${VALID_VISIBILITY.join(', ')}` });
    }
    if (!cond.observability) {
      results.push({ level: 'error', rule: 'conditions', message: `Condition "${label}" is missing Observability` });
    } else if (!VALID_OBSERVABILITY.includes(cond.observability)) {
      results.push({ level: 'error', rule: 'conditions', message: `Condition "${label}" has invalid Observability "${cond.observability}". Must be one of: ${VALID_OBSERVABILITY.join(', ')}` });
    }
  }

  return results;
}

function checkReputationMetadata(profile) {
  const results = [];

  if (profile.reputations.length === 0) {
    if (profile.sections['Reputations']?.present) {
      results.push({ level: 'error', rule: 'reputations', message: 'No reputations found (at least 1 required)' });
    }
    return results;
  }

  for (const rep of profile.reputations) {
    const label = rep.name || 'unnamed reputation';
    if (!rep.organization) {
      results.push({ level: 'error', rule: 'reputations', message: `Reputation "${label}" is missing organization name` });
    }
    if (!rep.spread) {
      results.push({ level: 'error', rule: 'reputations', message: `Reputation "${label}" is missing spread level` });
    } else if (!VALID_SPREAD.includes(rep.spread)) {
      results.push({ level: 'error', rule: 'reputations', message: `Reputation "${label}" has invalid spread "${rep.spread}". Must be one of: ${VALID_SPREAD.join(', ')}` });
    }
  }

  return results;
}

function checkRollSkillFields(profile) {
  const results = [];

  if (profile.rollSkills.length === 0) {
    if (profile.sections['Roll Skills']?.present) {
      results.push({ level: 'error', rule: 'roll-skills', message: 'No roll skills found (at least 1 required)' });
    }
    return results;
  }

  for (const skill of profile.rollSkills) {
    const label = skill.name || 'unnamed skill';

    if (!skill.type) {
      results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" is missing type` });
    } else if (!VALID_SKILL_TYPES.includes(skill.type)) {
      results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" type "${skill.type}" is not valid. Must be Active or Passive` });
    }

    if (!skill.trigger) {
      results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" is missing Trigger` });
    }

    if (!skill.mechanic) {
      results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" is missing Mechanic` });
    } else if (!/d20\s*\+\s*(STR|DEX|CON|INT|WIS|CHA)/i.test(skill.mechanic)) {
      results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" Mechanic "${skill.mechanic}" must reference d20 + a valid stat (STR, DEX, CON, INT, WIS, CHA)` });
    }

    if (!skill.cost) {
      results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" is missing Cost` });
    }

    const requiredOutcomes = ['18+', '10-17', '1-9'];
    for (const tier of requiredOutcomes) {
      if (!skill.outcomes[tier]) {
        results.push({ level: 'error', rule: 'roll-skills', message: `Skill "${label}" is missing outcome tier "${tier}"` });
      }
    }
  }

  return results;
}

function checkFileNaming(profile) {
  if (!profile.fileName) return [];
  const nameOnly = profile.fileName.replace(/\.md$/, '');
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(nameOnly)) {
    return [{ level: 'error', rule: 'file-naming', message: `Filename "${profile.fileName}" must be kebab-case (e.g., "faust.md", "sei-shonagon.md")` }];
  }
  return [];
}

function checkSheetSync(profile, repoRoot) {
  if (!profile.filePath || !repoRoot) return [];

  // Derive expected sheet path: profiles/name.md -> sheets/name-sheet.html
  const nameOnly = profile.fileName.replace(/\.md$/, '');
  const profileDir = path.dirname(profile.filePath);
  const sheetsDir = profileDir.replace(/profiles$/, 'sheets');
  const expectedSheet = path.join(repoRoot, sheetsDir, `${nameOnly}-sheet.html`);

  if (!fs.existsSync(expectedSheet)) {
    return [{ level: 'warning', rule: 'sheet-sync', message: `No HTML sheet found. Expected at ${path.join(sheetsDir, `${nameOnly}-sheet.html`)}` }];
  }
  return [];
}

module.exports = [
  checkRequiredSections,
  checkCharacterTypeEnum,
  checkCharacterTypeFolderMatch,
  checkAbilityScoreModifiers,
  checkGameTraitLevels,
  checkConditionMetadata,
  checkReputationMetadata,
  checkRollSkillFields,
  checkFileNaming,
  checkSheetSync,
];
