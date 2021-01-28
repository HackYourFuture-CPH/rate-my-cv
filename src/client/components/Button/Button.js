import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ buttonName, backgroundColor }) => {
  return (
    <button className="button" type="submit" style={{ backgroundColor }}>
      {' '}
      {buttonName}{' '}
    </button>
  );
};
export default Button;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
