import styled from 'styled-components';

import { rem } from 'polished';

export const FormGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;

  &:not(:last-child) {
    margin-bottom: ${rem(20)};
  }

  &.double-column {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${rem(8)} ${rem(16)};
  }
`;
