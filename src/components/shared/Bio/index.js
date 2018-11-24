import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Biography } from './ui';

import profilePic from '../../../assets/images/profile-pic.jpg';

const Bio = ({ data }) => {
  const { jobTitle, location, twitter } = data.markdownRemark.frontmatter;

  return (
    <Biography>
      <img src={profilePic} alt={data.site.siteMetadata.author} />
      <div>
        <h2>{data.site.siteMetadata.author}</h2>
        <p>
          {jobTitle} | {location}
        </p>
        <p dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Biography>
  );
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
            }
          }
          markdownRemark(fields: { slug: { regex: "/(bio)/" } }) {
            id
            html
            frontmatter {
              location
              twitter
              jobTitle
            }
          }
        }
      `}
      render={data => <Bio data={data} {...props} />}
    />
  );
};
