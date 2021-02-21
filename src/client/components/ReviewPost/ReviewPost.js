import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../assets/images/portraits/unknown-black.png';
import './ReviewPost.styles.css';

export const ReviewPost = ({
  fullname,
  review,
  createdDate,
  profileImageUrl,
}) => {
  return (
    <div className="review-section">
      <div className="profile-image">
        <img src={profileImageUrl || profileImage} alt="Userimage" />
      </div>

      <div className="name-date">
        <span className="name">{fullname} </span>
        <span className="date-time">{createdDate.toLocaleString()}</span>
      </div>

      <div />
      <span className="review-text">{review}</span>
    </div>
  );
};
ReviewPost.propTypes = {
  profileImageUrl: PropTypes.string,
  fullname: PropTypes.string,
  review: PropTypes.string,
  createdDate: PropTypes.instanceOf(Date),
};
ReviewPost.defaultProps = {
  profileImageUrl: '',
  fullname: '',
  review: '',
  createdDate: '',
};
