import React from 'react';
import PropTypes from 'prop-types';
import './SentReviewsComponent.styles.css';
import unknownUser from '../../assets/images/portraits/unknown-black.png';
import { RatingStars } from '../RatingStars/RatingStars';
import { ReviewPost } from '../ReviewPost/ReviewPost';

export const SentReviewsComponent = ({ reviews }) => {
  return (
    <div className="collection-reviews">
      {reviews.map(({ id, cv, reviewer, createdDate, review }) => (
        <div key={id} className="sent-review">
          <div className="profile-picture">
            <div className="circle circle-cut">
              <img
                src={cv.author.profileImageUrl || unknownUser}
                alt="Portrait of user"
                className="user-pic"
              />
            </div>
          </div>
          <div className="container-reviewee">
            <div className="reviewee-name-date">
              <span className="reviewer-name">{cv.author.fullName}</span>
              <span className="review-date">
                {cv.createdDate.toLocaleString()}
              </span>
            </div>
            <RatingStars averageStars={cv.averageStars} />
            <a
              href={cv.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-orange"
            >
              See resume
            </a>
          </div>
          <div className="divider-line" />
          <ReviewPost
            profileImageUrl={reviewer.profileImageUrl}
            fullName={reviewer.fullName}
            createdDate={createdDate}
            review={review}
          />
        </div>
      ))}
    </div>
  );
};

const Person = PropTypes.shape({
  fullName: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string,
});

const CV = PropTypes.shape({
  fileUrl: PropTypes.string.isRequired,
  averageStars: PropTypes.number.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  author: Person.isRequired,
});

const Review = PropTypes.shape({
  id: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  reviewer: Person.isRequired,
  cv: CV.isRequired,
});

SentReviewsComponent.propTypes = {
  reviews: PropTypes.arrayOf(Review).isRequired,
};
