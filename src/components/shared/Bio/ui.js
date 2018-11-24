import styled from 'styled-components';

import { rhythm, lineColor } from '../../../utils/typography';

export const Biography = styled.div`
  margin: ${rhythm(1)} 0;
  display: flex;
  padding: ${rhythm(0.5)};
  background-color: #eeeeee;
  img {
    border: 1px solid ${lineColor};
    padding: ${rhythm(0.1)};
    border-left: none;
    border-right: none;
    margin-right: ${rhythm(1 / 2)};
    margin-bottom: 0;
    border-radius: 50%;
    width: ${rhythm(2.5)};
    height: ${rhythm(2.5)};
  }
`;
