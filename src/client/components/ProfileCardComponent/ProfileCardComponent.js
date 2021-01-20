import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCardComponent.styles.css';
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconWebsite from '../../assets/images/icons/website.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import unknownUser from '../../assets/images/portraits/unknown-black.jpg';

export const ProfileCardComponent = ({
  profile_image_url,
  full_name,
  position,
  linkedin,
  website,
  github,
}) => {
  return (
    <div className="ProfileCardWhole">
      <div className="profileCardTop">
        <div className="circle">
          <img src={profile_image_url || unknownUser} alt="Portrait of user" />
        </div>
        <h2>{full_name}</h2>
        <p>{position}</p>
      </div>

      <hr />
      <div className="ProfileCardSocialLinks">
        {linkedin && (
          <div className="socialLink">
            <img src={iconLinkedin} className="socialIcon" alt="icon" />
            <a href={`https://www.linkedin.com/in/${linkedin}`}>{linkedin}</a>
          </div>
        )}
        {github && (
          <div className="socialLink">
            <img src={iconGithub} className="socialIcon" alt="icon" />
            <a href={`https://github.com/${github}`}>{github}</a>
          </div>
        )}
        {website && (
          <div className="socialLink">
            <img src={iconWebsite} className="socialIcon" alt="icon" />
            <a href={`${website}`}>website</a>
          </div>
        )}
      </div>
    </div>
  );
};

ProfileCardComponent.propTypes = {
  profile_image_url: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
