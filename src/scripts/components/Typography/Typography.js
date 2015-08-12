import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './styles.js';

export default class Typography extends Component {
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
            Babel
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            SASS Modules
          </li>
        </ul>
      </div>
    );
  }
}
