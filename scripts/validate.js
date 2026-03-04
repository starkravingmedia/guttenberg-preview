'use strict';

const fs = require('fs');
const path = require('path');
const { parse } = require('./lib/markdown-parser');
const rules = require('./lib/profile-rules');
const { report } = require('./lib/reporter');

const PROFILE_ROOTS = ['characters', 'npcs'];
const CHARACTER_TYPES = ['sample', 'experimental', 'scenario'];

function discoverProfiles(repoRoot) {
  const profiles = [];

  for (const root of PROFILE_ROOTS) {
    for (const type of CHARACTER_TYPES) {
      const dir = path.join(repoRoot, root, type, 'profiles');
      if (!fs.existsSync(dir)) continue;

      const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_'));
      for (const file of files) {
        profiles.push({
          absolutePath: path.join(dir, file),
          relativePath: path.join(root, type, 'profiles', file),
        });
      }
    }
  }

  return profiles;
}

function main() {
  const repoRoot = process.argv[2] || process.cwd();

  if (!fs.existsSync(repoRoot)) {
    console.error(`Error: directory "${repoRoot}" does not exist.`);
    process.exit(1);
  }

  const profiles = discoverProfiles(repoRoot);
  const allResults = [];

  for (const { absolutePath, relativePath } of profiles) {
    const content = fs.readFileSync(absolutePath, 'utf8');
    const profile = parse(content, relativePath);

    const results = [];
    for (const rule of rules) {
      // checkSheetSync needs repoRoot as second arg
      const ruleResults = rule(profile, repoRoot);
      results.push(...ruleResults);
    }

    allResults.push({ filePath: relativePath, results });
  }

  const exitCode = report(allResults);
  process.exit(exitCode);
}

main();
