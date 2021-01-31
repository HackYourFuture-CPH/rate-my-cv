import React from 'react';
import PropTypes from 'prop-types';
import unknownUser from '../../assets/images/portraits/unknown-black.jpg';
import './CardCvViewSearchComponent.styles.css';
import Button from '../Button/Button';

export const CardCvViewSearchComponent = ({
  profileImageUrl,
  fullName,
  position,
  cvTitle,
  fileUrl,
  createdDate,
}) => {
  const parsedDate = (date) =>
    new Date(date).toLocaleDateString('en-GB', { timeZone: 'UTC' });

  return (
    <div className="card-cv-whole">
      <div className="card-cv-top">
        <div className="profile-picture">
          <div className="circle-mask">
            <img
              src={profileImageUrl || unknownUser}
              alt="Portrait of user"
              className="user-photo"
            />
          </div>
        </div>
        <div className="user-info">
          <p className="user-name">{fullName}</p>
          <p className="user-position">{position}</p>
        </div>
      </div>
      <div className="card-cv-middle">
        <p className="cv-title">{cvTitle}</p>
        <p className="created-date">{parsedDate(createdDate)}</p>
      </div>
      <div className="card-cv-bottom">
        <a href={fileUrl} target="_blank" rel="noopener noreferrer">
          <Button
            buttonName={('Label', 'See resume')}
            backgroundColor={('backgroundColor', '#0676F2')}
            className="button-view-search"
          />
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
  createdDate: PropTypes.string.isRequired,
};
