import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCardComponent.styles.css';
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconWebsite from '../../assets/images/icons/website.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import unknownUser from '../../assets/images/portraits/unknown-black.png';

export const ProfileCardComponent = ({
  profileImageUrl,
  fullName,
  position,
  linkedin,
  website,
  github,
}) => {
  return (
    <div className="profile-card-whole">
      <div className="top">
        <div className="circle">
          <img src={profileImageUrl || unknownUser} alt="Portrait of user" />
        </div>
        <h2 className="user-full-name">{fullName}</h2>
        <p className="user-position">{position}</p>
      </div>

      <hr />
      <div className="profile-card-social-links">
        {linkedin && (
          <div className="social-link">
            <img
              src={iconLinkedin}
              className="social-icon"
              alt="Social media icon"
            />
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              className="social-link-text"
            >
              {linkedin}
            </a>
          </div>
        )}
        {github && (
          <div className="social-link">
            <img
              src={iconGithub}
              className="social-icon"
              alt="Social media icon"
            />
            <a
              href={`https://github.com/${github}`}
              className="social-link-text"
            >
              {github}
            </a>
          </div>
        )}
        {website && (
          <div className="social-link">
            <img src={iconWebsite} className="social-icon" alt="icon" />
            <a href={`${website}`} className="social-link-text">
              website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

ProfileCardComponent.propTypes = {
  profileImageUrl: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  website: PropTypes.string,
  github: PropTypes.string,
};

ProfileCardComponent.defaultProps = {
  profileImageUrl: unknownUser,
  linkedin: undefined,
  website: undefined,
  github: undefined,
};
