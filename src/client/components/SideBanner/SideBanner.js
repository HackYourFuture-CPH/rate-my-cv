import React from 'react';
import PropTypes from 'prop-types';
import './SideBanner.styles.css';

export const SideBanner = ({ image }) => {
  return (
    <div className="container-sign-up">
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

SideBanner.propTypes = {
  image: PropTypes.string.isRequired,
};
