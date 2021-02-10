import React from 'react';
import './Footer.css';
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import iconWebsite from '../../assets/images/icons/facebook.svg';

export default function Footer() {
  return (
    <div className="footer">
      <p>© HYF Copenhagen</p>
      <ul>
        <a href="https://www.linkedin.com/school/hackyourfuture-copenhagen/">
          {' '}
          <img src={iconLinkedin} alt="Social media icon linkedin" />
        </a>
        <a href="https://github.com/hackyourfuture-cph">
          <img src={iconGithub} alt="Social media icon github" />
        </a>
        <a href="https://www.facebook.com/hackyourfuturecopenhagen/">
          <img src={iconWebsite} alt="Social media icon facebook" />
        </a>
      </ul>
    </div>
  );
}
