import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../../components/shared/Bio';
import MainLayout from '../../containers/MainLayout';
import Head from './Partials/Head';
import Foot from './Partials/Foot';
import { Body } from './ui';

import Navigation from './Partials/Navigation';

class BlogPostTemplate extends React.Component {
  render() {
    const { location, pageContext, data } = this.props;
    const post = data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;

    const {
      title,
      date,
      readingTime,
      subTitle,
      tags,
      category,
    } = post.frontmatter;

    return (
      <MainLayout location={location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Head
          metadate={{
            title,
            date,
            readingTime,
            subTitle,
            category,
          }}
        />
        <Body dangerouslySetInnerHTML={{ __html: post.html }} />
        <Foot
          metadate={{
            tags,
          }}
        />
        <Bio />
        <Navigation pageContext={pageContext} />
      </MainLayout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMM, YYYY")
        tags
        category
        readingTime
      }
    }
  }
`;
