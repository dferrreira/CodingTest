import React, { useState } from 'react';

import cx from 'classnames';
import PropTypes from 'prop-types';

import FormInputBase from '../FormInputBase';

import * as S from './styled';

const FormTextarea = React.forwardRef(({
  id, name, label, hiddenLabel, rows, cols, isLoading, errors, ...props
}, ref) => {
  const [hasValue, setHasValue] = useState("");
  return (
  <FormInputBase
    error={errors?.hasOwnProperty(name) ? errors[name] : null}
    hiddenLabel={hiddenLabel}
    id={id}
    label={label}
  >
    <S.FormTextarea
      ref={ref}
      className={cx('form__textarea', { 'has--error': errors?.hasOwnProperty(name), 'has--value': hasValue.length > 0 })}
      cols={cols}
      disabled={isLoading}
      id={id}
      onChange={(e) => setHasValue(e?.target?.value)}
      name={name}
      rows={rows}
      {...props}
      defaultValue={hasValue}
    />
  </FormInputBase>
)});

FormTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
  errors: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  hiddenLabel: PropTypes.bool,
  isLoading: PropTypes.bool,
};

FormTextarea.defaultProps = {
  rows: 4,
  cols: null,
  hiddenLabel: false,
  isLoading: false,
};

export default React.memo(FormTextarea);
