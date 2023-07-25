import React from 'react';

import PropTypes from 'prop-types';

import { childrenProps } from "../../../types/reactTypes";

import FormError from '../FormError';
import FormLabel from '../FormLabel';

import * as S from './styled';

const FormInputBase = ({
  children, id, label, hiddenLabel, error, ...props
}) => (
  <S.FormInputBaseWrapper className="form__input-wrapper">
    {label && (
      <FormLabel hiddenLabel={hiddenLabel} htmlFor={id}>
        {label}
      </FormLabel>
    )}

    {React.cloneElement(children, { ...props })}
    <S.InputFocus />
    {error && (
      <FormError message={error.message} />
    )}
  </S.FormInputBaseWrapper>
);

FormInputBase.propTypes = {
  children: childrenProps.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  hiddenLabel: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object]),
};

FormInputBase.defaultProps = {
  label: null,
  hiddenLabel: false,
  error: null,
};

export default React.memo(FormInputBase);
