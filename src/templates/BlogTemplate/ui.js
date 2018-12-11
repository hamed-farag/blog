import styled, { createGlobalStyle } from 'styled-components';

import { rhythm, lineColor } from '../../utils/typography';

export const BlogGlobalStyle = createGlobalStyle`
  blockquote {
    color: ${props => props.theme.blockquote.color};
    border-left: 4px solid ${props => props.theme.blockquote.border};
  }
`;

export const Body = styled.div`
  margin: ${rhythm(1)} 0;
  padding: ${rhythm(1)} ${rhythm(0.5)};
  border-top: 1px solid ${lineColor};
  border-bottom: 1px solid ${lineColor};
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
  float: left;
  font-size: ${rhythm(0.5)};
  a {
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #333;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 0 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
    &:before {
      background: #ccc;
      border-radius: 10px;
      box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
      content: '';
      height: 6px;
      left: 10px;
      position: absolute;
      width: 6px;
      top: 10px;
    }
    &:after {
      background: ${props => props.theme.main.backgroundColor};
      border-bottom: 13px solid transparent;
      border-left: 10px solid #eee;
      border-top: 13px solid transparent;
      content: '';
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
