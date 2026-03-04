'use strict';

const isCI = process.env.GITHUB_ACTIONS === 'true';

function report(allResults) {
  const divider = '───────────────────────────────────────────────────';
  const header  = '═══════════════════════════════════════════════════';

  console.log('');
  console.log(header);
  console.log('  Guttenberg Profile Validator');
  console.log(header);
  console.log('');

  let totalErrors = 0;
  let totalWarnings = 0;
  let totalFiles = allResults.length;

  if (totalFiles === 0) {
    console.log('  No profiles found to validate.');
    console.log('');
    console.log(divider);
    console.log('  Result: PASS (nothing to check)');
    console.log(divider);
    console.log('');
    return 0;
  }

  for (const { filePath, results } of allResults) {
    const errors = results.filter(r => r.level === 'error');
    const warnings = results.filter(r => r.level === 'warning');
    totalErrors += errors.length;
    totalWarnings += warnings.length;

    if (errors.length === 0 && warnings.length === 0) {
      console.log(`  ${filePath}`);
      console.log(`     All checks passed`);
    } else {
      console.log(`  ${filePath}`);
      for (const r of errors) {
        console.log(`     ERROR [${r.rule}] ${r.message}`);
        if (isCI) {
          console.log(`::error file=${filePath}::[${r.rule}] ${r.message}`);
        }
      }
      for (const r of warnings) {
        console.log(`     WARN  [${r.rule}] ${r.message}`);
        if (isCI) {
          console.log(`::warning file=${filePath}::[${r.rule}] ${r.message}`);
        }
      }
    }
    console.log('');
  }

  console.log(divider);
  console.log(`  Summary: ${totalFiles} profile${totalFiles !== 1 ? 's' : ''} checked, ${totalErrors} error${totalErrors !== 1 ? 's' : ''}, ${totalWarnings} warning${totalWarnings !== 1 ? 's' : ''}`);

  if (totalErrors > 0) {
    console.log('  Result: FAIL');
    console.log(divider);
    console.log('');
    console.log('  Errors block merging. Warnings are informational.');
    console.log('  Fix the errors above and push again.');
    console.log('');
  } else {
    console.log('  Result: PASS');
    console.log(divider);
    console.log('');
  }

  return totalErrors > 0 ? 1 : 0;
}

module.exports = { report };
