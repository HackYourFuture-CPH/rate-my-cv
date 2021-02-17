import React from 'react';
import PropTypes from 'prop-types';
import './SentReviewsList.styles.css';
import { SentReviewsComponent } from '../SentReviewsComponent/SentReviewsComponent';

export const SentReviewsList = ({ reviews }) => {
  return (
    <div className="sent-reviews-list">
      <h2>Sent reviews</h2>
      {reviews.map((cvReviews, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="review-wrapper">
            <SentReviewsComponent reviews={cvReviews} />
          </div>
        );
      })}
    </div>
  );
};

SentReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        review: PropTypes.string.isRequired,
        createdDate: PropTypes.instanceOf(Date).isRequired,
        reviewer: PropTypes.shape({
          profileImageUrl: PropTypes.string.isRequired,
          fullName: PropTypes.string.isRequired,
        }).isRequired,
        cv: PropTypes.shape({
          fileUrl: PropTypes.string.isRequired,
          averageStars: PropTypes.number.isRequired,
          createdDate: PropTypes.instanceOf(Date).isRequired,
          author: PropTypes.shape({
            profileImageUrl: PropTypes.string.isRequired,
            fullName: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
};
SentReviewsList.defaultProps = {};
