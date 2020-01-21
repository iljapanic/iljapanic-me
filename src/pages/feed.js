import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class FeedPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="Feed" />
        <section>
          <h1 className="ta-center">Feed</h1>
        </section>
      </Layout>
    );
  }
}

export default FeedPage;
