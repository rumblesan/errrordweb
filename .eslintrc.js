module.exports = {
  plugins: ['prettier'],
  extends: ['react-app', 'prettier'],
  rules: {
    indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
  },
};
