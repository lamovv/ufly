module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    // 'unit-allowed-list': ['rpx'],
    // 'unit-whitelist': ['rpx'],
    //'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-class-pattern': null,
    'color-no-invalid-hex': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
