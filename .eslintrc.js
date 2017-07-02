// http://eslint.org/docs/user-guide/configuring

const { resolve } = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },

  // required to lint *.vue files
  plugins: [
    'html'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue': 'vue/dist/vue.esm.js',
              '~': __dirname,
              'static': resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
              '~static': resolve(__dirname, 'static'),
              'assets': resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
              '~assets': resolve(__dirname, 'assets'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~store': resolve(__dirname, '.nuxt/store'),
              '~router': resolve(__dirname, '.nuxt/router'),
              '~pages': resolve(__dirname, 'pages'),
              '~components': resolve(__dirname, 'components')
            }
          }
        }
      }
    }
  },
  extends: 'airbnb-base',
  rules: {
    'brace-style': ['error', 'allman'],
    'max-len': ['warn', 240],
    'no-bitwise': 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',

    // Vue specific
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-alert': 'off'
  }
};
