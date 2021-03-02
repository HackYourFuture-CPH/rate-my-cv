import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ buttonName, onClick, type }) => {
  return (
    /* eslint-disable react/button-has-type */
    <button className="button" type={type} onClick={onClick}>
      {buttonName}
    </button>
    /* eslint-enable react/button-has-type */
  );
};
export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => null,
  type: 'button',
};
