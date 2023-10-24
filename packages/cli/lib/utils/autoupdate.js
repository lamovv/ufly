const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const updater = require('npm-updater');
const execSync = require('child_process').execSync;

const V_LELVEL = {
  major: 3,
  minor: 2,
  patch: 1,
};

async function autoUpdate() {
  // 识别自动升级参数
  let level = 'patch';
  const argv = process.argv.splice(2);
  const ret = ~argv.indexOf('--major') || ~argv.indexOf('--minor');
  if (ret) {
    level = argv[~ret].replace('--', '');
  }
  const vLevel = V_LELVEL[level];

  const packageFile = path.join(__dirname, '../../package.json');
  const pkg = require(packageFile);

  const r = await updater({
    package: pkg,
    level: 'major',
    interval: '1d',
    abort: false,
  });

  if (r && r.type && r.version) {
    if (V_LELVEL[r.type] <= vLevel) {
      const spinner = ora({ color: 'green' }).start(
        `${chalk.magenta(`发现新版本 ${chalk.red(`${r.name}@${r.version}`)}，自动升级中，请稍候...\n`)}`
      );
      execSync(`npm i ${r.name}@${r.version} -g`, { stdio: 'inherit' });
      spinner.succeed(`${chalk.green('升级完成，请重新执行命令: ')}${chalk.yellow(`ufly ${argv.join(' ')}`)}\n`);
      return false;
    }
  }

  return true;
}

module.exports = autoUpdate;
