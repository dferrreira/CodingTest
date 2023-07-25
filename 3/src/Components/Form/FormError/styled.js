import styled from 'styled-components';

import { rem } from 'polished';

export const FormError = styled.span`
  font-family: Poppins-Regular;
  font-size: ${rem(12)};
  font-weight: 700;
  color: #aa0000;
  position: absolute;
  top: calc(100% + ${rem(10)});
  right: ${rem(14)};
`;
