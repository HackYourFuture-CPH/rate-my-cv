import React from 'react';
import './Footer.css';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import Github from '../../assets/images/icons/github.svg';
import Facebook from '../../assets/images/icons/facebook.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="hyf-footer">© HYF Copenhagen</div>
      <div className="social-links-icons">
        <a href="https://www.linkedin.com/school/hackyourfuture-copenhagen/">
          <img src={Linkedin} alt="Social media icon linkedin" />
        </a>
        <a href="https://github.com/hackyourfuture-cph">
          <img src={Github} alt="Social media icon github" />
        </a>
        <a href="https://www.facebook.com/hackyourfuturecopenhagen/">
          <img src={Facebook} alt="Social media icon facebook" />
        </a>
      </div>
    </div>
  );
}
