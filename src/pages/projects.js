import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class ProjectsPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <section>
          <h1 className="ta-center">Projects</h1>
        </section>
      </Layout>
    );
  }
}

export default ProjectsPage;
