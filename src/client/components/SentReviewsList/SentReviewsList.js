import React from 'react';
import PropTypes from 'prop-types';
import './SentReviewsList.styles.css';
import { SentReviewsComponent } from '../SentReviewsComponent/SentReviewsComponent';

export const SentReviewsList = ({ reviews }) => {
  return (
    <div className="sent-reviews-list">
      <h2>Sent reviews</h2>
      {reviews.map((cvReviews) => {
        return (
          <div className="review-wrapper">
            <SentReviewsComponent reviews={cvReviews} />
          </div>
        );
      })}
    </div>
  );
};

SentReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      profileImageUrl: PropTypes.string,
      fullName: PropTypes.string.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
      review: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

SentReviewsList.defaultProps = {};
