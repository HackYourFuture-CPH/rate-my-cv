import React from "react";
import PropTypes from 'prop-types';

const Button = ({ buttonName,backgroundColor}) => {
  return <button type="button" style= {{backgroundColor}}> {buttonName} </button>;
};
export default Button;
 
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  backgroundColor:PropTypes.string.isRequired
};