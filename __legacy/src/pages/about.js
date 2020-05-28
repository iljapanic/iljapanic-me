import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class AboutPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="About" />
        <section>
          <h1 className="ta-center">About</h1>
        </section>
      </Layout>
    );
  }
}

export default AboutPage;
