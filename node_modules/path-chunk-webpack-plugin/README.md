# PathChunkPlugin for Webpack

This plugin will extract all modules that match into a new named chunk. This plugin can also be used multiple times to
create multiple chunks. It is based on the CommonsChunkPlugin from Webpack.

The main use case it is used in our company is splitting less frequent changed code into separate chunks. With this plugin we
are able to split our codebase into `vendor`(node_modules), `core-libraries`, `react-base-components` and more.

This plugin works by matching the supplied `test` against the full path of all modules. We also check all bundles and not only entry bundles as entry bundles in our configuration do not contain modules.

## Performance

One of our main concerns about Webpack plugins is performance. That's why we choose to have two operating modes in this plugin.
The mode is chosen based on what type of `test` is supplied as option. If a regex is supplied as `test` we obviously run a match
against the path. If on the other hand you supply a string `test` then we simply do an `indexOf` check.

## Options

```
{
  name: String,
  filename: String,
  test: Function|String|RegExp
}
```

#### name : String
The name of the chunk. If `filename` is not provided, the chunk will be named according to your webpack `output` settings.

#### test : Function|String|RegExp
This is the test that is checked against the complete absolute path of the module. If `test` is a function it is executed with the path as first parameter, if it is a string it is checked with ```String.indexOf(test)``` otherwise if it is a regular expression it is checked with ```test.test(String)```.

#### filename : [String] 
The filename of the chunk. You can also use the same replacement values as you can do for the `filename` in the webpack `output` settings.

#### ignore : [String|Array<String>]
Names of modules you don't want to be included in the splitted chunk. By default this is empty.

#### ignoreChunks : [String|Array<String>]
Names of chunks which should stay untouched. By default this is set to `['main']`, which includes the `main` chunk from the worker-loader.

## Example

```js
var PathChunkPlugin = require('path-chunk-webpack-plugin');
module.exports = {
  entry: {
    app: 'app.js'
  },
  output: {
    path: __dirname + '/public',
    filename: "[name]-[chunkhash].js",
    chunkFilename: "[name]-[chunkhash].js"
  },
  plugins: [
    new PathChunkPlugin({
      name: 'vendor',
      test: 'node_modules/'
    })
  ]
};
```

An an example structure of modules:

```
/lib
    /url.js
/node_modules
    jquery/jquery.js
    backbone/index.js
/app.js
```

The output would be three files:

- `app-[hash].js`, containing:
    - `app.js`
    - `lib/url.js`
- `vendor-[hash].js`, containing:
    - `node_modules/jquery/jquery.js`
    - `node_modules/backbone/index.js`
