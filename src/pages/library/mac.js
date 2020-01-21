import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import LibraryNavigation from '../../components/LibraryNavigation';

import panels from '../../css/utils/panels.module.css';

class MacPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="MacOS Apps" />
        <div className={panels.grid}>
          <nav className={panels.leftPanel}>
            <LibraryNavigation />
          </nav>

          <section className={panels.mainPanel}>MAIN</section>

          <div className={panels.rightPanel}>FILTER</div>
        </div>
      </Layout>
    );
  }
}

export default MacPage;
