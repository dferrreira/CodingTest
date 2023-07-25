import React from 'react';

import PropTypes from 'prop-types';

import { childrenProps } from "../../../types/reactTypes";

import * as S from './styled';

const Form = React.forwardRef(({
  children, onSubmit, ...props
}, ref) => (
  <S.FormWrapper ref={ref} noValidate onSubmit={onSubmit} {...props}>
    {children}
  </S.FormWrapper>
));

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: childrenProps.isRequired,
};

export default React.memo(Form);
