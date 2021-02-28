import React from 'react';
import './ProfileCardComponent.styles.css';
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconWebsite from '../../assets/images/icons/website.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import unknownUser from '../../assets/images/portraits/unknown-black.png';
import { useAuthentication } from '../../hooks/useAuthentication';

export const ProfileCardComponent = () => {
  const { userData } = useAuthentication();

  return (
    <div className="profile-card-whole">
      <div className="top">
        <div className="circle">
          <img
            src={userData.profileImageUrl || unknownUser}
            alt="Portrait of user"
          />
        </div>
        <h2 className="user-full-name">{userData.fullName}</h2>
        <p className="user-position">{userData.position}</p>
      </div>

      <hr />
      <div className="profile-card-social-links">
        {userData.linkedIn && (
          <div className="social-link">
            <img
              src={iconLinkedin}
              className="social-icon"
              alt="Social media icon"
            />
            <a
              href={`https://www.linkedin.com/in/${userData.linkedIn}`}
              className="social-link-text"
            >
              {userData.linkedIn}
            </a>
          </div>
        )}
        {userData.github && (
          <div className="social-link">
            <img
              src={iconGithub}
              className="social-icon"
              alt="Social media icon"
            />
            <a
              href={`https://github.com/${userData.github}`}
              className="social-link-text"
            >
              {userData.github}
            </a>
          </div>
        )}
        {userData.website && (
          <div className="social-link">
            <img src={iconWebsite} className="social-icon" alt="icon" />
            <a href={`${userData.website}`} className="social-link-text">
              website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
