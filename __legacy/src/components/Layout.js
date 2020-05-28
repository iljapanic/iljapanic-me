import React from 'react';

// components
import Header from './Header';
import Footer from './Footer';

// global css
import '../css/utils/reset.css';
import '../css/utils/base.css';
import '../css/utils/helpers.css';
import '../css/utils/gutenberg.css';

import css from '../css/components/Layout.module.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
