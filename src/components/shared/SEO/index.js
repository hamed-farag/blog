import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import Twitter from './Twitter';

const SEO = props => {
  const { title, description, keywords, twitterUsername } = props;

  return (
    <React.Fragment>
      <Helmet title={title} htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Twitter
        username={twitterUsername}
        title={title}
        description={description}
      />
    </React.Fragment>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query SEOQuery {
          site {
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
              twitterUsername
              defaultKeywords: keywords
            }
          }
        }
      `}
      render={data => {
        const {
          site: {
            siteMetadata: {
              defaultTitle,
              defaultDescription,
              twitterUsername,
              defaultKeywords,
            },
          },
        } = data;

        // Passed by <SEO /> component
        const { title, description, keywords } = props;

        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          keywords: keywords || defaultKeywords,
        };

        return (
          <SEO
            title={seo.title}
            description={seo.description}
            keywords={seo.keywords}
            twitterUsername={twitterUsername}
            {...props}
          />
        );
      }}
    />
  );
};
