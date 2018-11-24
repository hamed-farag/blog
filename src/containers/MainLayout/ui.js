import styled from 'styled-components';

import { rhythm, lineColor } from '../../utils/typography';

export const Header = styled.div`
  max-width: ${rhythm(35)};
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid ${lineColor};
  margin-bottom: ${rhythm(1)};
  padding: 0 ${rhythm(0.5)};
  h2 {
    display: inline-block;
    margin: ${rhythm(1)} 0;
    a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
`;
