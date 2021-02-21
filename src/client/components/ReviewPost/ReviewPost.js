import React from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../assets/images/portraits/unknown-black.png';
import './ReviewPost.styles.css';

export const ReviewPost = ({ name, description, date, profileImageUrl }) => {
 
  return (
    <div className="review-section">
      <div className="profile-image">
        <img src={profileImageUrl || profileImage} alt="Userimage" />
      </div>
      
        <div className="name-date">
          <span className="name">{name} </span>
          <span className="date-time">{date.toLocaleString()}</span>
        </div>
      
      <div/>
      <span className= "description">
            {description}
         
        </span>
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
