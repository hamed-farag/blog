import React from 'react';
import { Link } from 'gatsby';

export default function(props) {
  const { previous, next } = props.pageContext;

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        magin: 0, 
      }}
    >
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            ← {next.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            {previous.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  );
}
