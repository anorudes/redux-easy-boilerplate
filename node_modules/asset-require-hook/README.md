# asset-require-hook
A require hook for importing asset files during runtime.

## Features
Allows files required by node that match a given set of extensions to be returned as either a data URI, or a custom filename. Meant to be used in conjunction with [file-loader](https://github.com/webpack/file-loader) or [url-loader](https://github.com/webpack/url-loader) when building [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.ttz58ohle) apps.

## Requirements
Using this tool requires [Node.js v0.12.x](https://github.com/nodejs/node) or higher.

## Installation
```bash
$ npm i --save asset-require-hook
```

## Usage
Attach the require hook to the desired file extensions using the `extensions` parameter.
```javascript
require('asset-require-hook')({
  extensions: ['jpg']
})

// const image = require('./icon.jpg');
```

The require hook accepts the same parameters as the `file-loader`.
```javascript
require('asset-require-hook')({
  extensions: ['jpg'],
  name: '[hash].[ext]'
})
```

To enable data URI's use the `limit` parameter, and optionally any other parameters used by the `url-loader`.
```javascript
require('asset-require-hook')({
  extensions: ['woff'],
  mimetype: 'application/font-woff',
  limit: 10000
})
```
