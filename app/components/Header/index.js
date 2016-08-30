// Simple header component

import React from 'react';
import { Link } from 'react-router';

/* component styles */
import s from './styles.css';

const Header = () => (
  <div className={s.root}>
    <ul className={s.menu}>
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
