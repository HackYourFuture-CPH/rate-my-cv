import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ buttonName, style, onClick, type }) => {
  return (
    /* eslint-disable react/button-has-type */
    <button className="button" type={type} style={style} onClick={onClick}>
      {buttonName}
    </button>
    /* eslint-enable react/button-has-type */
  );
};
export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  style: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  style: {},
  onClick: () => null,
};
