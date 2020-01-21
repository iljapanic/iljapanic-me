import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LibraryNavigation from '../components/LibraryNavigation';
import Books from '../components/Books';
import BooksFilter from '../components/BooksFilter';

import panels from '../css/utils/panels.module.css';

class BooksPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="Books" />
        <div className={panels.grid}>
          <nav className={panels.leftPanel}>
            <LibraryNavigation />
          </nav>

          <section className={panels.mainPanel}>
            <Books />
          </section>

          <div className={panels.rightPanel}>
            <BooksFilter />
          </div>
        </div>
      </Layout>
    );
  }
}

export default BooksPage;
