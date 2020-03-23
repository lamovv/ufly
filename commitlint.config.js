/**
 * commit message的格式
 * Header(是必须的)
 *  - <type>(scope): <subject>
 * 空一行
 * Body
 * 空一行
 * Footer
 * 
 * type：
 *  - docs: 文档更新
 *  - perf: 性能优化
 *  - fix: A bug fix
 *  - feat: A new feature
 *  - refactor: 重构，大变动
 *  - style: code format类，不影响代码逻辑
 *  - revert
 *  - build
 *  - test
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
};