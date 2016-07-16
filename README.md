Redux Easy Universal Boilerplate
=========================
[![bitHound Overall Score](https://www.bithound.io/github/anorudes/redux-easy-boilerplate/badges/score.svg)](https://www.bithound.io/github/anorudes/redux-easy-boilerplate)

---

## About

Really easy react universal boilerplate with many commentaries

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React Router](https://github.com/reactjs/react-router)
- [Immutable-js](http://facebook.github.io/immutable-js/) ([`with_immutable branch`](https://github.com/anorudes/redux-easy-boilerplate/tree/with_immutable). see below for details)
- [Sass](http://sass-lang.com/)
- [React-helmet](https://github.com/nfl/react-helmet)
- Server Side Rendering
- Api server on other port (express)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [Sinon](http://sinonjs.org/)
- Others:
  - [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)
  - api + [promise](https://www.npmjs.com/package/redux-promise-middleware) middleware
  - bundle.css for server-side-rendering
  - vendor bundle
  - async pages
  - webpack resolving alias
  - 4 modes for run (with auto rimraf dist)
  - api server
  - gzip css, js, fonts

Doesn't have redux-form and bootstrap (you can add if needed)

## How it works

See commentaries in code

## Installation

Install [rimraf](https://github.com/isaacs/rimraf): ```$ npm install rimraf -g```<br />
Install [nodemon](https://github.com/remy/nodemon): ```$ npm install nodemon -g```<br />
Install [concurrently](https://github.com/kimmobrunfeldt/concurrently): ```$ npm install -g concurrently```

## Start development

```$ npm run api```

```$ npm run start```

after: open 'http://localhost:3000' in browser<br /><br />
hint: use this mode for development

## Start development (server-side-rendering)

```$ npm run api```

Don't forget install concurrently: `npm install -g concurrently`

```$ npm run start-ssr``` or ```$ sudo npm run start-ssr```

after: open 'http://localhost:3000' in browser<br /><br />
hint: use this mode for test server-side-rendering before build. <br />
doesn't have hot reload, but you can mannualy refresh page in browser.

## Start production

```$ npm run build```

```$ npm run api:prod```

```$ npm run start:prod```

after: open 'http://localhost' in browser<br /><br />
hint: use this mode for production on server (without server-side-rendering)

## Start production (server-side-rendering)

```$ npm run build```

```$ npm run api:prod```

```$ npm run start-ssr:prod```

after: open 'http://localhost' in browser<br /><br />
hint: use this mode for production on server

## Run tests

```$ npm run test```

## How to add [immutable-js](https://github.com/facebook/immutable-js)?

See branch: [with_immutable](https://github.com/anorudes/redux-easy-boilerplate/tree/with_immutable)<br />

## License

MIT