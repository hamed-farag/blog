import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

export const Header = styled.div`
  margin-bottom: ${rhythm(1)};
  box-shadow: 0px 1px 5px ${props => props.theme.main.shadowColor};
  background-color: ${props => props.theme.main.secondaryBGColor};
`;

export const InnerHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: ${rhythm(35)};
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(0.8)} 0;
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
    margin: 0;
    padding: 0;
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

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
`;

export const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
`;
