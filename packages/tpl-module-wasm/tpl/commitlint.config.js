/**
 * https://www.conventionalcommits.org/en/v1.0.0/
 * commit message的格式，可以安装 commitizen
 * Header(是必须的)，注意 :与subject之间的空格必须有；scope主要用于说明 commit 影响的范围，比如MVC，视项目情况自主分层
 *  - <type>([scope]): <subject>
 *    空一行
 *    Body
 *    空一行
 *    Footer
 * 
 * type：
 *  - build: 影响构建或外部依赖相关的更改
 *  - ci: 对配置类脚本类文件的更改
 *  - docs: Documentation only changes
 *  - feat: A new feature
 *  - fix: A bug fix
 *  - perf: A code change that improves performance
 *  - style: 代码格式化之类变动，不影响代码实质
 *  - refactor!: 重构，无错误修复也未添加功能的代码更改
 *    - 用!起强调引起关注作用
 *  - test: test case 变动
 *  - chore: 其他改动
 */
module.exports = {
  extends: ['@commitlint/config-conventional']
};