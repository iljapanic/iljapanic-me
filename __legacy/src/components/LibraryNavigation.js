import React from 'react';
import { Link } from 'gatsby';

import css from '../css/components/LibraryNavigation.module.css';

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName={css.active}>
      {props.children}
    </Link>
  </li>
);

export default () => (
  <nav className={css.nav}>
    <ul>
      <ListLink to="/library/">Books</ListLink>
      <ListLink to="/library/newsletters/">Newsletters</ListLink>
      <ListLink to="/library/podcasts/">Podcasts</ListLink>
      <ListLink to="/library/mac/">MacOS</ListLink>
      <ListLink to="/library/chrome/">Chrome</ListLink>
      <ListLink to="/library/websites/">Websites</ListLink>
    </ul>
  </nav>
);
