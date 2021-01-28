import React from 'react';
import './Footer.css';  
import iconLinkedin from '../../assets/images/icons/linkedin.svg';
import iconGithub from '../../assets/images/icons/github.svg';
import iconWebsite from '../../assets/images/icons/website.svg';    


  
export default function Footer() {              
       
  return (  
    <div className="footer">
        <p>©  HYF Copenhagen</p>
    <ul>
        <a href="https://www.linkedin.com/"> <img src={iconLinkedin}></img></a>
        <a href="https://www.github.com/"><img  src={iconGithub}></img></a>  
        <a href="https://www.hackyourfuture.dk/"><img src={iconWebsite}></img></a>      
    </ul>
     
    </div>
  );
}
