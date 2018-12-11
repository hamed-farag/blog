import styled from 'styled-components';

import { rhythm, lineColor } from '../../utils/typography';

export const Header = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: ${rhythm(35)};
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid ${lineColor};
  margin-bottom: ${rhythm(1)};
  padding: ${rhythm(1)} 0;
`;

export const Title = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  h2 {
    display: inline-block;
    a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const Control = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  a {
    margin: 0;
    cursor: pointer;
    img {
      width: ${rhythm(1.1)};
      margin: 0;
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
