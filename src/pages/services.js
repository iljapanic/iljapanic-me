import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class ServicesPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="Services" />
        <section>
          <h1 className="ta-center">Services</h1>
        </section>
      </Layout>
    );
  }
}

export default ServicesPage;
