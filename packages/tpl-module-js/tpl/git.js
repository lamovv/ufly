const { execSync } = require('child_process');

// git 是否有 diff 需要提交
function hasDiff() {
  const ret = execSync('git status -s').toString('utf-8');
  return ret.trim().length > 0;
}

if (hasDiff()) {
  execSync('git commit -m "feat(release): auto"');
}
