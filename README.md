Redux Easy Boilerplate
=========================

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Run](#run)
- [Component generator](#component-generator)
  - [Simple component](#simple-generator)
  - [Complex component](#complex-generator)

## About
- [React 0.13.3](https://github.com/facebook/react)
- [Redux 1.0](https://github.com/gaearon/redux)
- [React Router 1.0.0-beta3](https://github.com/rackt/react-router)
- [Bootstrap Webpack](https://github.com/bline/bootstrap-webpack)
- Sass modules ([sass-loader](https://github.com/jtangelder/sass-loader) [css-loader](https://github.com/webpack/css-loader) [style-loader](https://github.com/webpack/style-loader))
- [jsx-control-statements](https://github.com/valtech-au/jsx-control-statements)
- [redux-logger](https://github.com/fcomb/redux-logger)

## Installation
```
$ npm install
```

## Run
```
$ npm start
```

And open in browser: [http://localhost:3000](http://localhost:3000)

## Component generator

### Simple generator

```
$ gulp simple-component --name SimpleComponent
```

![https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/simple-component.png](https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/simple-component.png)

Simple component looks like:

```js
import React, { Component } from 'react';

// Component styles
import styles from './<%= name %>.styles.js';

export default class <%= name %> extends Component {
  render() {
    return (
      <div className={ styles } >
        <h2>
          ComponentName
        </h2>
      </div>
    );
  }
}
```

### Complex generator
```
$ gulp component --name ComplexComponent
```

![https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/complex-component.png](https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/complex-component.png)

Complex component looks like:

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import { example } from '../../actions';

export default class <%= name %> extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.string,
  };

  render() {
    const { dispatch, data } = this.props;
    return (
      <div className={ styles } >
        <h2>
          <%= name %>
        </h2>
        <p>
          Data: { data }
        </p>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.<%= name %>,
  };
}

export default connect(select)(<%= name %>);

```

Action file:

```js
/*
 * action types
 */

export function example() {
  return {
    type: 'EXAMPLE',
  };
}
```

Reducer file:

```js
const initialState = { text: 'text' };

export function <%= name %>(state = initialState, action) {
  let newState = {...state};

  switch (action.type) {
  case 'EXAMPLE':
    newState.text = "change";
    return newState;

  default:
    return newState;
  }
}
```
