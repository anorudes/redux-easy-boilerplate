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
- [Redux 1.0.0-rc](https://github.com/gaearon/redux)
- [React Router 1.0.0-beta3](https://github.com/rackt/react-router)
- [Bootstrap Webpack](https://github.com/bline/bootstrap-webpack)
- Sass modules
- [jsx-control-statements](https://github.com/valtech-au/jsx-control-statements)
- [redux-logger](https://github.com/fcomb/redux-logger)

![https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/browser.png](https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/browser.png)

## Installation
```
$ npm install
```

## Run
```
$ npm start
```

## Component generator

### Simple generator

```
$ gulp simple-component --name SimpleComponent
```

![https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/simple-component.png](https://raw.githubusercontent.com/anorudes/redux-easy-boilerplate/master/src/images/simple-component.png)

Simple component looks like:

```
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

```
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import { example } from '../../actions';

export default class <%= name %> extends Component {
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

```
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

```
let initialState = { text: 'text' };

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
