import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ buttonName, style }) => {
  return (
    <button className="button" type="button" style={style}>
      {buttonName}
    </button>
  );
};
export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  style: PropTypes.string,
};
Button.defaultProps = {
  style: {},
};
