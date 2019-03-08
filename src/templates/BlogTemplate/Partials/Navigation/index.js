import React from 'react';
import { Link } from 'gatsby';

import { NavContainer, NavigationNext, NavigationPrev } from './ui';

export default function(props) {
  const { previous, next } = props.pageContext;

  return (
    <NavContainer role="navigation">
      {previous && (
        <NavigationPrev>
          <b>PREVIOUS POST</b>
          <Link to={previous.fields.slug} rel="prev">
            {previous.frontmatter.title}
          </Link>
        </NavigationPrev>
      )}
      {next && (
        <NavigationNext>
          <b>NEXT POST</b>
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title}
          </Link>
        </NavigationNext>
      )}
      <div style={{ clear: 'both' }} />
    </NavContainer>
  );
}
