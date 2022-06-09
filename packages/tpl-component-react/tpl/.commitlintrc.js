module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: {
        description: '选择要提交的变更类型：',
        enum: {
          feat: {
            description: '新增功能',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '修复 bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '文档增删改',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '代码格式化',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '代码重构（无修复bug、新增功能）',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '优化性能',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '测试用例',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: '工程构建、工作流相关',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: '集成相关，更改CI配置文件或脚本',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: 'src之外改动',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '回滚',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '添加变更范围，建议为 模块名、组件名、文件名等：',
      },
      subject: {
        description: '概要性说明',
      },
      body: {
        description: '详细说明，使用"|"换行：',
      },
      isBreaking: {
        description: '有无重大变更：',
        skip: true,
      },
      isIssueAffected: {
        description: '此更改是否关联 issue，例 #123:',
        skip: true,
      }
    }
  }
};
