/**
 * 约定式提交规范: https://www.conventionalcommits.org/zh-hans
 * -------
 * <type>[optional scope]: <description>
 * 
 * [optional body]
 * 
 * [optional footer(s)]
 * ------
 * 常用types：
 *  - build: 影响构建或外部依赖相关的更改
 *  - ci: 对配置类脚本类文件的更改
 *  - docs: Documentation only changes
 *  - feat: A new feature
 *  - fix: A bug fix
 *  - perf: A code change that improves performance
 *  - style: 代码格式化之类变动，不影响代码实质
 *  - refactor!: 重构，无错误修复也未添加功能的代码更改。用!号起强调引起关注作用
 *  - test: test case 变动
 *  - chore: 其他改动
 *  - BREAKING CHANGE: 破坏性变更，与语义化版本 MAJOR 对应
 */
module.exports = {
  extends: ['@commitlint/config-conventional']
};