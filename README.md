Redux Easy Universal Boilerplate
=========================

## About

Really easy react universal boilerplate with small code base and many commentaries

- React
- Redux
- Server Side Rendering
- React Router
- Express
- Sass
- Mocha
- Chai
- Enzyme
- Sinon
- Others: api + promise middleware, bundle.css for server-side-rendering, vendor bundle, async pages, alias, 4 modes for run (with auto rimraf dist)

Doesnt'have redux-form and bootstrap for your choice

## How it works

See commentaries in code

## Installation

Install [nodemon](https://github.com/remy/nodemon)<br />
Install [concurrently](https://github.com/kimmobrunfeldt/concurrently)

## How to add immutable?

See in branch: [with_immutable](https://github.com/anorudes/redux-easy-boilerplate/tree/with_immutable)
or you can revert commit [without_immutable](https://github.com/anorudes/redux-easy-boilerplate/commit/c0492e7a6ef370658bc4ababa8c78cfc7cce9a79)


## Start development

```$ npm run api-mon```

```$ npm run start```

after: open 'http://localhost:3000' in browser<br />
hint: use this mode for dev

## Start development (server-side-rendering)

```$ npm run api-mon```

```$ npm run start-ssr```

after: open 'http://localhost:3000' in browser<br />
hint: doesn't have hot reload, but you can mannualy refresh page in browser.<br />
This mode need for test before build prod

## Start production

```$ npm run api:prod```

```$ npm run start:prod```

after: open 'http://localhost' in browser<br />
hint: this mode need if you dont' want server-side-rendering

## Start production (server-side-rendering)

```$ npm run build```

```$ npm run api:prod```

```$ npm run start-ssr:prod```

after: open 'http://localhost' in browser<br />
hint: this mode doesn't have hot-reload and works only with build.<br />
Use for production on server

## Run tests

```$ npm run test```
