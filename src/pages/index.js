import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import css from '../css/pages/index.module.css';
import '../css/utils/modal-video.css';

class IndexPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    const introHtml = data.intro.html;

    return (
      <Layout>
        <SEO title="Ilja Panic" />
        <section className={`${css.intro}`}>
          <div className={`${css.introText}`} dangerouslySetInnerHTML={{ __html: introHtml }} />
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  {
    intro: markdownRemark(frontmatter: { title: { eq: "intro" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default IndexPage;
