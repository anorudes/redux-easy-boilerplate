import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./styles/Typography.scss';
let styles = require('./styles/Typography.scss').locals.styles;

export default class Typography extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={ `${ styles }`} >
        <h1>Redux Easy Boilerplate</h1>

        <h2>About Boilerplate</h2>
        <p>
          Simple boilerplate to start your project easy with the newest and awesome things!
        </p>

        <h2>Boilerplate contains</h2>
        <ul>
          <li>
            Webpack
          </li>
          <li>
            React and React Hot Reload
          </li>
          <li>
            Redux
          </li>
          <li>
            Neater If and For for React JSX
          </li>
          <li>
            Bebel
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            CSS Modules
          </li>
        </ul>
      </div>
    );
  }
}
