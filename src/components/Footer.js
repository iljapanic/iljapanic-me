import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';

import css from '../css/components/Footer.module.css';

class Footer extends React.Component {
  render() {
    return <footer className={`ta-center ${css.footer}`}>Ilja Panic 2019</footer>;
  }
}

export default Footer;
