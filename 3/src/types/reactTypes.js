import PropTypes from 'prop-types';

export const childrenProps = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.string,
  PropTypes.func,
]);
