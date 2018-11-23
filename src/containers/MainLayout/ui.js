import styled from 'styled-components';
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography';

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  h3 {
    font-size: ${rhythm(1.5)};
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
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1)};
  padding-top: ${rhythm(4)};
`;
