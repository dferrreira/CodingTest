import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

const FormError = ({ message }) => (
  <S.FormError className="form__error">
    {message}
  </S.FormError>
);

FormError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default React.memo(FormError);
