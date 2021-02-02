import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import UserIcon from '../../assets/images/icons/user-icon.png'
// import { signOut } from '../../firebase/auth';

export default function Header({ isAuthenticated = false }) {
 
    return (
      <div className="header">
          <div className="home-link">
          <Link to="/" className="no-design">
              <span className="review">Review</span><span className="resume">Resume</span>
            </Link>
          </div>
          <ul className="right-section">
              <li className="user-name">
                {/* className="login-link */}
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
};
