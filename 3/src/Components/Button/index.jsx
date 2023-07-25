import React from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import { childrenProps } from '../../types/reactTypes';

import * as S from './styled';

const Button = React.forwardRef(({
  children, color, fullWidth, isDisabled, isLoading, title, type, noPrefetch, spinnerSize, ...props
}, ref) => (
  <S.ButtonWrapper
    ref={ref}
    className={cx('btn-hover')}
    color={color}
    disabled={isLoading || isDisabled}
    fullWidth={fullWidth}
    title={title}
    type={type}
    {...(noPrefetch && { 'data-noprefetch': true })}
    {...props}
  >
    {children}
  </S.ButtonWrapper>
));

Button.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: childrenProps,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  spinnerSize: PropTypes.number,
  type: PropTypes.string,
  noPrefetch: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  children: null,
  color: null,
  fullWidth: null,
  isDisabled: false,
  isLoading: false,
  spinnerSize: 32,
  noPrefetch: false,
};

export default React.memo(Button);
