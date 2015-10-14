import React from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

export default () => (
  <nav className={`${styles} navbar navbar-default`}>
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <span className="navbar-brand">Redux easy boilerplate</span>
      </div>
      <div id="navbar" className="header__navbar navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/home" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/list" activeClassName="active">List123</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
