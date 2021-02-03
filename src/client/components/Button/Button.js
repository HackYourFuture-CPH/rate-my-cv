import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ buttonName, style, type, onClick }) => {
  const button = type;
  return (
    <button className="button" type={button} style={style} onClick={onClick}>
      {buttonName}
    </button>
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
