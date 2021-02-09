import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import UserIcon from '../../assets/images/icons/user-icon.png'

export default function Header({ isAuthenticated = false, username}) {

  if (isAuthenticated) { 
    return (
    <div className="header">
    <div className="home-link">
    <Link to="/" className="no-design">
        <span className="review">Review</span><span className="resume">Resume</span>
      </Link>
    </div>
    <ul className="right-section">
        <li className="user-name">{username}</li>
        <li className="menu">
            <form>
                <input type="submit" className="icon" value="" style={{ backgroundImage: `url(${UserIcon})` }}/>
              </form>
              <div className="drop-down">
                <div className='triangle'> </div>
                <div className="nav-position_color">  
                    <ul className="subnav">
                  <li>
                    <Link to="/profile" className="white-design"><span>Edit profile</span></Link>
                  </li>
                  <li>
                    <Link to="/sign-in" className="white-design"><span>Sign out</span></Link>
                  </li>
                    </ul>
                </div>
                </div>
        </li>
    </ul>
    </div>
     );
    }
    return (
      <div className="header">
          <div className="home-link">
          <Link to="/" className="no-design">
              <span className="review">Review</span><span className="resume">Resume</span>
            </Link>
          </div>
          <ul className="right-section">
              <li className="user-name">
                    <Link to="/sign-in" className="black-design">
                    Login
                 </Link>
              </li>
              <li className="menu">
                  <form>
                      <input type="submit" className="login-link" value="" style={{ backgroundImage: `url(${UserIcon})` }}/>
                    </form>
              </li>
          </ul>
          </div>
            );
          }

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  username:PropTypes.string
};
Header.defaultProps={
  username:''
}