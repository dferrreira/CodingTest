import React from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import { childrenProps } from "../../../types/reactTypes";

import * as S from './styled';

const FormGroup = ({ children, className }) => (
  <S.FormGroupWrapper
    className={cx('form__group', className)}
  >
    {children}
  </S.FormGroupWrapper>
);

FormGroup.propTypes = {
  children: childrenProps.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};


FormGroup.defaultProps = {
  className: '',
};

export default FormGroup;
