// Simple header component

import React from 'react';
import { Link } from 'react-router';

/* component styles */
require('./styles.scss');

const Header = () => (
  <div className="header">
    <ul className="header__menu">
      <li>
        <Link to="/posts">
          Posts
        </Link>
      </li>

      <li>
        <Link to="/about">
          About
        </Link>
      </li>

      <li>
        <Link to="/async-example">
          Async page example
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
