import styled from 'styled-components';

import { rhythm, lineColor } from '../../utils/typography';

export const Blog = styled.div``;

export const Post = styled.div`
  background-color: ${props => props.theme.main.secondaryBGColor};
  box-shadow: 0px 0px 10px ${props => props.theme.main.shadowColor};
  padding: ${rhythm(0.5)};
  border-radius: 3px;
  border-top: 5px solid ${props => props.theme.blog.post.borderColor};
`;

export const Body = styled.div`
  margin: ${rhythm(0.8)} 0;
  padding: ${rhythm(1)} ${rhythm(0.5)};
  border-top: 1px solid ${lineColor};
  border-bottom: 1px solid ${lineColor};
`;

export const Discussion = styled.div`
  background-color: ${props => props.theme.main.secondaryBGColor};
  box-shadow: 0px 0px 10px ${props => props.theme.main.shadowColor};
  padding: ${rhythm(0.5)} ${rhythm(0.5)} 0px ${rhythm(0.5)};
  border-radius: 3px;
`;

export const Foot = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const Share = styled.div`
  margin-bottom: calc(0.8125rem / 2);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  span {
    font-size: ${rhythm(0.6)};
    margin-right: 5px;
  }
  div {
    cursor: pointer;
    outline: none;
  }
`;

export const Tags = styled.ul`
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Tag = styled.li`
  display: inline-block;
  border-radius: 3px;
  font-weight: 600;
  padding: 3px 10px;
  margin: 0 5px;
  font-size: ${rhythm(0.5)};
  span {
    border-radius: 3px;
    color: #000;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
  }
`;
