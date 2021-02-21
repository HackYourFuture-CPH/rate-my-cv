import React from 'react';
import PropTypes from 'prop-types';
import './SentReviewsComponent.styles.css';
import unknownUser from '../../assets/images/portraits/unknown-black.png';
import { RatingStars } from '../RatingStars/RatingStars';
import { ReviewPost } from '../ReviewPost/ReviewPost';

export const SentReviewsComponent = ({ reviews }) => {
  return (
    <div className="collection-reviews">
      {reviews.map((review) => (
        <div key={review.id} className="sent-review">
          <div className="profile-picture">
            <div className="circle-mask">
              <img
                src={review.cv.author.profileImageUrl || unknownUser}
                alt="Portrait of user"
                className="user-photo"
              />
            </div>
          </div>
          <div className="container-reviewee">
            <div className="content">
              <div className="reviewee-name-date">
                <span className="reviewer-name">
                  {review.cv.author.fullName}
                </span>
                <span className="review-date">
                  {review.cv.createdDate.toLocaleString()}
                </span>
              </div>
              <div className="stars-rating">
                <RatingStars averageStars={review.cv.averageStars} />
              </div>
              <a
                href={review.cv.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-orange"
              >
                See resume
              </a>
            </div>
          </div>
          <hr />
          <div>
            <ReviewPost
              profileImageUrl={review.reviewer.profileImageUrl}
              fullName={review.reviewer.fullName}
              createdDate={review.createdDate}
              review={review.review}
            />
          </div>
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
