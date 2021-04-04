/* eslint-disable camelcase */
import React from 'react';
import './ProfileCardComponent.styles.css';
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconWebsite from '../../assets/images/icons/website.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import unknownUser from '../../assets/images/portraits/unknown-black.png';
import { useAuthentication } from '../../hooks/useAuthentication';

export const ProfileCardComponent = () => {
  const {
    userData: {
      profile_image_url,
      full_name,
      position,
      linkedin,
      github,
      website,
    },
  } = useAuthentication();
  const linkedIn = linkedin;
  const profileImageUrl = profile_image_url;
  const fullName = full_name;

  return (
    <div className="profile-card-whole">
      <div className="top">
        <div className="circle">
          <img
            src={profileImageUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = unknownUser;
            }}
            alt="Portrait of user"
          />
        </div>
        <h2 className="user-full-name">{fullName}</h2>
        <p className="user-position">{position}</p>
      </div>

      <hr />
      <div className="profile-card-social-links">
        {linkedIn && (
          <div className="social-link">
            <img
              src={iconLinkedin}
              className="social-icon"
              alt="Social media icon"
            />
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              className="social-link-text"
            >
              {linkedIn}
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
