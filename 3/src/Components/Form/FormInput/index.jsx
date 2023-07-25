import React, { useState } from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import FormInputBase from '../FormInputBase';

import * as S from './styled';

const FormInput = React.forwardRef(({
  id, type, name, label, hiddenLabel, isLoading, errors, ...props
}, ref) => { 
  const [hasValue, setHasValue] = useState("");
  return (
  <FormInputBase
    error={errors?.hasOwnProperty(name) ? errors[name] : null}
    hiddenLabel={hiddenLabel}
    id={id}
    label={label}
  >
    <S.FormInput
      className={cx('form__input', { 'has--error': errors?.hasOwnProperty(name), 'has--value': hasValue.length > 0 })}
      disabled={isLoading}
      id={id}
      name={name}
      onChange={(e) => setHasValue(e?.target?.value)}
      inputRef={ref}
      type={type}
      {...props}
      defaultValue={hasValue}
    />
  </FormInputBase>
)});

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errors: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  hiddenLabel: PropTypes.bool,
  isLoading: PropTypes.bool,
};

FormInput.defaultProps = {
  label: null,
  hiddenLabel: false,
  isLoading: false,
};

export default React.memo(FormInput);
