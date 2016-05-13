Redux Easy Universal Boilerplate
=========================
[![bitHound Overall Score](https://www.bithound.io/github/anorudes/redux-easy-boilerplate/badges/score.svg)](https://www.bithound.io/github/anorudes/redux-easy-boilerplate)

---

## About

Really easy react universal boilerplate with small code base and many commentaries

- React
- Redux
- Server Side Rendering
- React Router
- Immutable-js (with_immutable branch. see below for details)
- Api server on other port (express)
- Sass
- React-helmet
- Mocha
- Chai
- Enzyme
- Sinon
- Others:
  - ducks-modular-redux
  - api + promise middleware
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

```$ npm run start-ssr```

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

See in branch: [with_immutable](https://github.com/anorudes/redux-easy-boilerplate/tree/with_immutable)<br />
Also you can revert commit [without_immutable](https://github.com/anorudes/redux-easy-boilerplate/commit/c0492e7a6ef370658bc4ababa8c78cfc7cce9a79)