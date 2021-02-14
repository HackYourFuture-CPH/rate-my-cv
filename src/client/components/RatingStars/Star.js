import React from 'react';
import './ratingStars.css';
import PropTypes from 'prop-types';

export function Star({ averageRatingInPercent }) {
  return (
    <div className="ratings">
      <div className="empty-stars" />
      <div
        className="full-stars"
        style={{ width: `${averageRatingInPercent}` }}
      />
    </div>
  );
}

Star.propTypes = {
  averageRatingInPercent: PropTypes.string.isRequired,
};
