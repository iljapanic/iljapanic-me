import React from 'react';
import { Link } from 'gatsby';

import css from '../css/components/Navigation.module.css';

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: css.active } : null;

const ListLink = props => (
  <li>
    <Link
      to={props.to}
      activeClassName={css.active}
      getProps={Link === '/' ? undefined : isPartiallyActive}
    >
      {props.children}
    </Link>
  </li>
);

export default () => (
  <nav className={css.nav}>
    <ul>
      <ListLink to="/feed/">Feed</ListLink>
      <ListLink to="/library/">Library</ListLink>
      <ListLink to="/writing/">Writing</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/services/">Services</ListLink>
      <ListLink to="/about/">About</ListLink>
    </ul>
  </nav>
);
