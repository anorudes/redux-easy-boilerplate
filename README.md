Redux Easy Boilerplate
=========================

![http://anorudes.github.io/redux-easy-boilerplate/](https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/gh/browser.png)
[Demo](http://anorudes.github.io/redux-easy-boilerplate/)

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Development](#development)
- [Build](#build--buildproduction)

## About
- [React 0.14.2](https://github.com/facebook/react)
- [Redux 3.0.4](https://github.com/gaearon/redux)
- [React Router 2.0.0-rc4](https://github.com/rackt/react-router)
- [Babel 6](https://github.com/babel/babel)
- [Bootstrap-loader](https://github.com/shakacode/bootstrap-loader) (configurable with .bootstraprc)
- Sass modules ([sass-loader](https://github.com/jtangelder/sass-loader) [css-loader](https://github.com/webpack/css-loader) [style-loader](https://github.com/webpack/style-loader))
- [react transform](https://github.com/gaearon/react-transform)
- [redux-logger](https://github.com/fcomb/redux-logger)
- [react-document-meta](https://github.com/kodyl/react-document-meta)
- [redux-form](https://github.com/erikras/redux-form)
- [redux-simple-router](https://github.com/jlongster/redux-simple-router)
- [karma](https://github.com/karma-runner/karma)
- [mocha](https://github.com/mochajs/mocha)

## Installation
```
$ git clone https://github.com/anorudes/redux-easy-boilerplate.git
$ cd redux-easy-boilerplate
$ npm install
```

## Development
```
$ npm start
```
Runs the project in development mode with hot-reloading of `src` folder. 
Open your browser at [http://localhost:3000](http://localhost:3000).

## Contribution

Before push commit make sure that all modules are added in package.json

### Try
```
$ rm -rf node_modules
$ npm i
$ npm start
```

## Clean
```
$ npm run clean
```
Using rimraf clean the `dist` folder, which is the target of the `build`

## Build & build:production
```
$ npm run build
```
Builds the app into the 'dist' folder for deployment 
```
$ npm run build:production
```
clean the `dist` folder and rebuilds the app for deployment
### Production
To run your server in production simply place the `index.html` and `dist` folder into
your `web root`.

In development mode the app uses `hashHistory` (e.g /#/home?_k=x928123) which
keeps track of your currently location on and the state of the page. It is adviced
for production to use `browserHistory` instead of `hashHistory`

To make this change edit `src/index.js`
```
// before change
...
import { Router, Redirect, hashHistory as history } from 'react-router'; 
...

// after change
...
import { Router, Redirect, browserHistory as history } from 'react-router';
...

```

the use of history push api requires that all your requests point to index.html
since react-router is keeping track of the navigation (e.g this can be done with `.htaccess` file at the web root or with `nginx` configuration)

## Run karma
```
$ npm test
```
## TODO
1. [ ] Write more tests!
2. [ ] Server-side rendering