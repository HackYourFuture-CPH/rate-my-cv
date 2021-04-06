import React from 'react';
import PropTypes from 'prop-types';
import unknownUser from '../../assets/images/portraits/unknown-black.png';
import './CardCvViewSearchComponent.styles.css';

export const CardCvViewSearchComponent = ({
  profileImageUrl,
  fullName,
  position,
  cvTitle,
  fileUrl,
  createdDate,
}) => {
  return (
    <div className="card-cv-whole">
      <div className="card-cv-top">
        <div className="profile-picture">
          <div className="circle-mask">
            <img
              src={profileImageUrl}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = unknownUser;
              }}
              alt="Portrait of user"
              className="user-photo"
            />
          </div>
        </div>
        <div className="user-info">
          <div className="user-fullname">{fullName}</div>
          <div className="user-position">{position}</div>
        </div>
      </div>
      <div className="card-cv-middle">
        <div className="cv-name">{cvTitle}</div>
        <div className="created-date">{createdDate.toLocaleString()}</div>
      </div>
      <div className="card-cv-bottom">
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-blue"
        >
          See resume
        </a>
      </div>
    </div>
  );
};

CardCvViewSearchComponent.propTypes = {
  profileImageUrl: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  cvTitle: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
};
