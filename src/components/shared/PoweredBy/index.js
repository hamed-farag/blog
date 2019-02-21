import React from 'react';
import styled from 'styled-components';
import { rhythm, lineColor } from '../../../utils/typography';

export default function(props) {
  const PoweredBy = styled.div`
    text-align: center;
    border-top: 1px solid ${lineColor};
    margin-top: ${rhythm(1)};
    padding: ${rhythm(1)} 0;
    max-width: 56.875rem;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <PoweredBy>
      Powered By <b>GatsbyJS</b> with a custom development flavor using{' '}
      <b>ReactJS</b> ♥
    </PoweredBy>
  );
}
