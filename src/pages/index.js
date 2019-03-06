import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';

import Bio from '../components/shared/Bio';
import MainLayout from '../containers/MainLayout';
import { rhythm } from '../utils/typography';

import { Metadata, Page, Post } from './ui';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    );
    const repoUrl = get(this, 'props.data.site.siteMetadata.repoUrl');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <MainLayout title={siteTitle} repoUrl={repoUrl}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Page>
          <Bio />
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                <Post key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    {title}
                  </h3>
                  <small>
                    <Metadata>
                      <span>
                        <FaCalendarAlt />
                      </span>
                      {node.frontmatter.date}
                    </Metadata>
                    <Metadata>
                      <span>
                        <FaTag />
                      </span>
                      {node.frontmatter.category}
                    </Metadata>
                  </small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Post>
              </Link>
            );
          })}
        </Page>
      </MainLayout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        repoUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }, 
      filter: {fileAbsolutePath: {regex: "//(blogs)/.*\\.md$/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`;
