import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class CallPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="Book consultation" />
        <section>
          <h1 className="ta-center">Schedule a free call</h1>
        </section>
      </Layout>
    );
  }
}

export default CallPage;
