import React from 'react';
import PropTypes from 'prop-types';
import './ReviewerPreviewComponent.styles.css';
import unknownUser from '../../assets/images/portraits/unknown-black.png';

export const ReviewerPreviewComponent = ({
  profileImageUrl,
  fullName,
  createdDate,
  review,
}) => {
  return (
    <div className="container-reviewer">
      <div className="profile-picture">
        <div className="circle-mask">
          <img
            src={profileImageUrl || unknownUser}
            alt="Portrait of user"
            className="user-photo"
          />
        </div>
      </div>
      <div className="reviewer-name-date">
        <span className="reviewer-name">{fullName}</span>
        <span className="review-date">{createdDate.toLocaleString()}</span>
      </div>
      <div />
      <div className="review-text">{review}</div>
    </div>
  );
};

ReviewerPreviewComponent.propTypes = {
  profileImageUrl: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  review: PropTypes.string.isRequired,
};

ReviewerPreviewComponent.defaultProps = {
  profileImageUrl: unknownUser,
};
