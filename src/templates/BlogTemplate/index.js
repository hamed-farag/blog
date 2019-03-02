import React from 'react';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import get from 'lodash/get';

import Bio from '../../components/shared/Bio';
import SEO from '../../components/shared/SEO';
import MainLayout from '../../containers/MainLayout';
import Head from './Partials/Head';
import Foot from './Partials/Foot';
import { Body, BlogGlobalStyle } from './ui';

import Navigation from './Partials/Navigation';

class BlogPostTemplate extends React.Component {
  render() {
    const { location, pageContext, data } = this.props;
    const post = data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const repoUrl = get(this.props, 'data.site.siteMetadata.repoUrl');
    const {
      id,
      title,
      date,
      readingTime,
      subTitle,
      tags,
      category,
    } = post.frontmatter;

    const disqusConfig = {
      url: location.href,
      identifier: id,
      title: title,
    };

    return (
      <MainLayout title={siteTitle} repoUrl={repoUrl}>
        <SEO title={title} description={subTitle} keywords={tags} />
        <BlogGlobalStyle />
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
            title,
            tags,
            url: location.href,
          }}
        />
        <Navigation pageContext={pageContext} />
        <DiscussionEmbed
          shortname={process.env.disqus_shortname}
          config={disqusConfig}
        />
        <Bio />
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
        repoUrl
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
