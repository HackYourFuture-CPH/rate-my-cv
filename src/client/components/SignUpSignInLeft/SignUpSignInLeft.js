import React from 'react';
import PropTypes from 'prop-types';
import './SignUpSignInLeft.styles.css';

export const SignUpSignInLeft = ({ image, style }) => {
  return (
    <div className="container-sign-up" style={style}>
      <div className="text-sign-up">
        <div>
          <span className="review">Review</span>
          <span className="resume">Resume</span>
        </div>
        <div className="description-sign-up">
          Present your best self and help others do the same
        </div>
      </div>
      <img src={image} className="img-sign-up" alt="sign-up" />
    </div>
  );
};

SignUpSignInLeft.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.shape({ backgroundColor: PropTypes.string }).isRequired,
};
