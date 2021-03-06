module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
     indent: ['error', 4],
       'no-console': 'off',
       'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       'linebreak-style': 'off',
       'no-mixed-operators': 'off',
       'no-return-assign': 'off',
       'max-len': [1, 2000],
       'default-case': 0,
       'func-names': 0,
       camelcase: 0,
       'no-param-reassign': 0,
       'no-underscore-dangle': 'off',
       'no-lonely-if': 0,
       'import/no-extraneous-dependencies': 0,
       'global-require': 0,
       'prefer-promise-reject-errors': 'off',
       'no-restricted-syntax': 0,
       'import/no-unresolved': 0,
       'import/prefer-default-export': 0,
       'import/extensions': 0,
       'class-methods-use-this': 0,
       'consistent-return': 0,
       'no-multi-assign': 0,
       'no-async-promise-executor': 0,
       'no-await-in-loop': 0,
       'no-useless-escape': 0,
       radix: ['warn', 'as-needed'],
       'guard-for-in': 0,
       'no-shadow': 0,
       'no-plusplus': 0,
       'import/no-dynamic-require': 0,
       'no-unused-expressions': ['error', {
         allowShortCircuit: true,
         allowTernary: true,
         allowTaggedTemplates: true
       }],
       'no-restricted-globals': ['error', 'event'],
  },
};
