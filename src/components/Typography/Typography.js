import React, { Component } from 'react';

/* component styles */
import styles from './styles.js';

export default class Typography extends Component {
  render() {
    return (
      <div className={ `${ styles }` }>
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
            Babel
          </li>
          <li>
            React and React Hot Reload
          </li>
          <li>
            React Router
          </li>
          <li>
            Redux
          </li>
          <li>
            SASS Modules
          </li>
          <li>
            Bootstrap
          </li>
          <li>
            Neater If and For for React JSX
          </li>
          <li>
            Redux logger
          </li>
          <li>
            React Document Meta
          </li>
        </ul>
      </div>
    );
  }
}
