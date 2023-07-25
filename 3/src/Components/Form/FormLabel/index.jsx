import React from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import { childrenProps } from "../../../types/reactTypes";

import * as S from './styled';

const FormLabel = React.forwardRef(({
  children, hiddenLabel, htmlFor, ...props
}, ref) => (
  <S.FormLabel
    ref={ref}
    className={cx('form__label', { 'visually-hidden': hiddenLabel })}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </S.FormLabel>
));

FormLabel.propTypes = {
  children: childrenProps.isRequired,
  hiddenLabel: PropTypes.bool,
  htmlFor: PropTypes.string,
};

FormLabel.defaultProps = {
  hiddenLabel: false,
  htmlFor: null,
};

export default React.memo(FormLabel);
