import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../assets/images/portraits/man2.jpg';
import './ReviewPost.styles.css';

export const ReviewPost = ({ name, description, date, profileImageUrl }) => {
 
  return (
    <div className="review-section">
      <div className="profile-image">
        <img src={profileImageUrl || profileImage} alt="Userimage" />
      </div>
      <div className="title-text">
        <div className="name-date">
          <p className="name">{name} </p>
          <p className="date-time">{date.toLocaleString()}</p>
        </div>
        <p>
          <textarea id="description" cols="70" rows="3">
            {description}
          </textarea>
        </p>
      </div>
    </div>
  );
};
ReviewPost.propTypes = {
  profileImageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
ReviewPost.defaultProps = {
  profileImageUrl: profileImage,
  name : '',
  description: '',
  date: '',
};
