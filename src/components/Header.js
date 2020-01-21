import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

import css from '../css/components/Header.module.css';

const Header = () => (
  <header className={css.header}>
    <div className={css.logo}>
      <Link to="/">iljapanic</Link>
    </div>
    <div className={css.nav}>
      <Navigation />
    </div>
    <div className={css.booking}>
      <Button type="link" url="/call/" style="round" size="small">
        Schedule free call
      </Button>
    </div>
  </header>
);

export default Header;
