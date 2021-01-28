import React from 'react';
import './Footer.css';  
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import iconWebsite from '../../assets/images/icons/website.svg';   
import PropTypes from 'prop-types'; 


  
export default function Footer() {                     
       
  return (  
    <div className="footer">
        <p>©  HYF Copenhagen</p>
    <ul>
        <a href="https://www.linkedin.com/"> <img src={iconLinkedin} alt="Social media icon linkedin"/></a>
        <a href="https://www.github.com/"><img  src={iconGithub} alt="Social media icon github"/></a>  
        <a href="https://www.hackyourfuture.dk/"><img src={iconWebsite} alt="Social media icon hackyoufuture"/></a>      
    </ul>
     
    </div>
  );
}

Footer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };