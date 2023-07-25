import styled from 'styled-components';

import { rem } from 'polished';

import { formInputStyle } from '../FormInputBase/styled';

export const FormTextarea = styled.textarea`
  ${formInputStyle}
  height: auto;
`;
