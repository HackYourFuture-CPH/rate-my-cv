import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileLogo from '../../assets/images/icons/icon-profile.png';
import './Header.css';
// import { signOut } from '../../firebase/auth';

export default function Header({ isAuthenticated = false, signOut }) {
  const username = 'Ali Eh';
  const [showSubMenu, setShowSubMenu] = useState(false);

  if (!isAuthenticated) {
    return (
      <nav className="navigation">
        <ul className="nav-elements">
          <li className="review-resume">
            <Link to="/" className="review">
              Review<span className="resume">Resume</span>
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="login-link">
              Login
            </Link>
          </li>
          <li className='icon'>
            <img src={ProfileLogo} alt="profile icon" />
          </li>
        </ul>
      </nav>
    );
  }
    return (
      <nav className="navigation">
        <ul className="nav-elements">
          <li className="review-resume">
            <Link to="/" className="review">
              Review<span className="resume">Resume</span>
            </Link>
          </li>
          <li className="login-link">{username}</li>
          <li  className='icon'>
            <button className='button-icon'>
              <img
                src={ProfileLogo}
                alt="profile icon"
                onClick={() => setShowSubMenu(true)}
              />
            </button>
            {showSubMenu ? (
              <>
              <div className='triangle'> </div>
              <ul className="subnav link-style">
                {/* <li className='triangle'> </li> */}
                <li>
                  <Link to="/profile" className='link-style'><span>Edit profile</span></Link>
                </li>
                <li>
                  <Link to="/sign-in"className='link-style'><span>Sign out</span></Link>
                </li>
              </ul>
              </>
            ) : null}
          </li>
        </ul>
      </nav>
    );
  }


Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};
