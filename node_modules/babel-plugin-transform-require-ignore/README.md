## babel-plugin-transform-require-ignore

[![Build Status](https://img.shields.io/travis/morlay/babel-plugin-transform-require-ignore.svg?style=flat-square)](https://travis-ci.org/morlay/babel-plugin-transform-require-ignore)
[![NPM](https://img.shields.io/npm/v/babel-plugin-transform-require-ignore.svg?style=flat-square)](https://npmjs.org/package/babel-plugin-transform-require-ignore)
[![Dependencies](https://img.shields.io/david/morlay/babel-plugin-transform-require-ignore.svg?style=flat-square)](https://david-dm.org/morlay/babel-plugin-transform-require-ignore)
[![License](https://img.shields.io/npm/l/babel-plugin-transform-require-ignore.svg?style=flat-square)](https://npmjs.org/package/babel-plugin-transform-require-ignore)


Since https://nodejs.org/api/globals.html#globals_require_extensions deprecated.

We have to find another way to ignore the extensions for webpack usage and make it work in node environment.

Configure it in `.babelrc` for node, we could ignore the requirement when run test in node or build server render app.

Then we run babel with `BABEL_ENV=node` will active this plugin;


```js
{
  "env": {
    "node": {
      "plugins": [
        [
          "babel-plugin-transform-require-ignore",
          {
            "extensions": [".less", ".sass"]
          }
        ]
      ]
    }
  }
}

```

or use with `babel-register` in require-hooks

```
require('babel-register')({
  'plugins': [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.scss']
      }
    ]
  ]
});

```

Or with cli like other plugin used.

Notice:

Only ignore `import './some.less';` or `require('./some.less');`

If assign to some variable, means that may use css-module,
please use https://github.com/css-modules/css-modules-require-hook instead.
