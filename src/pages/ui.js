import styled from 'styled-components';

import { rhythm } from '../utils/typography';

export const Page = styled.div`
  padding: 0 ${rhythm(0.5)};
  a {
    text-decoration: none;
    color: ${props => props.theme.main.color};
  }
`;

export const Metadata = styled.span`
  margin: 0 5px;
  display: inline-block;
  color: ${props => props.theme.main.color};
  opacity: 0.5;
  span {
    margin-right: 5px;
    font-size: 12px;
  }
`;

export const Post = styled.div`
  display: inline-block;
  max-width: 100%;
  text-align: left;
  padding: 10px;
  background-color: ${props => props.theme.main.secondaryBGColor};
  border-top: 5px solid ${props => props.theme.blog.post.borderColor};
  box-shadow: 0px 1px 5px ${props => props.theme.main.shadowColor};
  border-radius: 3px;
  h3 {
    margin: 10px 0;
  }
  small {
    margin: 10px 0;
    display: inline-block;
  }
  p {
    margin: 0;
  }
  @media (min-width: 576px) {
    max-width: calc(100% / 2 - 20px);
    text-align: center;
    margin: 10px;
  }
`;
