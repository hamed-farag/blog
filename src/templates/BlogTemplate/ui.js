import styled from 'styled-components';

import { rhythm, lineColor } from '../../utils/typography';

export const Body = styled.div`
  margin: ${rhythm(1)} 0;
  padding: ${rhythm(1)} ${rhythm(0.5)};
  border-top: 1px solid ${lineColor};
  border-bottom: 1px solid ${lineColor};
`;
