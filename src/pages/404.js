import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import notFound from '../images/not-found.gif';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src={notFound} />
  </Layout>
);

export default NotFoundPage;
